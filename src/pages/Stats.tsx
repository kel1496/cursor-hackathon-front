import Nav from "../components/Nav";

const Stats = () => {
  const stats = {
    totalSaved: 840,
    totalInvested: 0,
    currentStreak: 4,
    bestStreak: 7,
    questsCompleted: 3,
    totalQuests: 8,
    level: 5,
    expToNextLevel: 250,
    totalExp: 1250,
  };

  const monthlyData = [
    { month: "Jan", saved: 200, spent: 150 },
    { month: "Feb", saved: 300, spent: 180 },
    { month: "Mar", saved: 250, spent: 200 },
    { month: "Apr", saved: 90, spent: 120 },
  ];

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* Header */}
      <div className="w-[90%] mt-6 mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 pixel-art">Statistics</h1>
        <p className="text-gray-400 text-sm pixel-art">
          Review your progress and financial metrics
        </p>
      </div>

      {/* Level Card */}
      <div className="w-[90%] bg-gray-800 border-4 border-yellow-500 p-4 mb-4 pixel-art">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-white pixel-art">Level {stats.level}</h2>
          <span className="text-yellow-400 font-bold pixel-art">
            {stats.totalExp} EXP
          </span>
        </div>
        <div className="w-full bg-gray-700 h-4 border-2 border-gray-600 overflow-hidden relative pixel-art">
          <div
            className="bg-yellow-500 h-full transition-all duration-500 border-r-2 border-yellow-400"
            style={{
              width: `${
                (stats.expToNextLevel / (stats.expToNextLevel + 1000)) * 100
              }%`,
            }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1 pixel-art">
          {stats.expToNextLevel} EXP to next level
        </p>
      </div>

      {/* Stats Grid */}
      <div className="w-[90%] grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-800 border-4 border-green-500 p-3 pixel-art">
          <div className="text-xs text-gray-400 mb-1 pixel-art">Total Saved</div>
          <div className="text-2xl font-bold text-green-400 pixel-art">
            ${stats.totalSaved}
          </div>
        </div>
        <div className="bg-gray-800 border-4 border-yellow-500 p-3 pixel-art">
          <div className="text-xs text-gray-400 mb-1 pixel-art">Total Invested</div>
          <div className="text-2xl font-bold text-yellow-400 pixel-art">
            ${stats.totalInvested}
          </div>
        </div>
        <div className="bg-gray-800 border-4 border-blue-500 p-3 pixel-art">
          <div className="text-xs text-gray-400 mb-1 pixel-art">Current Streak</div>
          <div className="text-2xl font-bold text-blue-400 pixel-art">
            {stats.currentStreak} days
          </div>
        </div>
        <div className="bg-gray-800 border-4 border-purple-500 p-3 pixel-art">
          <div className="text-xs text-gray-400 mb-1 pixel-art">Best Streak</div>
          <div className="text-2xl font-bold text-purple-400 pixel-art">
            {stats.bestStreak} days
          </div>
        </div>
      </div>

      {/* Quests Progress */}
      <div className="w-[90%] bg-gray-800 border-4 border-gray-600 p-4 mb-4 pixel-art">
        <h2 className="text-lg font-bold text-white mb-3 pixel-art">Quest Progress</h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400 pixel-art">
            {stats.questsCompleted} of {stats.totalQuests} completed
          </span>
          <span className="text-yellow-400 font-bold text-sm pixel-art">
            {Math.round((stats.questsCompleted / stats.totalQuests) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 h-4 border-2 border-gray-600 overflow-hidden relative pixel-art">
          <div
            className="bg-yellow-500 h-full transition-all duration-500 border-r-2 border-yellow-400"
            style={{
              width: `${(stats.questsCompleted / stats.totalQuests) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Monthly Chart */}
      <div className="w-[90%] bg-gray-800 border-4 border-gray-600 p-4 pixel-art">
        <h2 className="text-lg font-bold text-white mb-3 pixel-art">
          Monthly History
        </h2>
        <div className="space-y-2">
          {monthlyData.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-12 text-xs text-gray-400">{data.month}</div>
              <div className="flex-1 flex gap-1">
                <div
                  className="bg-green-500 h-6 border-2 border-green-400 flex items-center justify-end pr-1"
                  style={{ width: `${(data.saved / 400) * 100}%` }}
                >
                  <span className="text-[10px] font-bold text-white">
                    ${data.saved}
                  </span>
                </div>
                <div
                  className="bg-red-500 h-6 border-2 border-red-400 flex items-center justify-end pr-1"
                  style={{ width: `${(data.spent / 400) * 100}%` }}
                >
                  <span className="text-[10px] font-bold text-white">
                    ${data.spent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 border border-green-400 pixel-art"></div>
            <span className="text-gray-400 pixel-art">Saved</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 border border-red-400 pixel-art"></div>
            <span className="text-gray-400 pixel-art">Spent</span>
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Stats;

