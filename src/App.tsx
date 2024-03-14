import "./App.css";
import Clients from "./components/Clients";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Demo />
      <Footer />
    </div>
  );
};

export default App;
