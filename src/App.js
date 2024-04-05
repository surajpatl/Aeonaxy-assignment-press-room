import "./App.css";
import Cards from "./components/Cards";
import HeadSection from "./components/HeadSection";
import ImageSlider from "./components/ImageSlider";
import InTheNews from "./components/InTheNews";
import PressRelease from "./components/PressReleases";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <main className="w-full bg-white">
      <div className="mx-[15%]">
        <HeadSection />
        <ImageSlider />
        <PressRelease />
        <InTheNews />
        <Cards />
        <SocialIcons />
      </div>
    </main>
  );
}

export default App;
