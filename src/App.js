import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Menu" },
    { url: "#", title: "viagens" },
    { url: "#", title: " Recompensas" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={" Seja um explorador."}
        subtitle={
          "Nossa plataforma oferece uma grande variedade de locais de viagem exclusivos!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memórias para uma vida inteira."}
        subtitle={"As férias dos seus sonhos estão a apenas alguns cliques de distância."}
        flipped={true}
      />
    </div>
  );
}

export default App;
