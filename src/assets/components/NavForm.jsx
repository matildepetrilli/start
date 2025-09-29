import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavForm = () => {
  return (
    <>
   <div className="fermo bg-dark text-center">
  <Link to="/" className="d-block bg-dark text-secondary mt-4 text-decoration-none"> 
    <i className="bi bi-house-door-fill me-2"></i>
    <span className="d-none d-lg-inline">HOME</span>
  </Link>
  <hr className="text-secondary" />

  <Link to="/Pagina4" className="d-block bg-dark text-secondary  text-decoration-none">
    <i className="bi bi-person-fill me-2"></i>
    <span className="d-none d-lg-inline">CHI SONO?</span>
  </Link>
  <hr className="text-secondary" />

  <Link to="/Pagina3" className="d-block bg-dark text-secondary text-decoration-none">
   <i class="bi bi-geo-alt-fill me-2"></i>
    <span className="d-none d-lg-inline">DOVE?</span>
  </Link>
  <hr className="text-secondary" />

   <Link
        to="/Pagina5"
        className="d-block bg-dark text-secondary text-decoration-none"
        >
        <i class="bi bi-person-lines-fill me-2"></i>
        <span className="d-none d-lg-inline">CONTATTI</span>
        </Link>
         <hr className="text-secondary" />
</div>
    </>
  );
};

export default NavForm