import 'bootstrap-icons/font/bootstrap-icons.css';

const AppFooter = () => {
  return (
      <footer className="footer bg-dark text-white pt-4">
      <div className="footer-container">

{/*PARTE SINISTRA*/}
        <div className="footer-left ">
          <h3>Avv.Federica Bontempi</h3>
          <p>Diritto Ambientale.</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
{/*PARTE DESTRA*/}
        <div className="footer-right">
          <h4 className="mb-3">Contatti</h4>
          <p><i className="bi bi-envelope-fill"></i> matilde.petrilli10@gmail.com</p>
          <p><i className="bi bi-telephone-fill"></i> +39 3421513230</p>
          <p><i className="bi bi-geo-alt-fill"></i> Via Biancanigo 618, CastelBolognese</p>
        </div>

      </div>

      <div className="footer-bottom mt-1">
        <p>&copy; {new Date().getFullYear()} Matilde. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default AppFooter