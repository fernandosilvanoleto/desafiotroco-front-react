import './style.css';
import ChangeCalculator from "../Sales/ChangeCalculator";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Bem-vindo 👋</h1>
      <p>Sistema de cálculo de troco</p>

      <button className="home-button" onClick={() => navigate("/calculator")}>
        Ir para Calculadora
      </button>

    </div>
  );
}
