// --- Constants ---
const DEFAULT_IMAGE = "/3.png";

// --- Bank Data ---
const banks = [
  {
    id: "revolut",
    name: "Revolut",
    logo: "https://cdn.worldvectorlogo.com/logos/revolut-1.svg",
  },
  {
    id: "ing",
    name: "ING",
    logo: "https://cdn.worldvectorlogo.com/logos/ing-2.svg",
  },
  {
    id: "bbva",
    name: "BBVA",
    logo: "https://cdn.worldvectorlogo.com/logos/bbva-1.svg",
  },
  {
    id: "santander",
    name: "Santander",
    logo: "https://cdn.worldvectorlogo.com/logos/banco-santander-1.svg",
  },
  {
    id: "manual",
    name: "Manual",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EAB308'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
  },
];

/**
 * House Component - Bank Connection Page
 */
export const House = () => {
  return (
    // Main container uses flex-col and h-screen to fill the viewport
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white font-sans">
      {/* --- 1. Sticky Character Image Section --- */}
      <header className="sticky top-0 z-10 w-full flex justify-center py-4 md:py-6 bg-gray-900 shadow-lg">
        <img
          src={DEFAULT_IMAGE}
          alt="Character"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-500 transition-all duration-300 ease-in-out shadow-xl"
          onError={(e) => {
            (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
          }}
        />
      </header>

      {/* --- 2. Scrollable Content Section --- */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">
            Connect Your Bank
          </h1>

          {/* Bank Connection Table */}
          <div className="space-y-3">
            {banks.map((bank) => (
              <div
                key={bank.id}
                className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-200 cursor-pointer"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-12 h-12 object-contain mr-4 bg-white rounded p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-lg text-gray-100 font-medium flex-1">
                  {bank.name}
                </span>
                <button className="text-yellow-500 hover:text-yellow-400 text-xl font-bold">
                  +
                </button>
              </div>
            ))}

            {/* Add More Bank Button */}
            <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg border-2 border-dashed border-gray-600 hover:border-yellow-500 hover:bg-gray-700 transition-all duration-200 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mr-4 bg-gray-700 rounded-full">
                <span className="text-2xl text-gray-400 font-bold">+</span>
              </div>
              <span className="text-lg text-gray-300 font-medium flex-1">
                Add another bank
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
