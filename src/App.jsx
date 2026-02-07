import { useState } from "react";
 
//  APP PRINCIPAL
function App() {
  const [vista, setVista] = useState("inicio");
 
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "650px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#14B8A6" }}>
        Tarea 3 – Desarrollo Móvil
      </h1>
 
      {/* Menú */}
      <nav style={{ marginBottom: "20px", textAlign: "center" }}>
        <BotonMenu onClick={() => setVista("inicio")} texto="🏠 Inicio" />
        <BotonMenu onClick={() => setVista("suma")} texto="➕ Sumadora" />
        <BotonMenu onClick={() => setVista("traductor")} texto="🔤 Traductor" />
        <BotonMenu onClick={() => setVista("tabla")} texto="✖️ Tabla" />
        <BotonMenu onClick={() => setVista("experiencia")} texto="🎥 Experiencia" />
      </nav>
 
      {/* Vistas */}
      {vista === "inicio" && <Inicio />}
      {vista === "suma" && <Sumadora />}
      {vista === "traductor" && <Traductor />}
      {vista === "tabla" && <Tabla />}
      {vista === "experiencia" && <Experiencia />}
    </div>
  );
}
 
//  BOTÓN CON EFECTO 3D
function BotonMenu({ onClick, texto }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 14px",
        margin: "5px",
        border: "none",
        borderRadius: "6px",
        backgroundColor: "#14B8A6",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "transform 0.3s",
      }}
      onMouseEnter={e => (e.target.style.transform = "rotateX(15deg) rotateY(10deg) scale(1.1)")}
      onMouseLeave={e => (e.target.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)")}
    >
      {texto}
    </button>
  );
}
 
//  INICIO
function Inicio() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Datos Personales</h2>
      <img src="/foto.png" width="120" style={{ borderRadius: "8px", marginBottom: "10px" }} />
      <p><strong>Nombre:</strong> Rozenny Pie Valentin</p>
      <p><strong>Matrícula:</strong> 2021-0685</p>
      <p><strong>Correo:</strong> 20210685@itla.edu.do</p>
    </div>
  );
}
 
//  SUMADORA INTERACTIVA
function Sumadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const resultado = Number(a) + Number(b);
 
  const color = resultado > 0 ? "#4CAF50" : resultado === 0 ? "#FF9800" : "#F44336";
 
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sumadora Interactiva</h2>
      <p>Ingresa dos números para la suma:</p>
      <input
        type="number"
        placeholder="Número 1"
        onChange={e => setA(e.target.value)}
        value={a}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Número 2"
        onChange={e => setB(e.target.value)}
        value={b}
        style={{ padding: "8px" }}
      />
 
      <div
        style={{
          marginTop: "20px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#fff",
          margin: "20px auto",
          transition: "transform 0.3s",
          transform: a || b ? "scale(1.2)" : "scale(1)"
        }}
      >
        {resultado}
      </div>
      <p>Nice, se sumaron......</p>
    </div>
  );
}
 
//  TRADUCTOR NÚMEROS A LETRAS 1-1000
function Traductor() {
  const [num, setNum] = useState("");
 
  function convertirNumeroALetras(n) {
    if (n < 1 || n > 1000) return "Número fuera de rango";
    if (n === 1000) return "mil";
 
    const unidades = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
    const especiales = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
    const decenas = ["","diez","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
    const centenas = ["","ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];
 
    if (n < 10) return unidades[n];
    if (n < 20) return especiales[n - 10];
    if (n < 100) {
      const d = Math.floor(n / 10);
      const u = n % 10;
      return decenas[d] + (u ? " y " + unidades[u] : "");
    }
    const c = Math.floor(n / 100);
    const r = n % 100;
    if (n === 100) return "cien";
    return centenas[c] + (r ? " " + convertirNumeroALetras(r) : "");
  }
 
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Traductor de Números a Letras</h2>
      <input
        type="number"
        placeholder="1 - 1000"
        onChange={e => setNum(Number(e.target.value))}
        value={num}
        style={{ padding: "8px" }}
      />
      <p style={{ marginTop: "15px", fontWeight: "bold", fontSize: "18px" }}>
        {convertirNumeroALetras(num)}
      </p>
    </div>
  );
}
 
// TABLA DE MULTIPLICAR
function Tabla() {
  const [num, setNum] = useState(1);
 
  return (
    <div style={{ textAlign: "center" }}>
      <h2>✖️ Tabla de Multiplicar</h2>
      <input
        type="number"
        placeholder="Número"
        onChange={e => setNum(Number(e.target.value))}
        value={num}
        style={{ padding: "8px", marginBottom: "15px" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Array.from({ length: 13 }, (_, i) => (
          <li
            key={i}
            style={{
              backgroundColor: i % 2 === 0 ? "#e23b3b" : "#491458",
              padding: "5px",
              marginBottom: "2px",
              borderRadius: "4px"
            }}
          >
            {num} x {i + 1} = {num * (i + 1)}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
//  EXPERIENCIA PERSONAL, EL VIDEO EN YT
function Experiencia() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Experiencia Personal</h2>
      <p>En este video explico cómo realicé esta tarea, los retos que enfrenté y lo que aprendí.  
      ¡Espero que les guste y se note mi entusiasmo! jajajaja...... </p>
      <iframe
        width="360"
        height="215"
        src="https://www.youtube.com/watch?v=2UpwTp-owL4"
        allowFullScreen
        style={{ borderRadius: "8px" }}
      ></iframe>
    </div>
  );
}
 
export default App;
