import { useState } from "react";
import { useLocation } from "wouter";
import Nav from "../components/Nav";

interface Quest {
  id: string;
  title: string;
  description: string;
  type: "save" | "invest" | "daily" | "boss";
  target: number;
  current: number;
  reward: {
    exp: number;
    coins: number;
    hp?: number;
  };
  status: "available" | "in_progress" | "completed";
  npcImage: string;
  rewardImage: string;
  npcMessage?: string;
  isBoss?: boolean;
}

const Quests = () => {
  const [, setLocation] = useLocation();
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const quests: Quest[] = [
    {
      id: "1",
      title: "Weekly Savings",
      description: "Save $50 this week to earn rewards",
      type: "save",
      target: 50,
      current: 50,
      reward: {
        exp: 100,
        coins: 25,
        hp: 5,
      },
      status: "completed",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward.png",
      npcMessage: "Excellent work! Your saving discipline is admirable. Here's your reward.",
    },
    {
      id: "2",
      title: "First Investment",
      description: "Invest $100 in your financial future",
      type: "invest",
      target: 100,
      current: 0,
      reward: {
        exp: 200,
        coins: 50,
        hp: 10,
      },
      status: "available",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward_2.png",
      npcMessage: "The first step toward financial freedom. Take these rewards and keep going!",
    },
    {
      id: "3",
      title: "Monthly Challenge",
      description: "Save $300 this month for a special bonus",
      type: "save",
      target: 300,
      current: 120,
      reward: {
        exp: 500,
        coins: 100,
        hp: 20,
      },
      status: "in_progress",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward.png",
      npcMessage: "Incredible! You've shown exceptional commitment. These rewards are yours.",
    },
    {
      id: "4",
      title: "Savings Hero",
      description: "Maintain a positive balance for 7 consecutive days",
      type: "daily",
      target: 7,
      current: 4,
      reward: {
        exp: 150,
        coins: 30,
        hp: 8,
      },
      status: "in_progress",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward_2.png",
      npcMessage: "Your consistency is legendary. Keep it up and these rewards will be yours!",
    },
    {
      id: "5",
      title: "Novice Investor",
      description: "Make your first $50 investment",
      type: "invest",
      target: 50,
      current: 0,
      reward: {
        exp: 150,
        coins: 25,
        hp: 5,
      },
      status: "available",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward.png",
      npcMessage: "Welcome to the world of investing. Start your journey with these rewards!",
    },
    {
      id: "6",
      title: "🏠 BOSS: Home Ownership",
      description: "Defeat the ultimate financial challenge: Save $50,000 for your dream home down payment",
      type: "boss",
      target: 50000,
      current: 12500,
      reward: {
        exp: 5000,
        coins: 1000,
        hp: 100,
      },
      status: "in_progress",
      npcImage: "/enemy.png",
      rewardImage: "/house.png",
      npcMessage: "You've conquered the ultimate challenge! The house is yours, champion!",
      isBoss: true,
    },
  ];

  const getProgressPercentage = (quest: Quest) => {
    return Math.min((quest.current / quest.target) * 100, 100);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="bg-green-900 text-green-400 font-semibold px-2 py-1 text-xs border-2 border-green-600 pixel-art">
            ✓ Completed
          </span>
        );
      case "in_progress":
        return (
          <span className="bg-blue-900 text-blue-400 font-semibold px-2 py-1 text-xs border-2 border-blue-600 pixel-art">
            In Progress
          </span>
        );
      default:
        return (
          <span className="bg-gray-700 text-gray-400 font-semibold px-2 py-1 text-xs border-2 border-gray-600 pixel-art">
            Available
          </span>
        );
    }
  };

  const getTypeColor = (type: string, isBoss?: boolean) => {
    if (isBoss) {
      return "border-red-600 bg-red-900/30 shadow-lg shadow-red-500/50";
    }
    switch (type) {
      case "save":
        return "border-green-500 bg-green-900/20";
      case "invest":
        return "border-yellow-500 bg-yellow-900/20";
      case "daily":
        return "border-blue-500 bg-blue-900/20";
      case "boss":
        return "border-red-600 bg-red-900/30 shadow-lg shadow-red-500/50";
      default:
        return "border-gray-500 bg-gray-900/20";
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="w-[90%] mt-6 mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 pixel-art">Quests</h1>
        <p className="text-gray-400 text-sm pixel-art">
          Complete missions to earn rewards and improve your finances
        </p>
      </div>

      {/* Quests List */}
      <div className="w-[90%] flex flex-col gap-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`bg-gray-800 border-4 ${getTypeColor(quest.type, quest.isBoss)} p-4 cursor-pointer hover:bg-gray-700 transition-all pixel-art ${
              quest.isBoss ? "relative overflow-hidden" : ""
            }`}
            onClick={() => {
              if (quest.status === "available") {
                // Start quest logic here
                console.log("Starting quest:", quest.id);
              }
            }}
          >
            {/* Boss Fight Glow Effect */}
            {quest.isBoss && (
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 animate-pulse pointer-events-none"></div>
            )}
            {/* Quest Header */}
            <div className="flex items-start justify-between mb-3 relative z-10">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={quest.npcImage}
                  alt={quest.isBoss ? "Boss Enemy" : "Quest NPC"}
                  className={`${quest.isBoss ? "w-24 h-24 border-4 border-red-600" : "w-16 h-16 border-4 border-gray-600"} pixel-art ${quest.isBoss ? "animate-pulse" : ""}`}
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="flex-1">
                  <h2 className={`${quest.isBoss ? "text-xl" : "text-lg"} font-bold text-white mb-1 pixel-art ${quest.isBoss ? "text-red-400" : ""}`}>
                    {quest.title}
                  </h2>
                  <p className={`text-sm text-gray-400 pixel-art ${quest.isBoss ? "text-gray-300" : ""}`}>{quest.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {quest.isBoss && (
                  <span className="bg-red-900 text-red-400 font-bold px-3 py-1 text-xs border-2 border-red-600 pixel-art animate-pulse">
                    ⚔️ BOSS FIGHT
                  </span>
                )}
                {getStatusBadge(quest.status)}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3 relative z-10">
              <div className="flex justify-between items-center mb-1">
                <span className={`text-xs pixel-art ${quest.isBoss ? "text-red-300 font-bold" : "text-gray-400"}`}>
                  Progress: ${quest.current.toLocaleString()} / ${quest.target.toLocaleString()}
                </span>
                <span className={`text-xs font-bold pixel-art ${quest.isBoss ? "text-red-400" : "text-gray-300"}`}>
                  {Math.round(getProgressPercentage(quest))}%
                </span>
              </div>
              <div className={`w-full bg-gray-700 ${quest.isBoss ? "h-6" : "h-4"} border-2 ${quest.isBoss ? "border-red-600" : "border-gray-600"} overflow-hidden relative pixel-art`}>
                <div
                  className={`h-full transition-all duration-500 border-r-2 ${
                    quest.isBoss
                      ? "bg-gradient-to-r from-red-600 to-red-400 border-red-300"
                      : quest.type === "save"
                      ? "bg-green-500 border-green-400"
                      : quest.type === "invest"
                      ? "bg-yellow-500 border-yellow-400"
                      : "bg-blue-500 border-blue-400"
                  }`}
                  style={{ width: `${getProgressPercentage(quest)}%` }}
                ></div>
                {quest.isBoss && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                )}
              </div>
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <img
                  src={quest.rewardImage}
                  alt="Reward"
                  className={`${quest.isBoss ? "w-16 h-16 border-4 border-red-600" : "w-12 h-12 border-2 border-gray-600"} pixel-art ${quest.isBoss ? "animate-bounce" : ""}`}
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="flex gap-3 text-xs flex-wrap">
                  <span className={`${quest.isBoss ? "bg-blue-900 text-blue-300 border-blue-500" : "bg-blue-900 text-blue-400 border-blue-600"} font-semibold px-2 py-1 border-2 pixel-art`}>
                    +{quest.reward.exp.toLocaleString()} EXP
                  </span>
                  <span className={`${quest.isBoss ? "bg-yellow-900 text-yellow-300 border-yellow-500" : "bg-yellow-900 text-yellow-400 border-yellow-600"} font-semibold px-2 py-1 border-2 pixel-art`}>
                    +{quest.reward.coins.toLocaleString()} Coins
                  </span>
                  {quest.reward.hp && (
                    <span className={`${quest.isBoss ? "bg-green-900 text-green-300 border-green-500" : "bg-green-900 text-green-400 border-green-600"} font-semibold px-2 py-1 border-2 pixel-art`}>
                      +{quest.reward.hp} HP
                    </span>
                  )}
                </div>
              </div>
              {quest.status === "completed" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedQuest(quest);
                    setShowRewardModal(true);
                  }}
                  className={`${quest.isBoss ? "bg-red-600 text-white border-red-400 hover:bg-red-500" : "bg-yellow-500 text-gray-900 border-yellow-600 hover:bg-yellow-400"} font-bold px-4 py-2 text-sm border-2 transition-colors pixel-art`}
                >
                  {quest.isBoss ? "🏆 Claim Victory" : "Claim"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reward Modal */}
      {showRewardModal && selectedQuest && (
        <div className={`fixed z-30 inset-0 flex items-center justify-center ${selectedQuest.isBoss ? "bg-black/90" : "bg-black/70"}`}>
          <div className="relative flex flex-col items-center max-w-sm mx-4">
            {/* Boss Fight Victory Effect */}
            {selectedQuest.isBoss && (
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-red-500/20 animate-pulse pointer-events-none"></div>
            )}
            {/* Speech bubble */}
            <div className="relative mb-2 z-10">
              <div className={`bg-gray-800 text-white text-base font-semibold px-6 py-4 border-4 ${selectedQuest.isBoss ? "border-red-600 shadow-lg shadow-red-500/50" : "border-yellow-500"} max-w-xs relative`}>
                {selectedQuest.isBoss && (
                  <div className="text-center mb-2">
                    <span className="text-2xl pixel-art">🏆</span>
                    <h3 className="text-lg font-bold text-red-400 pixel-art mb-1">VICTORY!</h3>
                  </div>
                )}
                <p className="mb-2 pixel-art">{selectedQuest.npcMessage || "Congratulations! You've completed the quest."}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  <span className={`${selectedQuest.isBoss ? "bg-blue-900 text-blue-300 border-blue-500" : "bg-blue-900 text-blue-400 border-blue-600"} font-semibold px-2 py-1 text-xs border-2 pixel-art`}>
                    +{selectedQuest.reward.exp.toLocaleString()} EXP
                  </span>
                  <span className={`${selectedQuest.isBoss ? "bg-yellow-900 text-yellow-300 border-yellow-500" : "bg-yellow-900 text-yellow-400 border-yellow-600"} font-semibold px-2 py-1 text-xs border-2 pixel-art`}>
                    +{selectedQuest.reward.coins.toLocaleString()} Coins
                  </span>
                  {selectedQuest.reward.hp && (
                    <span className={`${selectedQuest.isBoss ? "bg-green-900 text-green-300 border-green-500" : "bg-green-900 text-green-400 border-green-600"} font-semibold px-2 py-1 text-xs border-2 pixel-art`}>
                      +{selectedQuest.reward.hp} HP
                    </span>
                  )}
                </div>
                <div className={`absolute -bottom-4 left-10 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent ${selectedQuest.isBoss ? "border-t-gray-800" : "border-t-gray-800"}`}></div>
              </div>
            </div>
            {/* NPC/Enemy Image */}
            <img
              src={selectedQuest.npcImage}
              alt={selectedQuest.isBoss ? "Defeated Boss" : "Quest NPC"}
              className={`${selectedQuest.isBoss ? "w-56 h-56 border-4 border-red-600" : "w-48 h-48 border-4 border-yellow-500"} pixel-art ${selectedQuest.isBoss ? "animate-pulse" : ""}`}
              style={{ imageRendering: "pixelated" }}
            />
            {/* Reward Items */}
            <div className="mt-4 flex gap-3 z-10">
              <img
                src={selectedQuest.rewardImage}
                alt="Reward"
                className={`${selectedQuest.isBoss ? "w-24 h-24 border-4 border-red-600" : "w-20 h-20 border-4 border-yellow-500"} pixel-art animate-bounce`}
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            {/* Close Button */}
            <button
              onClick={() => {
                setShowRewardModal(false);
                setSelectedQuest(null);
              }}
              className={`mt-4 ${selectedQuest.isBoss ? "bg-red-600 text-white border-red-400 hover:bg-red-500" : "bg-yellow-500 text-gray-900 border-yellow-600 hover:bg-yellow-400"} font-bold px-6 py-2 border-2 transition-colors pixel-art z-10`}
            >
              {selectedQuest.isBoss ? "🏆 Claim Victory!" : "Awesome!"}
            </button>
          </div>
        </div>
      )}

      <Nav />
    </div>
  );
};

export default Quests;

