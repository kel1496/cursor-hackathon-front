import { useState } from "react";
import { useLocation } from "wouter";

const Result = () => {
  const [, setLocation] = useLocation();

  const [showQuestModal, setShowQuestModal] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed, speech-bubble style quest popup at the bottom with dismissal on click */}
      {showQuestModal && (
        <div className="fixed z-30 inset-0 flex items-center justify-center select-none">
          <div className="relative flex flex-col items-center">
            {/* Speech bubble above the image */}
            <div
              className="relative mb-2 cursor-pointer pointer-events-auto"
              onClick={() => setShowQuestModal(false)}
            >
              <div className="bg-gray-800 text-white text-base font-semibold px-6 py-3 pb-4 border-4 border-yellow-500 max-w-xs relative">
                Quest cleared. <br />Wallet leveled up, streak intact.<br />
                Grab the loot and gear up for what's next.
                <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </div>
            <img
              src="/quest_reward.png"
              alt="Quest Reward!"
              className="w-44 h-44 cursor-pointer pointer-events-auto pixel-art"
              style={{ imageRendering: "pixelated" }}
              onClick={() => setShowQuestModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
