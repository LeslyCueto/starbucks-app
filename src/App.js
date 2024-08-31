import Header from "./components/Header";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/styles.css'


function App() {
  return (
    <>
      <Header/>
      <Main />
      <Gallery />
      <Contact />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
