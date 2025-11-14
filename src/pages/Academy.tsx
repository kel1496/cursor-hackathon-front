import { useState } from "react";
import Nav from "../components/Nav";
import { useLocation } from "wouter";

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  lessons: number;
  completedLessons: number;
  reward: {
    exp: number;
    coins: number;
    hp?: number;
  };
  status: "locked" | "available" | "in_progress" | "completed";
  category: "basics" | "investing" | "savings" | "debt" | "advanced";
  npcImage: string;
  rewardImage: string;
}

interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
  completed: boolean;
}

const courses: Course[] = [
  {
    id: "1",
    title: "💰 The Art of Coin Mastery",
    description: "Master the fundamentals of personal finance and build your wealth foundation",
    difficulty: "beginner",
    duration: "2 hours",
    lessons: 5,
    completedLessons: 0,
    reward: {
      exp: 500,
      coins: 100,
      hp: 20,
    },
    status: "available",
    category: "basics",
    npcImage: "/quest_npc.png",
    rewardImage: "/quest_reward.png",
  },
  {
    id: "2",
    title: "📈 The Investment Grimoire",
    description: "Learn the ancient secrets of stocks, bonds, and portfolio building",
    difficulty: "intermediate",
    duration: "4 hours",
    lessons: 8,
    completedLessons: 0,
    reward: {
      exp: 1000,
      coins: 250,
      hp: 30,
    },
    status: "locked",
    category: "investing",
    npcImage: "/quest_npc.png",
    rewardImage: "/quest_reward_2.png",
  },
  {
    id: "3",
    title: "🏰 The Fortress of Savings",
    description: "Build an impenetrable savings strategy and emergency fund",
    difficulty: "beginner",
    duration: "1.5 hours",
    lessons: 4,
    completedLessons: 0,
    reward: {
      exp: 400,
      coins: 80,
      hp: 15,
    },
    status: "available",
    category: "savings",
    npcImage: "/quest_npc.png",
    rewardImage: "/quest_reward.png",
  },
  {
    id: "4",
    title: "⚔️ Slaying the Debt Dragon",
    description: "Conquer debt and break free from financial chains",
    difficulty: "intermediate",
    duration: "3 hours",
    lessons: 6,
    completedLessons: 0,
    reward: {
      exp: 800,
      coins: 200,
      hp: 25,
    },
    status: "locked",
    category: "debt",
    npcImage: "/quest_npc.png",
    rewardImage: "/quest_reward_2.png",
  },
  {
    id: "5",
    title: "🔮 Advanced Wealth Alchemy",
    description: "Transform your finances with tax strategies and retirement planning",
    difficulty: "advanced",
    duration: "5 hours",
    lessons: 10,
    completedLessons: 0,
    reward: {
      exp: 2000,
      coins: 500,
      hp: 50,
    },
    status: "locked",
    category: "advanced",
    npcImage: "/quest_npc.png",
    rewardImage: "/quest_reward_2.png",
  },
];

const sampleLessons: Lesson[] = [
  {
    id: "l1",
    courseId: "1",
    title: "Understanding Your Financial Map",
    content: "Every adventurer needs a map. Your financial map shows where you are, where you want to go, and the obstacles in your path. Learn to read your income, expenses, and net worth like a seasoned cartographer.",
    quiz: {
      question: "What is the first step in creating a financial plan?",
      options: [
        "Invest in stocks immediately",
        "Track your income and expenses",
        "Take out a loan",
        "Buy expensive assets",
      ],
      correctAnswer: 1,
    },
    completed: false,
  },
  {
    id: "l2",
    courseId: "1",
    title: "The Budget Spell",
    content: "A budget is your most powerful spell for controlling your finances. It allocates your gold (income) to different categories, ensuring you don't overspend and can save for future quests.",
    completed: false,
  },
];

const Academy = () => {
  const [, setLocation] = useLocation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [completedCourse, setCompletedCourse] = useState<Course | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "border-green-500 bg-green-900/20";
      case "intermediate":
        return "border-yellow-500 bg-yellow-900/20";
      case "advanced":
        return "border-red-500 bg-red-900/20";
      default:
        return "border-gray-500 bg-gray-900/20";
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "🟢 Beginner";
      case "intermediate":
        return "🟡 Intermediate";
      case "advanced":
        return "🔴 Advanced";
      default:
        return "";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "basics":
        return "💰";
      case "investing":
        return "📈";
      case "savings":
        return "🏰";
      case "debt":
        return "⚔️";
      case "advanced":
        return "🔮";
      default:
        return "📚";
    }
  };

  const handleStartCourse = (course: Course) => {
    if (course.status === "available" || course.status === "in_progress") {
      setSelectedCourse(course);
      const firstLesson = sampleLessons.find((l) => l.courseId === course.id);
      if (firstLesson) {
        setCurrentLesson(firstLesson);
      }
    }
  };

  const handleCompleteLesson = () => {
    if (!currentLesson || !selectedCourse) return;

    if (currentLesson.quiz && quizAnswer === null) {
      // Show quiz first
      return;
    }

    if (currentLesson.quiz && quizAnswer !== currentLesson.quiz.correctAnswer) {
      setShowQuizResult(true);
      return;
    }

    // Lesson completed
    const nextLesson = sampleLessons.find(
      (l) => l.courseId === selectedCourse.id && l.id !== currentLesson.id
    );

    if (nextLesson) {
      setCurrentLesson(nextLesson);
      setQuizAnswer(null);
      setShowQuizResult(false);
    } else {
      // Course completed
      setCompletedCourse(selectedCourse);
      setShowRewardModal(true);
      setSelectedCourse(null);
      setCurrentLesson(null);
    }
  };

  const handleQuizSubmit = () => {
    if (quizAnswer === null) return;
    setShowQuizResult(true);
  };

  if (currentLesson && selectedCourse) {
    return (
      <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
        {/* Lesson View */}
        <div className="w-[90%] mt-6 mb-4">
          <button
            onClick={() => {
              setCurrentLesson(null);
              setSelectedCourse(null);
              setQuizAnswer(null);
              setShowQuizResult(false);
            }}
            className="flex items-center text-gray-400 hover:text-gray-200 transition-colors pixel-art mb-4"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span className="ml-2 font-semibold pixel-art">Back to Academy</span>
          </button>

          <div className="bg-gray-800 border-4 border-gray-600 p-6 pixel-art">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedCourse.npcImage}
                alt="Course NPC"
                className="w-16 h-16 border-4 border-gray-600 pixel-art"
                style={{ imageRendering: "pixelated" }}
              />
              <div>
                <h2 className="text-xl font-bold text-white pixel-art">{selectedCourse.title}</h2>
                <p className="text-sm text-gray-400 pixel-art">Lesson: {currentLesson.title}</p>
              </div>
            </div>

            <div className="bg-gray-900 border-2 border-gray-700 p-4 mb-4 pixel-art">
              <p className="text-gray-200 leading-relaxed pixel-art">{currentLesson.content}</p>
            </div>

            {currentLesson.quiz && !showQuizResult && (
              <div className="bg-gray-800 border-4 border-yellow-500 p-4 pixel-art">
                <h3 className="text-lg font-bold text-yellow-400 mb-3 pixel-art">🧠 Knowledge Check</h3>
                <p className="text-white font-semibold mb-4 pixel-art">{currentLesson.quiz.question}</p>
                <div className="space-y-2">
                  {currentLesson.quiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setQuizAnswer(index)}
                      className={`w-full text-left p-3 border-2 pixel-art transition-all ${
                        quizAnswer === index
                          ? "border-yellow-500 bg-yellow-900/20"
                          : "border-gray-600 bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      <span className="text-gray-200 pixel-art">{option}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleQuizSubmit}
                  disabled={quizAnswer === null}
                  className="mt-4 w-full bg-yellow-500 text-gray-900 font-bold px-4 py-2 border-2 border-yellow-600 hover:bg-yellow-400 transition-colors pixel-art disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              </div>
            )}

            {showQuizResult && currentLesson.quiz && (
              <div className={`bg-gray-800 border-4 p-4 mb-4 pixel-art ${
                quizAnswer === currentLesson.quiz.correctAnswer
                  ? "border-green-500"
                  : "border-red-500"
              }`}>
                {quizAnswer === currentLesson.quiz.correctAnswer ? (
                  <div>
                    <p className="text-green-400 font-bold text-lg mb-2 pixel-art">✅ Correct! Well done, adventurer!</p>
                    <p className="text-gray-300 pixel-art">You've mastered this concept. Continue your journey!</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-red-400 font-bold text-lg mb-2 pixel-art">❌ Not quite right, but don't give up!</p>
                    <p className="text-gray-300 pixel-art">The correct answer was: {currentLesson.quiz.options[currentLesson.quiz.correctAnswer]}</p>
                    <p className="text-gray-400 text-sm mt-2 pixel-art">Review the lesson and try again.</p>
                  </div>
                )}
              </div>
            )}

            {(!currentLesson.quiz || (showQuizResult && quizAnswer === currentLesson.quiz.correctAnswer)) && (
              <button
                onClick={handleCompleteLesson}
                className="w-full bg-green-500 text-white font-bold px-4 py-3 border-2 border-green-600 hover:bg-green-400 transition-colors pixel-art"
              >
                Complete Lesson →
              </button>
            )}
          </div>
        </div>
        <Nav />
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col items-center pb-20 min-h-screen bg-gray-900">
      {/* CoinBound Header */}
      <div className="w-full flex items-center justify-center py-3 border-b-4 border-gray-800 bg-gray-900 mb-4">
        <h1 className="text-yellow-400 font-bold text-xl pixel-art">💰 CoinBound</h1>
      </div>
      {/* Header */}
      <div className="w-[90%] mt-6 mb-4">
        <h1 className="text-3xl font-bold text-white mb-2 pixel-art">📚 Financial Academy</h1>
        <p className="text-gray-400 text-sm pixel-art">
          Master the ancient arts of wealth and finance. Complete courses to earn experience, coins, and unlock new abilities.
        </p>
      </div>

      {/* Courses List */}
      <div className="w-[90%] flex flex-col gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`bg-gray-800 border-4 ${getDifficultyColor(course.difficulty)} p-4 cursor-pointer hover:bg-gray-700 transition-all pixel-art ${
              course.status === "locked" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => course.status !== "locked" && handleStartCourse(course)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={course.npcImage}
                  alt="Course NPC"
                  className="w-16 h-16 border-4 border-gray-600 pixel-art"
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{getCategoryIcon(course.category)}</span>
                    <h2 className="text-lg font-bold text-white pixel-art">{course.title}</h2>
                  </div>
                  <p className="text-sm text-gray-400 pixel-art mb-2">{course.description}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`px-2 py-1 border-2 pixel-art ${getDifficultyColor(course.difficulty)}`}>
                      {getDifficultyBadge(course.difficulty)}
                    </span>
                    <span className="text-gray-500 pixel-art">⏱️ {course.duration}</span>
                    <span className="text-gray-500 pixel-art">📖 {course.lessons} lessons</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {course.status === "locked" && (
                  <span className="bg-gray-900 text-gray-500 font-semibold px-3 py-1 text-xs border-2 border-gray-700 pixel-art">
                    🔒 Locked
                  </span>
                )}
                {course.status === "available" && (
                  <span className="bg-green-900 text-green-400 font-semibold px-3 py-1 text-xs border-2 border-green-600 pixel-art">
                    Available
                  </span>
                )}
                {course.status === "in_progress" && (
                  <span className="bg-blue-900 text-blue-400 font-semibold px-3 py-1 text-xs border-2 border-blue-600 pixel-art">
                    In Progress
                  </span>
                )}
                {course.status === "completed" && (
                  <span className="bg-yellow-900 text-yellow-400 font-semibold px-3 py-1 text-xs border-2 border-yellow-600 pixel-art">
                    ✅ Completed
                  </span>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            {course.status === "in_progress" && (
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400 pixel-art">
                    Progress: {course.completedLessons} / {course.lessons} lessons
                  </span>
                  <span className="text-xs font-bold text-gray-300 pixel-art">
                    {Math.round((course.completedLessons / course.lessons) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-4 border-2 border-gray-600 overflow-hidden relative pixel-art">
                  <div
                    className="bg-yellow-500 h-full transition-all duration-500 border-r-2 border-yellow-400"
                    style={{ width: `${(course.completedLessons / course.lessons) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Rewards */}
            <div className="flex items-center gap-2">
              <img
                src={course.rewardImage}
                alt="Reward"
                className="w-12 h-12 border-2 border-gray-600 pixel-art"
                style={{ imageRendering: "pixelated" }}
              />
              <div className="flex gap-2 text-xs">
                <span className="bg-blue-900 text-blue-400 font-semibold px-2 py-1 border-2 border-blue-600 pixel-art">
                  +{course.reward.exp} EXP
                </span>
                <span className="bg-yellow-900 text-yellow-400 font-semibold px-2 py-1 border-2 border-yellow-600 pixel-art">
                  +{course.reward.coins} Coins
                </span>
                {course.reward.hp && (
                  <span className="bg-green-900 text-green-400 font-semibold px-2 py-1 border-2 border-green-600 pixel-art">
                    +{course.reward.hp} HP
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reward Modal */}
      {showRewardModal && completedCourse && (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-black/70">
          <div className="relative flex flex-col items-center max-w-sm mx-4">
            {/* Speech bubble */}
            <div className="relative mb-2">
              <div className="bg-gray-800 text-white text-base font-semibold px-6 py-4 border-4 border-yellow-500 max-w-xs relative">
                <p className="mb-2 pixel-art">
                  🎓 Congratulations, Scholar! <br />
                  You've completed "{completedCourse.title}" and mastered new financial knowledge!
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  <span className="bg-blue-900 text-blue-400 font-semibold px-2 py-1 text-xs border-2 border-blue-600 pixel-art">
                    +{completedCourse.reward.exp} EXP
                  </span>
                  <span className="bg-yellow-900 text-yellow-400 font-semibold px-2 py-1 text-xs border-2 border-yellow-600 pixel-art">
                    +{completedCourse.reward.coins} Coins
                  </span>
                  {completedCourse.reward.hp && (
                    <span className="bg-green-900 text-green-400 font-semibold px-2 py-1 text-xs border-2 border-green-600 pixel-art">
                      +{completedCourse.reward.hp} HP
                    </span>
                  )}
                </div>
                <div className="absolute -bottom-4 left-10 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </div>
            {/* NPC Image */}
            <img
              src={completedCourse.npcImage}
              alt="Course NPC"
              className="w-48 h-48 pixel-art border-4 border-yellow-500"
              style={{ imageRendering: "pixelated" }}
            />
            {/* Reward Items */}
            <div className="mt-4 flex gap-3">
              <img
                src={completedCourse.rewardImage}
                alt="Reward"
                className="w-20 h-20 pixel-art border-4 border-yellow-500 animate-bounce"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            {/* Close Button */}
            <button
              onClick={() => {
                setShowRewardModal(false);
                setCompletedCourse(null);
              }}
              className="mt-4 bg-yellow-500 text-gray-900 font-bold px-6 py-2 border-2 border-yellow-600 hover:bg-yellow-400 transition-colors pixel-art"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}

      <Nav />
    </div>
  );
};

export default Academy;

