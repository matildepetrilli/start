const AppDove = () => {
return(
    <>
 <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "", minHeight: "100vh", padding: "40px 20px" }}>
      
        <h1 style={{ fontWeight: 700, fontSize: "2.8rem", color: "#222", marginBottom: 20, textAlign: "center", letterSpacing: "1.2px" }}>
          Studio Legale Bontempi
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#444", marginBottom: 40, textAlign: "center" }}>
          Esperienza e professionalità nel diritto civile, penale e ambientale.<br />
          Sede legale e studio in Via Naviglio 14, Faenza (RA).
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {/* INDIRIZZO */}
          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#222", marginBottom: 15, borderBottom: "2px solid #333436ff", paddingBottom: 8, maxWidth: 220 }}>
              Indirizzo
            </h2>
            <address style={{ fontSize: "1.1rem", color: "#333", fontStyle: "normal", lineHeight: 1.5 }}>
              Via Naviglio 14<br />
              48018 Faenza (RA)<br />
              Italia
            </address>
            <a
              href="https://www.google.com/maps/place/Via+Naviglio,+14,+48018+Faenza+RA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 15,
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "white",
                borderRadius: 4,
                textDecoration: "none",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#003d80"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0056b3"}
            >
              Apri su Google Maps
            </a>
          </section>

          {/* MAPPA */}
          <section style={{ width: "100%", height: 400, borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <iframe
              title="Mappa Studio Legale"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.4127653029367!2d11.878276615721122!3d44.28788547910664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e7c65c28f73f1%3A0x2a6212f43f0c198!2sVia%20Naviglio%2C%2014%2C%2048000%20Faenza%20RA!5e0!3m2!1sit!2sit!4v1695910584382!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>
      </div>
    
    </>
)
}

export default AppDove