import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="footer-container">
        {/*PARTE SINISTRA*/}
        <div className="footer-left ">
          <h3>Avv.Federica Bontempi</h3>
          <p>Diritto Ambientale.</p>

          <div className="social-icons ms-4 mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        {/*PARTE DESTRA*/}
        <div className="footer-right">
          <h4 className="mb-3">Contatti</h4>

          <p>
            <i className="bi bi-envelope-fill" aria-hidden="true"></i>
            <a
              className="Afooter"
              href="https://mail.google.com/mail/?view=cm&to=bontempifederica1996@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bontempifederica1996@gmail.com
            </a>
          </p>

          <p>
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            <a
              className="Afooter"
              href="tel:+393406190254"
              aria-label="Chiama +39 3406190254"
            >
              +39 3406190254
            </a>
          </p>
          <Link to="/Pagina3" className="Afooter">
            <p>
              <i className="bi bi-geo-alt-fill "></i> Via Naviglio 14, Faenza
              (RA), 48018
            </p>
          </Link>

          <p>
            <i class="bi bi-printer-fill"></i>
            <a className="Afooter">0546 693378</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom mt-1">
        <p>
          &copy; {new Date().getFullYear()} Bontempi. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
