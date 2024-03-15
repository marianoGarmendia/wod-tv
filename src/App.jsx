import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Workout from "./components/Workout";

function App() {
  const [wod, setWod] = useState("CROSSFIT");

  const handleWod = (e) => {
    const textWod = e.target.innerText;
    setWod(textWod);
  };
  return (
    <section className="h-screen w-full">
      <header className="w-full h-[10%]  flex items-center justify-center p-2">
        <img src="src/assets/logo-g10.png" alt="" className="h-[100%]" />
      </header>
      <div
        className="flex tracking-widest  max-h-[10%]"
        onClick={(e) => {
          handleWod(e);
        }}
      >
        <button className="font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2">
          Crossfit
        </button>
        <button className=" font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2">
          Woman
        </button>
        <button className="font-semibold tracking-wide  focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2">
          Functional
        </button>
        <button className="font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2">
          High
        </button>
        <button className="font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-200 cursor-pointer bg-[#212121] m-2">
          Power Woman
        </button>
        <button className=" font-semibold tracking-wide focus:scale-100 focus:bg-[#eee] focus:text-[#171717] p-2 rounded-md max-w-fit hover:scale-105 ease-in-out duration-100 cursor-pointer bg-[#212121] m-2">
          Intense Functional
        </button>
      </div>
      <main className="h-[80%] flex ">
        <div className="w-2/5 ">
          <div className="flex  ">
            <h3 className="bg-[#212121] flex-1 flex justify-center items-center text-3xl p-4 mx-2 rounded-md my-6 tracking-wide font-semibold">
              {wod}
            </h3>
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Workout wod={wod} />}></Route>
            </Routes>
          </div>
        </div>
        <div className="w-3/5 flex items-center ">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/JUc_0HPNKfo?si=QRBwOc1BVFarXiS4?autoplay=1&playlist=JUc_0HPNKfo&loop=1&mute=1&controls=0&modestbranding=1&disablekb=1"
            title="YouTube video player"
            allowfullscreen
          ></iframe>
          {/* <video
            autoPlay
            muted
            loop
            className="w-full object-cover aspect-video animate-fade"
          >
            <source
              src={`https://www.youtube.com/watch?v=3IQLXvF7Cbs?si=SisR0y2tR7ksVXKr?autoplay=1&loop=1&controls=0&modestbranding=1&disablekb=1`}
              type="video"
            />
            Tu navegador no soporta la reproducción de videos.
          </video> */}
        </div>
      </main>
    </section>
  );
}

export default App;
