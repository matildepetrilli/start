import { Container, Row, Col} from "react-bootstrap"

const AppChiSono = () => {
    return(
        <>
        
    <Row className="align-items-center px-4 py-5">
  <Col md={7} className="mb-4 mb-md-0">
    <h1 className="presentazione text-center mb-4">
      <span className="gradient-text">ESPERIENZA</span>
    </h1>

    <div className="text-justify pe-3">
      <p className="mt-4 ms-5">
        Laureatasi a marzo 2021 presso la Facoltà di Giurisprudenza di Bologna,
        si è abilitata all’esercizio della professione forense nel giugno 2024,
        presso la Corte d’Appello di Bologna ed è attualmente iscritta
        all’Ordine Avvocati di Ravenna.
      </p>

<br />
        
      <p className=" ms-5">
        La passione per il Diritto dell'Ambiente, sviluppata fin dai tempi
        universitari con una tesi dedicata alle funzioni delle Pubbliche
        Amministrazioni in ambito ambientale, si è consolidata grazie
        all’esperienza presso studi legali di riferimento e alla frequentazione
        di corsi specialistici. Ha recentemente concluso un Master di I livello
        in Diritto dell’Ambiente e Governo del Territorio presso l’Università
        Ca’ Foscari di Venezia, nel febbraio 2024.
      </p>

        <br />

      <p className="mb-5 ms-5">
        Ha inoltre approfondito le tematiche legate alla sostenibilità ambientale
        e alla rendicontazione ESG, collaborando con realtà aziendali del
        territorio emiliano-romagnolo e conseguendo un diploma CEPAS di Master
        “ESG Online”, promosso da Wolters Kluwer in collaborazione con BDO.
        <br />
        <br />
        L’avv. Bontempi mette la propria esperienza al servizio di enti, aziende e
        privati, garantendo assistenza personalizzata e curata. Attualmente opera
        a Faenza (RA), presso lo studio di Via Naviglio 14, e anche sul territorio
        bolognese.
      </p>
    </div>
  </Col>

  <Col md={4} className="text-center">
    <img
      src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
      alt="Avv. Bontempi"
      className="ChiSono"
    />
  </Col>
</Row>
</>
    )
}

export default AppChiSono