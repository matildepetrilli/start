import { Col, Container, Row } from "react-bootstrap"
import NavContatti from "./NavContatti"
import AppContatti from "./AppContatti"



const Pagina5= () => {
    return(
        <> 
     <Container fluid className="sfondo">
        <Row>    
            <Col sm={1} lg={2} className='bg-dark'>          
                <NavContatti/>
            </Col> 
                <Col sm={11} lg={10} >
               <AppContatti/>
                </Col>     
       </Row> 
        </Container>
         </>
    )
}

export default Pagina5