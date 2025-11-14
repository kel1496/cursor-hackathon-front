import { useLocation } from "wouter";

const Bank = () => {
  const [, setLocation] = useLocation();
  // Ejemplo estático de movimientos del Bank 1
  const movimientos = [
    {
      id: 1,
      descripcion: "Depósito mensual",
      cantidad: 200,
      hp: +3,
      fecha: "2024-06-12",
    },
    {
      id: 2,
      descripcion: "Pago de servicios",
      cantidad: -50,
      hp: -1,
      fecha: "2024-06-11",
    },
    {
      id: 3,
      descripcion: "Ahorro programado",
      cantidad: 100,
      hp: +2,
      fecha: "2024-06-08",
    },
    {
      id: 4,
      descripcion: "Compra online",
      cantidad: -35,
      hp: -2,
      fecha: "2024-06-05",
    },
  ];

  return (
    <div className="w-[360px] h-[700px] mx-auto my-10 flex flex-col items-center min-h-screen bg-gray-900">
      {/* Botón de volver */}
      <div className="w-[90%] mb-4">
        <button
          onClick={() => setLocation("/")}
          className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span className="ml-2 font-semibold">Volver</span>
        </button>
      </div>
      {/* Cabecera del banco */}
      <div className="w-[90%] flex flex-col items-center bg-gray-800 px-4 py-6 mb-6 border-4 border-gray-600">
        <h1 className="text-2xl font-bold mb-2 text-white">Bank 1</h1>
        <div className="text-gray-400 font-semibold text-sm mb-1">
          Total balance
        </div>
        <div className="text-2xl font-extrabold text-white mb-2">$515</div>
        <span className="bg-green-900 text-green-400 font-semibold px-3 py-1 text-xs border-2 border-green-600">
          +2hp/day
        </span>
      </div>

      {/* Lista de movimientos */}
      <div className="w-[90%] flex flex-col gap-3">
        <h2 className="text-lg font-bold text-white mb-2">Movimientos</h2>
        {movimientos.map((mov) => (
          <div
            key={mov.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-3 border-4 border-gray-600"
          >
            <div>
              <div className="font-semibold text-gray-200 text-sm">
                {mov.descripcion}
              </div>
              <div className="text-xs text-gray-500">{mov.fecha}</div>
              <div
                className={`text-sm font-bold ${
                  mov.cantidad >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {mov.cantidad >= 0 ? "+" : ""}
                {mov.cantidad}$
              </div>
            </div>
            <span
              className={`text-xs font-bold px-2 py-1 ${
                mov.hp > 0
                  ? "bg-green-900 text-green-400 border-2 border-green-600"
                  : "bg-red-900 text-red-400 border-2 border-red-600"
              }`}
            >
              {mov.hp >= 0 ? `+${mov.hp}` : mov.hp}hp
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bank;
