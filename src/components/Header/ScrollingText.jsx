import React, { useEffect, useState } from 'react';

const ScrollingText = () => {
  const [words, setWords] = useState([]);
  const text =
    'Greetings! My name Is Marko Popovic, a Front-end React Developer from Serbia. Making websites Is addictive. I thrive on the ever-evolving nature of the tech world, constantly seeking new challenges and opportunities to expand my skill set. I am currently seeking an opportunity to leverage my skills and enthusiasm in a team that values innovation and user satisfaction.';
  const steps = 70;

  useEffect(() => {
    const textArray = text.split(' ');
    const totalWords = textArray.length;
    const wordsPerStep = Math.ceil(totalWords / steps);
    let currentIndex = 0;

    const handleScroll = () => {
      if (currentIndex < totalWords) {
        setWords((prevWords) => [
          ...prevWords,
          ...textArray.slice(currentIndex, currentIndex + wordsPerStep),
        ]);
        currentIndex += wordsPerStep;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='overflow-auto relative p-2'>
        {words.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
