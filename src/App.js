import "./App.css";
import HeadSection from "./components/HeadSection";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <main className="w-full bg-white">
      <div className="mx-[15%]">
        <HeadSection />
        <ImageSlider />
      </div>
    </main>
  );
}

export default App;
