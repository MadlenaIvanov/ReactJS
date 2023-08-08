import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Quality from "./components/Quality";


function App() {
  return (
  <div>
    <Loading />
    <Header />
    <About />
    <Quality />
    <Contact />
    <Background />
    <Footer />
  </div>
  );
}

export default App;
