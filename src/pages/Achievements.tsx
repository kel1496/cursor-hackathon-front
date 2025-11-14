import Nav from "../components/Nav";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  category: "savings" | "investment" | "streak" | "milestone";
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Primer Ahorro",
      description: "Realiza tu primer depósito de ahorro",
      icon: "💰",
      unlocked: true,
      unlockedDate: "2024-06-01",
      category: "savings",
    },
    {
      id: "2",
      title: "Ahorrador Consistente",
      description: "Ahorra durante 7 días consecutivos",
      icon: "🔥",
      unlocked: true,
      unlockedDate: "2024-06-08",
      category: "streak",
    },
    {
      id: "3",
      title: "Mega Ahorrador",
      description: "Ahorra más de $1000 en total",
      icon: "💎",
      unlocked: false,
      category: "milestone",
    },
    {
      id: "4",
      title: "Inversor Iniciado",
      description: "Realiza tu primera inversión",
      icon: "📈",
      unlocked: false,
      category: "investment",
    },
    {
      id: "5",
      title: "Racha de 30 Días",
      description: "Mantén una racha de ahorro por 30 días",
      icon: "⭐",
      unlocked: false,
      category: "streak",
    },
    {
      id: "6",
      title: "Balance Positivo",
      description: "Mantén un balance positivo por un mes completo",
      icon: "✅",
      unlocked: true,
      unlockedDate: "2024-06-15",
      category: "milestone",
    },
    {
      id: "7",
      title: "Inversor Experto",
      description: "Invierte más de $500 en total",
      icon: "🏆",
      unlocked: false,
      category: "investment",
    },
    {
      id: "8",
      title: "Ahorro Semanal",
      description: "Ahorra $50 en una semana",
      icon: "🎯",
      unlocked: true,
      unlockedDate: "2024-06-12",
      category: "savings",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "savings":
        return "border-green-500 bg-green-900/20";
      case "investment":
        return "border-yellow-500 bg-yellow-900/20";
      case "streak":
        return "border-blue-500 bg-blue-900/20";
      case "milestone":
        return "border-purple-500 bg-purple-900/20";
      default:
        return "border-gray-500 bg-gray-900/20";
    }
  };

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="w-[90%] mt-6 mb-4">
        <h1 className="text-3xl font-bold text-white mb-2">Logros</h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            Desbloquea logros completando desafíos
          </p>
          <div className="bg-gray-800 px-3 py-1 border-2 border-gray-600">
            <span className="text-yellow-400 font-bold">{unlockedCount}</span>
            <span className="text-gray-400">/{totalCount}</span>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="w-[90%] grid grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`bg-gray-800 border-4 ${getCategoryColor(achievement.category)} p-4 ${
              !achievement.unlocked ? "opacity-50" : ""
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`text-4xl mb-2 ${
                  achievement.unlocked ? "" : "grayscale"
                }`}
              >
                {achievement.icon}
              </div>
              <h3
                className={`font-bold mb-1 ${
                  achievement.unlocked ? "text-white" : "text-gray-500"
                }`}
              >
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-400 mb-2">
                {achievement.description}
              </p>
              {achievement.unlocked && achievement.unlockedDate && (
                <span className="text-xs text-green-400 font-semibold">
                  ✓ {new Date(achievement.unlockedDate).toLocaleDateString()}
                </span>
              )}
              {!achievement.unlocked && (
                <span className="text-xs text-gray-500 font-semibold">
                  🔒 Bloqueado
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="w-[90%] mt-6 bg-gray-800 border-4 border-gray-600 p-4">
        <h2 className="text-lg font-bold text-white mb-3">Progreso General</h2>
        <div className="w-full bg-gray-700 h-6 border-2 border-gray-600 overflow-hidden relative">
          <div
            className="bg-yellow-500 h-full transition-all duration-500 border-r-2 border-yellow-400"
            style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
          ></div>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-yellow-400 font-semibold text-xs">
            {Math.round((unlockedCount / totalCount) * 100)}%
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Has desbloqueado {unlockedCount} de {totalCount} logros
        </p>
      </div>

      <Nav />
    </div>
  );
};

export default Achievements;

