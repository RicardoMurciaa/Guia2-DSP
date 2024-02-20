import styles from "./page.module.css";
import hazardImage from "/src/app/images/Eden-HazardPNG.png";
import garciaImage from "/src/app/images/GonzaloPNG.png";
import benzemaImage from "/src/app/images/KarimPNG.png";
import RonaldoImage from "/src/app/images/Ronaldo.jpg";
import MarcImage from "/src/app/images/Marc.jpg";
import TñigoImage from "/src/app/images/Tñigo.jpg";
import GaviImage from "/src/app/images/Gavi.jpg";
import MessiImage from "/src/app/images/Messi.jpg";

/*import styles from "./page.module.css";
import hazardImage from "./images/hazard.jpg";
import garciaImage from "./images/garcia.jpg";
import benzemaImage from "./images/benzema.jpg";*/

const jugadorImages = {
  "Eden Hazard": hazardImage,
  "Gonzalo Garcia": garciaImage,
  "Karim Benzema": benzemaImage,
  "Cristiano Ronaldo": RonaldoImage,
  "Marc-Andre ter Stegen": MarcImage,
  "Tñigo Martinez": TñigoImage,
  "Gavi": GaviImage,
  "Leonel Messi": MessiImage,
  // Puedes agregar otros jugadores según sea necesario
};

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Futbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <img src={jugadorImages[jugador.nombre]} alt={jugador.nombre} />
                <p>Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        {"id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg"},
        {"id": 2, "nombre": "Gonzalo Garcia", "Altura": "1.82", "Peso": "74Kg"},
        {"id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg"},
        {"id": 4, "nombre": "Cristiano Ronaldo", "Altura": "1.83", "Peso": "82Kg"}
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        {"id": 1, "nombre": "Marc-Andre ter Stegen", "Altura": "1.75", "Peso": "74Kg"},
        {"id": 2, "nombre": "Tñigo Martinez", "Altura": "1.82", "Peso": "74Kg"},
        {"id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg"},
        {"id": 4, "nombre": "Leonel Messi", "Altura": "1.10", "Peso": "50Kg"}
      ]
    }
    // Puedes agregar otros equipos
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicacion de Futbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}