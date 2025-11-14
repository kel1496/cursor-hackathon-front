import { useLocation } from "wouter";
import { useState } from "react";

// --- Constants ---
const DEFAULT_IMAGE = "/3.png";
const HOUSE_IMAGE = "/house.png";

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
    id: "manual",
    name: "Manual",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EAB308'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E",
  },
];

/**
 * House Component - Bank Connection Page
 */
export const House = () => {
  const [characterImage, setCharacterImage] = useState(DEFAULT_IMAGE);
  const [, navigate] = useLocation();

  const handleBankClick = () => {
    setCharacterImage(HOUSE_IMAGE);
    // Small delay to show the image change before navigation
    setTimeout(() => {
      navigate("/home");
    }, 300);
  };

  return (
    // Main container uses flex-col and h-screen to fill the viewport
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white font-sans">
      {/* CoinBound Header */}
      <div className="w-full flex items-center justify-center py-3 border-b-4 border-gray-800 bg-gray-900">
        <h1 className="text-yellow-400 font-bold text-xl pixel-art">
          💰 CoinBound
        </h1>
      </div>
      {/* --- 1. Sticky Character Image Section --- */}
      <header className="sticky top-0 z-10 w-full flex justify-center py-4 md:py-6 bg-gray-900 shadow-lg">
        <img
          src={characterImage}
          alt="Character"
          className="w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-yellow-500 transition-all duration-300 ease-in-out shadow-xl pixel-art"
          style={{ imageRendering: "pixelated" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = DEFAULT_IMAGE;
          }}
        />
      </header>

      {/* --- 2. Scrollable Content Section --- */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 pixel-art">
            Connect Your Bank
          </h1>

          {/* Bank Connection Table */}
          <div className="space-y-3">
            {banks.map((bank) => (
              <div
                key={bank.id}
                onClick={handleBankClick}
                className="flex items-center p-4 bg-gray-800 border-4 border-gray-600 hover:bg-gray-700 transition-all duration-200 cursor-pointer pixel-art"
              >
                <span className="text-lg text-gray-100 font-medium flex-1 pixel-art">
                  {bank.name}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBankClick();
                  }}
                  className="text-yellow-500 hover:text-yellow-400 text-xl font-bold pixel-art border-2 border-yellow-500 px-2 py-1"
                >
                  +
                </button>
              </div>
            ))}

            {/* Add More Bank Button */}
            <div
              onClick={handleBankClick}
              className="flex items-center p-4 bg-gray-800 border-4 border-dashed border-gray-600 hover:border-yellow-500 hover:bg-gray-700 transition-all duration-200 cursor-pointer pixel-art"
            >
              <div className="w-12 h-12 flex items-center justify-center mr-4 bg-gray-700 border-2 border-gray-600 pixel-art">
                <span className="text-2xl text-gray-400 font-bold pixel-art">
                  +
                </span>
              </div>
              <span className="text-lg text-gray-300 font-medium flex-1 pixel-art">
                Add another bank
              </span>
            </div>

            <div className="flex justify-end mt-10 mb-6">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors border-2 border-yellow-500"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
