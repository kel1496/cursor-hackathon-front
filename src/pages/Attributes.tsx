import React, { useState } from "react";

// --- Data for the Questions ---
// Each option has an 'image' property that determines the character image displayed.
const questions = [
  {
    id: "q1",
    text: "When facing a challenge, what is your first instinct?",
    options: [
      {
        value: "a",
        label: "Charge head-on",
        image: "https://placehold.co/300x300/EF4444/FFF?text=Warrior",
      },
      {
        value: "b",
        label: "Analyze the situation from afar",
        image: "https://placehold.co/300x300/3B82F6/FFF?text=Analyst",
      },
    ],
  },
  {
    id: "q2",
    text: "What is your most valued possession?",
    options: [
      {
        value: "a",
        label: "Your sharp intellect",
        image: "https://placehold.co/300x300/A855F7/FFF?text=Mage",
      },
      {
        value: "b",
        label: "Your unwavering loyalty",
        image: "https://placehold.co/300x300/EAB308/FFF?text=Knight",
      },
    ],
  },
  {
    id: "q3",
    text: "In a team, you are the...",
    options: [
      {
        value: "a",
        label: "Leader, calling the shots",
        image: "https://placehold.co/300x300/F97316/FFF?text=Leader",
      },
      {
        value: "b",
        label: "Support, making sure everyone is safe",
        image: "https://placehold.co/300x300/22C55E/FFF?text=Healer",
      },
    ],
  },
  {
    id: "q4",
    text: "What environment do you prefer?",
    options: [
      {
        value: "a",
        label: "The bustling city streets",
        image: "https://placehold.co/300x300/71717A/FFF?text=Rogue",
      },
      {
        value: "b",
        label: "The quiet, ancient forest",
        image: "https://placehold.co/300x300/16A34A/FFF?text=Druid",
      },
    ],
  },
  {
    id: "q5",
    text: "Your ideal weapon is...",
    options: [
      {
        value: "a",
        label: "A well-balanced sword and shield",
        image: "https://placehold.co/300x300/6B7280/FFF?text=Paladin",
      },
      {
        value: "b",
        label: "A powerful, ancient staff",
        image: "https://placehold.co/300x300/EC4899/FFF?text=Sorcerer",
      },
    ],
  },
  {
    id: "q6",
    text: "What is your ultimate goal?",
    options: [
      {
        value: "a",
        label: "To attain ultimate power",
        image: "https://placehold.co/300x300/1E1B4B/FFF?text=Overlord",
      },
      {
        value: "b",
        label: "To bring peace to the land",
        image: "https://placehold.co/300x300/F0F9FF/111?text=Savior",
      },
    ],
  },
];

// --- Constants ---
const DEFAULT_IMAGE =
  "https://placehold.co/300x300/EAB308/000?text=Choose+Your+Path";

/**
 * Main Application Component
 */
export const Attributes = () => {
  // State to hold the URL of the character image to display
  const [characterImage, setCharacterImage] = useState(DEFAULT_IMAGE);

  // State to keep track of the selected answers (e.g., { q1: 'a', q2: 'b', ... })
  const [answers, setAnswers] = useState({});

  /**
   * Handles changes to any radio button.
   * Updates the selected answers and sets the new character image.
   */
  const handleAnswerChange = (questionId, answerValue, newImage) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
    setCharacterImage(newImage);
  };

  return (
    // Main container uses flex-col and h-screen to fill the viewport
    <div className="h-screen w-full flex flex-col bg-gray-900 text-white font-sans">
      {/* --- 1. Sticky Character Image Section --- */}
      <header className="sticky top-0 z-10 w-full flex justify-center py-4 md:py-6 bg-gray-900 shadow-lg">
        <img
          src={characterImage}
          alt="Role-playing character"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-500 transition-all duration-300 ease-in-out shadow-xl"
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE;
          }} // Fallback image
        />
      </header>

      {/* --- 2. Scrollable Form Section --- */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 justify-center items-center">
        <form className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8 ">
            Define Your Character
          </h1>

          <div className="space-y-8 justify-center items-center">
            {questions.map((question) => (
              <fieldset
                key={question.id}
                className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              >
                <legend className="text-xl md:text-2xl font-semibold text-white mb-5 px-1">
                  {question.text}
                </legend>

                <div className="space-y-4">
                  {question.options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 bg-gray-700 rounded-lg cursor-pointer transition-all duration-200 border-2 border-transparent hover:bg-gray-600 ${
                        answers[question.id] === option.value
                          ? "!border-yellow-500 bg-gray-600"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() =>
                          handleAnswerChange(
                            question.id,
                            option.value,
                            option.image
                          )
                        }
                        className="w-5 h-5 text-yellow-500 bg-gray-600 border-gray-500 rounded-full focus:ring-yellow-500 focus:ring-2"
                      />
                      <span className="ml-4 text-lg text-gray-100">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        </form>
      </main>
    </div>
  );
};
