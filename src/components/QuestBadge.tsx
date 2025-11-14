interface QuestBadgeProps {
  count: number;
  onClick?: () => void;
}

export const QuestBadge = ({ count, onClick }: QuestBadgeProps) => {
  if (count === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-[10%] right-4 z-20 bg-yellow-500 text-gray-900 font-bold px-3 py-2 border-4 border-yellow-600 hover:bg-yellow-400 transition-all cursor-pointer flex items-center gap-2 shadow-lg pixel-art"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
        <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
      <span className="pixel-art">{count} Quests</span>
      <span className="bg-gray-900 text-yellow-400 w-5 h-5 flex items-center justify-center text-xs border-2 border-gray-700 pixel-art">
        {count}
      </span>
    </button>
  );
};
