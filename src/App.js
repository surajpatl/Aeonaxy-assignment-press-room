import "./App.css";
import BottomLogos from "./components/BottomLogos";
import Cards from "./components/Cards";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeadSection from "./components/HeadSection";
import ImageSlider from "./components/ImageSlider";
import InTheNews from "./components/InTheNews";
import PressRelease from "./components/PressReleases";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <main className="w-full bg-white">
      <div className="lg:mx-[15%] sm:mx-[5%] min-[320px]:mx-[2%] min-[320px]:m-0">
        <HeadSection />
        <ImageSlider />
        <PressRelease />
        <InTheNews />
        <Cards />
        <SocialIcons />
        <ContactUs />
      </div>
      <Footer />
      <BottomLogos />
    </main>
  );
}

export default App;
