import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function AppForm() {
  const initialFormData = {
    nome: "",
    cognome: "",
    email: "",
    nazionalita: "",
    dataNascita: "",
    residenza: "",
    richiesta: "",
    accetta: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0]; // "2025-09-23"
  const minDate = "1932-01-01";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { dataNascita } = formData;

    // Calcolo dell'età
    const birthDate = new Date(dataNascita);
    const todayDate = new Date();

    let age = todayDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = todayDate.getMonth() - birthDate.getMonth();
    const dayDiff = todayDate.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age < 18) {
      alert("Devi avere almeno 18 anni per inviare il modulo.");
      return;
    }

    // Verifica che tutti i campi siano riempiti + checkbox accettata
    const allFieldsFilled = Object.entries(formData).every(([val]) => {
      if (typeof val === "boolean") return val === true;
      return val !== null && val !== undefined && String(val).trim() !== "";
    });

    if (!allFieldsFilled) {
      alert("Per favore compila tutti i campi e accetta il salvataggio dei dati.");
      return;
    }

    // Invia email
    const serviceID = "service_dmfki9m";
    const templateID = "template_4ie7dqr";
    const publicKey = "8n4ybNiln5wdvRRJE";

    const templateParams = {
      nome: formData.nome,
      cognome: formData.cognome,
      email: formData.email,
      dataNascita: formData.dataNascita,
      nazionalita: formData.nazionalita,
      residenza: formData.residenza,
      richiesta: formData.richiesta,
      to_email: "matildepetrilli410@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setFormData(initialFormData); // Reset form
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Errore nell’invio dell’email: " + err.text);
      });
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "700px" }}>
      <div className="mt-4 mb-5">
        <h2>Contattami</h2>
        <p className="smalltext text-secondary text-smaller">
          Mandami una mail compilando semplicemente i campi qui sotto
        </p>
      </div>

      {submitted && (
        <Alert variant="success">Email inviata con successo!</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Data di nascita</Form.Label>
              <Form.Control
                type="date"
                name="dataNascita"
                value={formData.dataNascita}
                onChange={handleChange}
                min={minDate}
                max={today}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Label className="mt-2">Inserisci la tua nazionalità</Form.Label>
            <Form.Select
              name="nazionalita"
              value={formData.nazionalita}
              onChange={handleChange}
              required
            >
              <option value="">es. Italiana</option>
              <option value="Italiana">Italiana</option>
              <option value="Francese">Francese</option>
              <option value="Tedesca">Tedesca</option>
              <option value="Spagnola">Spagnola</option>
              <option value="Altra">Altra</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Dove abiti</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es. Faenza"
                name="residenza"
                value={formData.residenza}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3 mt-2">
          <Form.Label>Di cosa hai bisogno?</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Scrivi qui la tua richiesta..."
            name="richiesta"
            value={formData.richiesta}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-2">
          <Form.Check
            type="checkbox"
            label="privacy dei dati personali"
            id="privacy-consent"
            name="accetta"
            checked={formData.accetta}
            onChange={handleChange}
            required
          />
          <label htmlFor="privacy-consent" className="smaller text-secondary ms-4">
            Ho letto e accetto l'informativa sulla{" "}
            <a href="/privacy-policy"> privacy</a>.
          </label>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-5 mt-2 p-1 w-25">
          Invia Email
        </Button>
      </Form>
    </Container>
  );
}

export default AppForm;

