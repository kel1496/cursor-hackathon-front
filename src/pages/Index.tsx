import Nav from "../components/Nav";
import { useLocation } from "wouter";

const Index = () => {
  const [, setLocation] = useLocation();
  return (
    <div className="mx-auto my-10 flex flex-col items-center pb-20">
      {/* Avatar y barras alineados */}
      <div className="w-[90%] flex flex-row items-start mt-6 mb-6">
        {/* Avatar a la izquierda */}
        <img
          src="https://ui-avatars.com/api/?name=J+D"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow mr-4 flex-shrink-0"
        />
        {/* Barras a la derecha */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Barra de Experiencia */}
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="exp-bar">
            Experience
          </label>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-3 overflow-hidden">
            <div
              id="exp-bar"
              className="bg-blue-500 h-4 rounded-full transition-all duration-500"
              style={{ width: "75%" }}
            ></div>
          </div>
          {/* Barra de Vida */}
          <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="hp-bar">
            Life
          </label>
          <div className="w-full bg-gray-200 h-4 rounded-full mb-3 overflow-hidden">
            <div
              id="hp-bar"
              className="bg-green-500 h-4 rounded-full transition-all duration-500"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Monetary Balance and Daily HP Result */}
      <div className="w-[90%] flex items-center justify-between bg-white shadow px-4 py-3 rounded-xl my-4">
        <div>
          <span className="text-gray-700 font-semibold text-base">Balance</span>
          <div className="text-xl font-bold text-gray-900">$840</div>
        </div>
        <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-lg text-xs">+2hp/day</span>
      </div>
      {/* Banks Section */}
      <div className="w-[90%] flex flex-col gap-3">
        {/* Bank 1 Block */}
        <button
          onClick={() => setLocation("/bank")}
          className="flex flex-col bg-white shadow px-4 py-3 rounded-xl mb-1 text-left hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="text-gray-600 font-semibold text-xs mb-1">Bank 1</div>
          <div className="text-lg font-bold text-gray-800 mb-1">$515</div>
          <span className="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full text-[10px] w-fit">
            +2hp/day
          </span>
        </button>
        {/* Bank 2 Block */}
        <button
          onClick={() => setLocation("/bank")}
          className="flex flex-col bg-white shadow px-4 py-3 rounded-xl text-left hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="text-gray-600 font-semibold text-xs mb-1">Bank 2</div>
          <div className="text-lg font-bold text-gray-800 mb-1">$325</div>
          <span className="bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full text-[10px] w-fit">
            -2hp/day
          </span>
        </button>
      </div>
      <Nav />
    </div>
  );
};

export default Index;
