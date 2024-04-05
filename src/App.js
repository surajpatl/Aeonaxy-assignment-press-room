import "./App.css";
import HeadSection from "./components/HeadSection";
import ImageSlider from "./components/ImageSlider";
import InTheNews from "./components/InTheNews";
import PressRelease from "./components/PressReleases";

function App() {
  return (
    <main className="w-full bg-white">
      <div className="mx-[15%]">
        <HeadSection />
        <ImageSlider />
        <PressRelease />
        <InTheNews />
      </div>
    </main>
  );
}

export default App;
