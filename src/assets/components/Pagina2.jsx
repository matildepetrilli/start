import { Col, Container, Row } from "react-bootstrap";
import AppForm from "./AppForm";
import NavForm from "./NavForm";


const Pagina2 = () => {
    return(
        <Container fluid className="sfondo">
        <Row>    
            <Col sm={1} lg={2} className='bg-dark'>          
                <NavForm/>
                </Col> 
                <Col sm={11} lg={10} >
                <AppForm/> 
                </Col>     
       </Row> 
        </Container>
    )
}
export default Pagina2