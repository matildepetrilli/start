import { Col, Container, Row } from "react-bootstrap"
import NavChiSiamo from "./NavChiSono"
import AppChiSiamo from "./AppChiSono"



const Pagina4 = () => {
    return(
        <> 
     <Container fluid className="sfondo">
        <Row>    
            <Col sm={1} lg={2} className='bg-dark'>          
                <NavChiSiamo/>
            </Col> 
                <Col sm={11} lg={10} >
               <AppChiSiamo/>
                </Col>     
       </Row> 
        </Container>
         </>
    )
}

export default Pagina4