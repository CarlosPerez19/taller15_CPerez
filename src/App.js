import './App.css';
import Header from './Componentes/Header';
import Slidebar from './Componentes/Slidebar';
import Nav from './Componentes/Nav';
import Footer from './Componentes/Footer';
import Tarea from './Componentes/Tareas';
import TareaFormulario from './Componentes/TareaFormulario';
import Nissan from './IMG/81nWah9HQIL._AC_UF894,1000_QL80_.jpg';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img src={Nissan} className='logo-epn' alt="logo" />
      </div>

      <Header />

      <Nav />

      <div className='main-content'>
        <Slidebar />
        <div className='lista-tareas'>
          <h1>Lista de Tareas</h1>
          <TareaFormulario />
          <Tarea texto="Aprendiendo React en Diseño de Interfaces" completada={false} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
