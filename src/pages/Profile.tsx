import Nav from "../components/Nav";
import { useLocation } from "wouter";

const Profile = () => {
  const [, setLocation] = useLocation();

  const stats = {
    level: 5,
    totalExp: 1250,
    totalSaved: 840,
    totalInvested: 0,
    currentStreak: 4,
    bestStreak: 7,
    questsCompleted: 3,
    achievementsUnlocked: 4,
  };

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      <div className="w-[90%] max-w-md">
        {/* Profile Card */}
        <div className="w-full p-6 border-4 border-gray-600 bg-gray-800 mb-4 pixel-art">
          <div className="flex flex-col items-center">
            <img
              src="/3.png"
              alt="Profile"
              className="w-24 h-24 border-4 border-gray-600 mb-4 pixel-art"
              style={{ imageRendering: "pixelated" }}
            />
            <h2 className="text-2xl font-bold text-white pixel-art">John Doe</h2>
            <p className="text-gray-400 my-2 pixel-art">john.doe@email.com</p>
            <div className="mt-2 bg-yellow-900 text-yellow-400 font-semibold px-3 py-1 text-sm border-2 border-yellow-600 pixel-art">
              Level {stats.level}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800 border-4 border-blue-500 p-3 pixel-art">
            <div className="text-xs text-gray-400 mb-1 pixel-art">Experience</div>
            <div className="text-xl font-bold text-blue-400 pixel-art">{stats.totalExp} EXP</div>
          </div>
          <div className="bg-gray-800 border-4 border-green-500 p-3 pixel-art">
            <div className="text-xs text-gray-400 mb-1 pixel-art">Total Saved</div>
            <div className="text-xl font-bold text-green-400 pixel-art">${stats.totalSaved}</div>
          </div>
          <div className="bg-gray-800 border-4 border-yellow-500 p-3 pixel-art">
            <div className="text-xs text-gray-400 mb-1 pixel-art">Total Invested</div>
            <div className="text-xl font-bold text-yellow-400 pixel-art">${stats.totalInvested}</div>
          </div>
          <div className="bg-gray-800 border-4 border-purple-500 p-3 pixel-art">
            <div className="text-xs text-gray-400 mb-1 pixel-art">Current Streak</div>
            <div className="text-xl font-bold text-purple-400 pixel-art">{stats.currentStreak} days</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setLocation("/quests")}
            className="w-full bg-gray-800 border-4 border-yellow-500 p-3 text-left hover:bg-gray-700 transition-all pixel-art"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold pixel-art">Completed Quests</div>
                <div className="text-gray-400 text-sm pixel-art">{stats.questsCompleted} quests</div>
              </div>
              <span className="bg-yellow-900 text-yellow-400 font-bold px-2 py-1 text-xs border-2 border-yellow-600 pixel-art">
                {stats.questsCompleted}
              </span>
            </div>
          </button>
          <button
            onClick={() => setLocation("/achievements")}
            className="w-full bg-gray-800 border-4 border-purple-500 p-3 text-left hover:bg-gray-700 transition-all pixel-art"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-bold pixel-art">Unlocked Achievements</div>
                <div className="text-gray-400 text-sm pixel-art">{stats.achievementsUnlocked} achievements</div>
              </div>
              <span className="bg-purple-900 text-purple-400 font-bold px-2 py-1 text-xs border-2 border-purple-600 pixel-art">
                {stats.achievementsUnlocked}
              </span>
            </div>
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Profile;

