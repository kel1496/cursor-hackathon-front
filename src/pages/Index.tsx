import Nav from "../components/Nav";
import { useLocation } from "wouter";

const Index = () => {
  const [, setLocation] = useLocation();
  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* Avatar y barras alineados */}
      <div className="w-[90%] flex flex-row items-start mt-6 mb-6">
        {/* Avatar a la izquierda */}
        <img
          src="/3.png"
          alt="Profile"
          className="w-24 h-24 border-4 border-gray-600 mr-4 flex-shrink-0 pixel-art"
          style={{ imageRendering: "pixelated" }}
        />
        {/* Barras a la derecha */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Barra de Experiencia */}
          <label className="block text-gray-300 text-sm font-semibold mb-1" htmlFor="exp-bar">
            Experience
          </label>
          <div className="w-full bg-gray-700 h-6 mb-3 border-2 border-gray-600 overflow-hidden relative">
            <div
              id="exp-bar"
              className="bg-blue-500 h-full transition-all duration-500 border-r-2 border-blue-400"
              style={{ width: "75%" }}
            ></div>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-900 text-blue-400 font-semibold px-2 py-0.5 text-[10px] border-2 border-blue-600">
              75%
            </span>
          </div>
          {/* Barra de Vida */}
          <label className="block text-gray-300 text-sm font-semibold mb-1" htmlFor="hp-bar">
            Life
          </label>
          <div className="w-full bg-gray-700 h-6 mb-3 border-2 border-gray-600 overflow-hidden">
            <div
              id="hp-bar"
              className="bg-green-500 h-full transition-all duration-500 border-r-2 border-green-400"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Monetary Balance and Daily HP Result */}
      <div className="w-[90%] flex items-center justify-between bg-gray-800 px-4 py-3 my-4 border-4 border-gray-600">
        <div>
          <span className="text-gray-300 font-semibold text-base">Balance</span>
          <div className="text-xl font-bold text-white">$840</div>
        </div>
        <span className="bg-green-900 text-green-400 font-semibold px-3 py-1 text-xs border-2 border-green-600">+2hp/day</span>
      </div>
      {/* Banks Section */}
      <div className="w-[90%] flex flex-col gap-3">
        {/* Bank 1 Block */}
        <button
          onClick={() => setLocation("/bank")}
          className="flex flex-col bg-gray-800 px-4 py-3 mb-1 text-left hover:bg-gray-700 transition-all cursor-pointer border-4 border-gray-600 active:border-gray-500"
        >
          <div className="text-gray-400 font-semibold text-xs mb-1">Bank 1</div>
          <div className="text-lg font-bold text-white mb-1">$515</div>
          <span className="bg-green-900 text-green-400 font-semibold px-2 py-0.5 text-[10px] w-fit border-2 border-green-600">
            +2hp/day
          </span>
        </button>
        {/* Bank 2 Block */}
        <button
          onClick={() => setLocation("/bank")}
          className="flex flex-col bg-gray-800 px-4 py-3 text-left hover:bg-gray-700 transition-all cursor-pointer border-4 border-gray-600 active:border-gray-500"
        >
          <div className="text-gray-400 font-semibold text-xs mb-1">Bank 2</div>
          <div className="text-lg font-bold text-white mb-1">$325</div>
          <span className="bg-red-900 text-red-400 font-semibold px-2 py-0.5 text-[10px] w-fit border-2 border-red-600">
            -2hp/day
          </span>
        </button>
      </div>
      <Nav />
    </div>
  );
};

export default Index;
