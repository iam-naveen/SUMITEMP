import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <section className="header mt-10 mx-16 h-fit flex flex-col items-center justify-center">
        <img
          src="https://www.freepnglogos.com/uploads/olympic-rings-png/olympic-rings-logos-download-0.png"
          className="w-72 mb-5"
          alt=""
        />
        <h1 className="text-5xl font-bold">Welcome to Olympic Analysis</h1>
        <p className="mt-10">
          The Olympics is a major international sporting event that takes place
          every four years. The event brings together athletes from all over the
          world to compete in various sports and disciplines. The modern Olympic
          Games were inspired by the ancient Olympic Games, which were held in
          Olympia, Greece, from the 8th century BC to the 4th century AD.
        </p>
        <p className="mt-5 mx-8 my-8">
          The modern Olympics were first organized by Pierre de Coubertin and
          were held in Athens, Greece, in 1896. Since then, the Olympics have
          been held regularly, with the exception of a few years during World
          War I and World War II. The Games alternate between the Summer
          Olympics and the Winter Olympics, which are held every four years on a
          staggered schedule.
        </p>
      </section>
      <Tabs></Tabs>
      <div className="credits flex flex-col rounded-lg mt-20 bg-zinc-900 p-10 self-start w-1/2 items-start">
        <h1 className="font-bold">Team Members</h1>
        <ul className="flex flex-col flex-wrap h-32 w-full gap-4 mt-7">
          <li className="p-3 border rounded">SUMITHRA P</li>
          <li className="p-3 border rounded">NALINA SREE K</li>
          <li className="p-3 border rounded">OVIYA S</li>
          <li className="p-3 border rounded">SHAIK SANIYA MUSKAN</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
