import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Gadgets from "./components/Gadgets";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";
import Works from "./components/Works";

function App() {
  return (
    <>
      <div className="bg-[#010101] h-full">
        <ScrollProgress />
        <ScrollTop />
        <Header />
        <Gadgets />
        <Works />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
