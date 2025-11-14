import React, { useState } from "react";

// --- Data for the Questions ---
// Each option has an 'image' property that determines the character image displayed.
const questions = [
  {
    id: "q1",
    text: "What treasure are you chasing?",
    options: [
      {
        value: "a",
        label: "Build long-term wealth",
        image: "/1.png",
      },
      {
        value: "b",
        label: "Save for a dream purchase",
        image: "/1.png",
      },
    ],
  },
  {
    id: "q2",
    text: "How soon must the quest end?",
    options: [
      {
        value: "a",
        label: "Sprint (≤6 months)",
        image: "/2.png",
      },
      {
        value: "b",
        label: "Marathon (>6 months)",
        image: "/2.png",
      },
    ],
  },
  {
    id: "q3",
    text: "What's your financial experience?",
    options: [
      {
        value: "a",
        label: "New recruit",
        image: "/3.png",
      },
      {
        value: "b",
        label: "Seasoned adventurer",
        image: "/3.png",
      },
    ],
  },
  {
    id: "q4",
    text: "Which mentor voice guides you?",
    options: [
      {
        value: "a",
        label: "Encouraging ally",
        image: "https://placehold.co/300x300/71717A/FFF?text=Rogue",
      },
      {
        value: "b",
        label: "Stern commander",
        image: "https://placehold.co/300x300/16A34A/FFF?text=Druid",
      },
    ],
  },
  {
    id: "q5",
    text: "How intense should the journey feel?",
    options: [
      {
        value: "a",
        label: "Calm and steady",
        image: "https://placehold.co/300x300/6B7280/FFF?text=Paladin",
      },
      {
        value: "b",
        label: "High-stakes and dark",
        image: "https://placehold.co/300x300/EC4899/FFF?text=Sorcerer",
      },
    ],
  },
  {
    id: "q6",
    text: "What habit is your biggest foe?",
    options: [
      {
        value: "a",
        label: "Daily treats (coffee/food)",
        image: "https://placehold.co/300x300/1E1B4B/FFF?text=Overlord",
      },
      {
        value: "b",
        label: "Impulse spending (shopping/nightlife)",
        image: "https://placehold.co/300x300/F0F9FF/111?text=Savior",
      },
    ],
  },
  {
    id: "q7",
    text: "How should the final goal be recorded?",
    options: [
      {
        value: "a",
        label: "Short heroic title",
        image: "https://placehold.co/300x300/EF4444/FFF?text=Warrior",
      },
      {
        value: "b",
        label: "Detailed quest log",
        image: "https://placehold.co/300x300/3B82F6/FFF?text=Analyst",
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
                className="p-4 m-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
              >
                <legend className="text-medium md:text-2xl font-semibold text-white px-1">
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
