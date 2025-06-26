import { useState } from "react";
import "./Sidebar.css";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
};

export const Sidebar = () => {
  const [active, setActive] = useState("inicio");
  const [isVisible, toggleMenu] = useToggle(true);

  return (
    <aside className="sidebar">
      <button onClick={toggleMenu} className="toggle-menu-btn">
        {isVisible ? "Ocultar Menú" : "Mostrar Menú"}
      </button>

      {isVisible && (
        <nav>
          <ul>
            <li
              className={active === "inicio" ? "active" : ""}
              onClick={() => setActive("inicio")}
            >
              <a href="#inicio">Inicio</a>
            </li>
            <li
              className={active === "servicios" ? "active" : ""}
              onClick={() => setActive("servicios")}
            >
              <a href="#servicios">Servicios</a>
            </li>
            <li
              className={active === "contacto" ? "active" : ""}
              onClick={() => setActive("contacto")}
            >
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
};