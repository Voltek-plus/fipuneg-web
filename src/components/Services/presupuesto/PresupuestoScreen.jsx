import './PresupuestoScreen.css'; 
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const PresupuestoScreen = () => {
  return (
    <div>
    <Header />
    <div className="presupuesto-screen">
      <div className="presupuesto-container">
        <h1 className="presupuesto-title">Solicitar Presupuesto</h1>
        <p className="presupuesto-subtitle">
          Completa el formulario y te responderemos en menos de 24 horas.
        </p>

        <form className="presupuesto-form">
          <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="service">Servicio de interés</label>
            <select id="service" name="service">
              <option value="">Selecciona un servicio</option>
              <option value="web">Desarrollo Web</option>
              <option value="app">Aplicaciones Móviles</option>
              <option value="branding">Branding y Diseño</option>
              <option value="consulting">Consultoría Digital</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Descripción del proyecto</label>
            <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu idea o necesidad..."
                maxLength="1000" // Opcional: límite de caracteres
            ></textarea>
            <div className="char-count">
                <small><span id="charCounter">0</span>/1000</small>
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default PresupuestoScreen;