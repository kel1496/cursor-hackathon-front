import { useLocation } from "wouter";
import Nav from "../components/Nav";

interface Quest {
  id: string;
  title: string;
  description: string;
  type: "save" | "invest" | "daily";
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
}

const Quests = () => {
  const [, setLocation] = useLocation();

  const quests: Quest[] = [
    {
      id: "1",
      title: "Ahorro Semanal",
      description: "Ahorra $50 esta semana para ganar recompensas",
      type: "save",
      target: 50,
      current: 35,
      reward: {
        exp: 100,
        coins: 25,
        hp: 5,
      },
      status: "in_progress",
      npcImage: "/quest_npc.png",
      rewardImage: "/quest_reward.png",
    },
    {
      id: "2",
      title: "Primera Inversión",
      description: "Invierte $100 en tu futuro financiero",
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
    },
    {
      id: "3",
      title: "Desafío Mensual",
      description: "Ahorra $300 este mes para un bono especial",
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
    },
    {
      id: "4",
      title: "Héroe del Ahorro",
      description: "Mantén un balance positivo por 7 días consecutivos",
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
    },
    {
      id: "5",
      title: "Inversor Novato",
      description: "Realiza tu primera inversión de $50",
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
    },
  ];

  const getProgressPercentage = (quest: Quest) => {
    return Math.min((quest.current / quest.target) * 100, 100);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="bg-green-900 text-green-400 font-semibold px-2 py-1 text-xs border-2 border-green-600">
            ✓ Completada
          </span>
        );
      case "in_progress":
        return (
          <span className="bg-blue-900 text-blue-400 font-semibold px-2 py-1 text-xs border-2 border-blue-600">
            En progreso
          </span>
        );
      default:
        return (
          <span className="bg-gray-700 text-gray-400 font-semibold px-2 py-1 text-xs border-2 border-gray-600">
            Disponible
          </span>
        );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "save":
        return "border-green-500 bg-green-900/20";
      case "invest":
        return "border-yellow-500 bg-yellow-900/20";
      case "daily":
        return "border-blue-500 bg-blue-900/20";
      default:
        return "border-gray-500 bg-gray-900/20";
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="w-[90%] mt-6 mb-4">
        <h1 className="text-3xl font-bold text-white mb-2">Quests</h1>
        <p className="text-gray-400 text-sm">
          Completa misiones para ganar recompensas y mejorar tus finanzas
        </p>
      </div>

      {/* Quests List */}
      <div className="w-[90%] flex flex-col gap-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className={`bg-gray-800 border-4 ${getTypeColor(quest.type)} p-4 cursor-pointer hover:bg-gray-750 transition-all`}
            onClick={() => {
              if (quest.status === "available") {
                // Start quest logic here
                console.log("Starting quest:", quest.id);
              }
            }}
          >
            {/* Quest Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={quest.npcImage}
                  alt="Quest NPC"
                  className="w-16 h-16 border-2 border-gray-600 pixel-art"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white mb-1">
                    {quest.title}
                  </h2>
                  <p className="text-sm text-gray-400">{quest.description}</p>
                </div>
              </div>
              {getStatusBadge(quest.status)}
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">
                  Progreso: {quest.current} / {quest.target}
                </span>
                <span className="text-xs font-bold text-gray-300">
                  {Math.round(getProgressPercentage(quest))}%
                </span>
              </div>
              <div className="w-full bg-gray-700 h-4 border-2 border-gray-600 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    quest.type === "save"
                      ? "bg-green-500"
                      : quest.type === "invest"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                  style={{ width: `${getProgressPercentage(quest)}%` }}
                ></div>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={quest.rewardImage}
                  alt="Reward"
                  className="w-10 h-10 border-2 border-gray-600 pixel-art"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="flex gap-3 text-xs">
                  <span className="bg-blue-900 text-blue-400 font-semibold px-2 py-1 border-2 border-blue-600">
                    +{quest.reward.exp} EXP
                  </span>
                  <span className="bg-yellow-900 text-yellow-400 font-semibold px-2 py-1 border-2 border-yellow-600">
                    +{quest.reward.coins} Coins
                  </span>
                  {quest.reward.hp && (
                    <span className="bg-green-900 text-green-400 font-semibold px-2 py-1 border-2 border-green-600">
                      +{quest.reward.hp} HP
                    </span>
                  )}
                </div>
              </div>
              {quest.status === "completed" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Claiming reward for quest:", quest.id);
                  }}
                  className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 text-sm border-2 border-yellow-600 hover:bg-yellow-400 transition-colors"
                >
                  Reclamar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Nav />
    </div>
  );
};

export default Quests;

