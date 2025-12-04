import React, { useState } from "react";

// Sample data with added detail content
const CARD_DATA = [
  {
    id: 1,
    title: "Project Alpha",
    description: "Innovative framework for scalable applications.",
    details:
      "Project Alpha utilizes a microservices architecture built on Kubernetes, offering near-infinite scaling capabilities and high fault tolerance. Launched Q3 2024.",
  },
  {
    id: 2,
    title: "Service Beta",
    description: "24/7 support and consultation services.",
    details:
      "Service Beta provides dedicated round-the-clock technical support via chat, phone, and video conference. Our top-tier consultants have over 10 years of industry experience.",
  },
  {
    id: 3,
    title: "Solution Gamma",
    description: "Advanced machine learning models.",
    details:
      "Solution Gamma features custom-trained predictive analytics models, achieving 98% accuracy in market forecasting. It integrates seamlessly with existing data pipelines.",
  },
  {
    id: 4,
    title: "Team Delta",
    description: "Client-focused project management.",
    details:
      "Team Delta operates using Agile methodology with two-week sprints. We prioritize transparent communication and deliverable-focused development to ensure project success.",
  },
  {
    id: 5,
    title: "Resource Epsilon",
    description: "Comprehensive documentation and tutorials.",
    details:
      "Resource Epsilon is a public knowledge base featuring over 500 articles, video tutorials, and API references, designed for quick developer onboarding and issue resolution.",
  },
  {
    id: 6,
    title: "Final Zeta",
    description: "Next-generation user interfaces.",
    details:
      "Final Zeta implements cutting-edge WebGL and custom canvas rendering to create highly interactive, data-rich user interfaces that feel native and performant across all devices.",
  },
];

interface CardData {
    id: number;
    title: string;
    description: string;
    details: string;
}

interface DetailModalProps {
  card: CardData | null;
  onClose: () => void;
}

interface CardProps {
    card: CardData;
    cardWidthPercentage: number;
    // onClick expects a CardData object as its argument and returns void
    onClick: (card: CardData) => void; 
}
// --- Sub-Component 1: The Modal for Detailed Info ---
const DetailModal: React.FC<DetailModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    // Modal Overlay
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal on overlay click
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-extrabold text-indigo-700">
            {card.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="text-lg text-gray-600 mb-6">{card.description}</p>
        <hr className="my-4" />
        <p className="text-gray-800 leading-relaxed font-medium">
          {card.details}
        </p>
      </div>
    </div>
  );
};

// --- Sub-Component 2: The Clickable Card in the Carousel ---
const Card: React.FC<CardProps> = ({ card, cardWidthPercentage, onClick }) => (
  <div
    key={card.id}
    className={`shrink-0 p-4`}
    style={{ flexBasis: `calc(${cardWidthPercentage}% - 16px)` }}
  >
    <div
      className="bg-white p-6  shadow-lg h-full border border-gray-100 cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl"
      onClick={() => onClick(card)}
    >
      <h3 className="text-xl font-bold text-indigo-600 mb-2">{card.title}</h3>
      <p className="text-gray-600 truncate">{card.description}</p>
      <span className="text-sm text-indigo-500 mt-2 block font-semibold">
        Click for Details &rarr;
      </span>
    </div>
  </div>
);


const ThreeCardCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

 
  const CARDS_PER_VIEW = 3;
  const TOTAL_CARDS = CARD_DATA.length;
  const MAX_INDEX = TOTAL_CARDS - CARDS_PER_VIEW;
  const cardWidthPercentage = 100 / CARDS_PER_VIEW;

  const transformValue = `translateX(-${currentIndex * cardWidthPercentage}%)`;


  const handleNext = () => {
    if (currentIndex < MAX_INDEX) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };


const openModal = (card: CardData) => setActiveCard(card);
const closeModal = () => setActiveCard(null);


  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= MAX_INDEX;

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4">

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: transformValue }}
        >
          {CARD_DATA.map((card) => (
            <Card
              key={card.id}
              card={card}
              cardWidthPercentage={cardWidthPercentage}
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* 2. NAVIGATION BUTTONS (Arrows) */}
      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`absolute top-1/2 left-0 z-10 p-3 bg-white rounded-full shadow-md transition-all transform -translate-y-1/2
                    ${
                      isPrevDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-indigo-50 hover:shadow-xl"
                    }
                `}
      >
        {/* SVG for Left Arrow */}
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`absolute top-1/2 right-0 z-10 p-3 bg-white rounded-full shadow-md transition-all transform -translate-y-1/2
                    ${
                      isNextDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-indigo-50 hover:shadow-xl"
                    }
                `}
      >
        {/* SVG for Right Arrow */}
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* 3. MODAL RENDERED BASED ON STATE */}
      <DetailModal card={activeCard} onClose={closeModal} />
    </div>
  );
};

export default ThreeCardCarousel;
