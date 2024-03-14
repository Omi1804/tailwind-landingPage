import "./App.css";
import Clients from "./components/Clients";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marketing from "./components/Marketing";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Stats />
      <Marketing />
      <Demo />
      <Footer />
    </div>
  );
};

export default App;
