import './App.css'
import Cards from './Card';


const App = () => {
  const astronomyFlashcards = [
    {
      question: "What is the brightest object in the universe?",
      answer: "Quasar"
    },
    {
      question: "What is the process by which a star explodes at the end of its life cycle?",
      answer: "Supernova"
    },
    {
      question: "What is the name of the dense, collapsed core left behind after a supernova explosion?",
      answer: "Neutron star"
    },
    {
      question: "What is the name of the remnant of a massive star that has exploded?",
      answer: "Black hole"
    },
    {
      question: "What is the term for a small, icy body that orbits the Sun?",
      answer: "Comet"
    },
    {
      question: "What is the name of the galaxy that is the nearest major galaxy to the Milky Way?",
      answer: "The Andromeda Galaxy"
    },
    {
      question: "What is the name of the phenomenon where a massive object bends the light from objects behind it?",
      answer: "Gravitational lensing"
    },
    {
      question: "What is the name of the process by which a star generates energy by fusing hydrogen into helium?",
      answer: "Nuclear fusion"
    },
    {
      question: "What is the name of the space mission launched by NASA to study the outer planets?",
      answer: "Voyager"
    },
    {
      question: "What is the name of the spacecraft that was the first to land on the surface of Mars?",
      answer: "Viking 1"
    },
    {
      question: "What is the name of the largest moon of Saturn?",
      answer: "Titan"
    },
    {
      question: "What is the name of the spacecraft that successfully landed on a comet in 2014?",
      answer: "Rosetta"
    }
  ];

  return (
    <>
      <h1>Astronomy Flashcards</h1>
      <h2>Want to test your astronomy knowledge?</h2>
      <p>Contains {astronomyFlashcards.length} cards!</p>
      <div className="">
      <Cards flashcards={astronomyFlashcards} />
      </div>
    </>
  );
};

export default App;
