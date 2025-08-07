// AdminDashboard.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="admin-container">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h2>FIPUNEG Admin</h2>
            <button className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>
          <nav>
            <ul>
              <li className={activeTab === 'dashboard' ? 'active' : ''}>
                <Link to="/" onClick={() => setActiveTab('dashboard')}>
                  <FaChartBar /> Dashboard
                </Link>
              </li>
              <li className={activeTab === 'usuarios' ? 'active' : ''}>
                <Link to="/usuarios" onClick={() => setActiveTab('usuarios')}>
                  <FaUsers /> Usuarios
                </Link>
              </li>
              <li className={activeTab === 'configuracion' ? 'active' : ''}>
                <Link to="/configuracion" onClick={() => setActiveTab('configuracion')}>
                  <FaCog /> Configuración
                </Link>
              </li>
            </ul>
          </nav>
          <div className="sidebar-footer">
            <button className="logout-btn">
              <FaSignOutAlt /> Cerrar Sesión
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Navigation */}
          <header className="top-nav">
            <button className="menu-btn" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h1>{getPageTitle(activeTab)}</h1>
            <div className="user-profile">
              <span>Admin FIPUNEG</span>
              <div className="avatar">A</div>
            </div>
          </header>

          {/* Page Content */}
          <div className="content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/usuarios" element={<UsersPage />} />
              <Route path="/configuracion" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

// Componentes de las páginas
const DashboardPage = () => (
  <div>
    <div className="stats-container">
      <StatCard title="Usuarios Registrados" value="1,245" change="+12%" positive />
      <StatCard title="Cursos Activos" value="24" change="+2" positive />
      <StatCard title="Eventos" value="5" change="-1" negative />
    </div>
    
    <div className="charts-container">
      <div className="chart-card">
        <h3>Actividad Reciente</h3>
        {/* Aquí iría un gráfico (podrías usar Chart.js o similar) */}
        <div className="placeholder-chart">Gráfico de actividad</div>
      </div>
      <div className="chart-card">
        <h3>Registros por mes</h3>
        <div className="placeholder-chart">Gráfico de registros</div>
      </div>
    </div>
  </div>
);

const UsersPage = () => (
  <div>
    <div className="page-actions">
      <button className="btn-primary">Nuevo Usuario</button>
      <div className="search-box">
        <input type="text" placeholder="Buscar usuarios..." />
      </div>
    </div>
    
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Juan Pérez</td>
          <td>juan@fipuneg.edu</td>
          <td>Administrador</td>
          <td><span className="badge active">Activo</span></td>
          <td>
            <button className="btn-sm">Editar</button>
            <button className="btn-sm danger">Eliminar</button>
          </td>
        </tr>
        {/* Más filas de usuarios... */}
      </tbody>
    </table>
    
    <div className="pagination">
      <button disabled>Anterior</button>
      <span>Página 1 de 5</span>
      <button>Siguiente</button>
    </div>
  </div>
);

const SettingsPage = () => (
  <div>
    <h2>Configuración del Sistema</h2>
    <div className="settings-form">
      <div className="form-group">
        <label>Nombre de la Institución</label>
        <input type="text" defaultValue="FIPUNEG" />
      </div>
      <div className="form-group">
        <label>Logo</label>
        <input type="file" />
      </div>
      <div className="form-group">
        <label>Tema del Sistema</label>
        <select>
          <option>Claro</option>
          <option>Oscuro</option>
          <option>Azul</option>
        </select>
      </div>
      <button className="btn-primary">Guardar Cambios</button>
    </div>
  </div>
);

// Componente auxiliar para tarjetas de estadísticas
const StatCard = ({ title, value, change, positive }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <div className="stat-value">{value}</div>
    <div className={`stat-change ${positive ? 'positive' : 'negative'}`}>
      {change}
    </div>
  </div>
);

// Función auxiliar para títulos de página
const getPageTitle = (tab) => {
  switch(tab) {
    case 'dashboard': return 'Dashboard';
    case 'usuarios': return 'Gestión de Usuarios';
    case 'configuracion': return 'Configuración del Sistema';
    default: return 'Dashboard';
  }
};

export default AdminDashboard;