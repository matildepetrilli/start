import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppContatti = () => {
  return (
    <>
      <Row className="align-items-center px-4 py-5">
        <Col md={4} className="text-center">
          <img
            src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
            alt="Avv. Bontempi"
            className="ChiSono"
          />
        </Col>

        <Col md={7} className="mb-4 mb-md-0">
          <h1 className="presentazione text-center mb-4">
            <span className="gradient-text">I MIEI CONTATTI:</span>
          </h1>

          <div className="text-justify pe-3 mt-5">
            <p className="mt-4 ms-5 me-2">
              TEL. STUDIO:
              <br />
              <i
                className="bi bi-telephone-fill me-2 ms-1"
                aria-hidden="true"
              ></i>
              <a
                className="Afooter"
                href="tel:0546665472"
                aria-label="Chiama 0546665472"
              >
                0546665472
              </a>
            </p>
            <p className="mt-4 ms-5 me-2">
              TEL. PERSONALE:
              <br />
              <i
                className="bi bi-telephone-fill me-2 ms-1"
                aria-hidden="true"
              ></i>
              <a
                className="Afooter"
                href="tel:+393406190254"
                aria-label="Chiama +393406190254"
              >
                +39 3406190254
              </a>
            </p>
            <p className="mt-4 ms-5 me-2">
              MAIL PERSONALE:
              <br />
              <i
                className="bi bi-envelope-fill me-2 ms-1"
                aria-hidden="true"
              ></i>
              <a
                className="Afooter"
                href="https://mail.google.com/mail/?view=cm&to=bontempifederica1996@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                bontempifederica1996@gmail.com
              </a>
            </p>
            <p className="mt-4 ms-5 me-2">
              INDIRIZZO:
              <br />
              <i className="bi bi-geo-alt-fill me-2 ms-1"></i>
              <Link to="/Pagina3" className="Afooter">
                Via Naviglio 14, Faenza (RA), 48018
              </Link>
            </p>
            <p className="mt-4 ms-5 me-2">
                P. IVA:
                <br/>
                <i class="bi bi-file-earmark-text-fill me-2 ms-1"></i>
                <a className="Afooter">
                  02708680398  
                </a>
            </p>
            <p className="mt-4 ms-5 me-2">
                FAX DELLO STUDIO:
                <br/>
            <i class="bi bi-printer-fill me-2 ms-1"></i>
            <a className="Afooter">0546 693378</a>
          </p>

          <p className="mt-4 ms-5 me-2">
              PEC PERSONALE:
              <br />
              <i
                className="bi bi-envelope-fill me-2 ms-1"
                aria-hidden="true"
              ></i>
              <a
                className="Afooter"
                href="https://bontempifederica@pec.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                bontempifederica1996@pec.it
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AppContatti;
