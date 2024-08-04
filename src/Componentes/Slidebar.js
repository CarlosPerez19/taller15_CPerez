import React from 'react';
import Nissan from '../IMG/81nWah9HQIL._AC_UF894,1000_QL80_.jpg';

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <img
            src={Nissan}
            className='logo-epn'
            alt="logo"
            width='100px'
            height= '100px'
        />

      <p>Contenido de Sidebar</p>
      <ul class="collapse">
        <li><a href="#">Mi Perfil</a></li>
        <li><a href="#">Tareas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;