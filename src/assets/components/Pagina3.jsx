import { Col, Container, Row } from "react-bootstrap"
import NavDove from "./NavDove"
import AppDove from "./AppDove"


const Pagina3 = () => {
    return(
        <> 
     <Container fluid className="sfondo">
        <Row>    
            <Col sm={1} lg={2} className='bg-dark'>          
                <NavDove/>
            </Col> 
                <Col sm={11} lg={10} >
                <AppDove/>
                </Col>     
       </Row> 
        </Container>
         </>
    )
}

export default Pagina3