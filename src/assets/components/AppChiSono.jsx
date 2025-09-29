import { Container, Row, Col} from "react-bootstrap"

const AppChiSono = () => {
    return(
        <>
        
        <Row>
      <Col md={8} className="mt-5">
      <h1 className="text-center">ESPERIENZA</h1>
                <p className="ms-3">
                    Laureatasi a marzo 2021 presso la Facoltà di Giurisprudenza con sede a Bologna, si è abilitata all&#39;esercizio della professione forense nel giugno 2024, presso la Corte d&#39;appello di Bologna ed è attualmente iscritta all&#39;Ordine Avvocati di Ravenna.
                </p>
                <hr className="w-75 texnpm t-center"/>
                <p className="ms-3">La passione per il Diritto dell'Ambiente, sviluppata fin dai tempi universitari con una tesi in Diritto dell’ambiente e Governo del territorio dedicata alle molteplici funzioni delle Pubbliche Amministrazioni nel campo ambientale, si è poi consolidata grazie all’esperienza professionale maturata presso studi legali, noti sul territorio italiano per la rilevante preparazione nella materia di interesse, nonché grazie alla frequentazione di corsi di formazione, da ultimo un Master di I livello in Diritto dell’Ambiente e governo del territorio, terminato a febbraio 2024, presso l’università Cà Foscari di Venezia.
</p>
                </Col>
                 <Col md={4}>
                <img src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg" className="ChiSono"/>
                </Col>
        </Row>
        </>
    )
}

export default AppChiSono