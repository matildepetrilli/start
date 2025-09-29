import {Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppMain = () => {
  return (
      <Container fluid className="sfondo ">
        <Row className="justify-content-center w-100">
            {/*PROMA RIGA*/}
          <Col md={3}>
          <Link to="./Pagina5">
            <Card className="MainContainer mt-5">
              <Card.Img
                src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
                className="card-image"
              />
               <div className="overlay-text">Contatti</div>
            </Card>
            </Link>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
          <Link to="./Pagina4">
            <Card className="MainContainer mt-5">
              <Card.Img
                src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
                className="card-image"
              />
              <div className="overlay-text">Chi sono?</div>
            </Card>
            </Link>
          </Col>

          {/*SECONDA RIGA*/}
          <Col md={12} className="d-flex justify-content-center align-items-center text-center">
          <div className="bg-dark text-white mt-3 w-75 rounded-3">
            <h2 className="pt-1">Avv.Federica Bontempi</h2>
            <p>diritto ambientale</p>
            </div>
          </Col>

          {/*TERZA RIGA*/}
           <Col md={6} className="mt-3">
           <Link to="./Pagina3">
            <Card className="MainContainer mb-5">
              <Card.Img
                src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
                className="card-image"
              />
              <div className="overlay-text">Dove?</div>
            </Card>
            </Link>
          </Col>
          <Col md={1}></Col>
          <Col md={3} className="mt-3">
          <Link to="./Pagina2">
            <Card className="MainContainer mb-5">
              <Card.Img
                src="https://i.pinimg.com/originals/e8/90/1c/e8901c74e0ffaebaac19d375c30c39b8.jpg"
                className="card-image"
              />
              <div className="overlay-text" >Contattami</div>
            </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    
  );
};

export default AppMain;
