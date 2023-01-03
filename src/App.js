import { useState, useEffect } from 'react';
// title
import { Header } from './components/Header';
// images for hangman
import  { Hangman } from './components/Hangman';
// wrong letter list
import { WrongLetters } from './components/WrongLetters';
// displaying the correct letters and spaces
import { Word } from './components/Word';
// win or lose popup box
import { Popup } from './components/Popup';
// how to play pop up
import { HowToPlay } from './components/HowToPlay';
// duplicate letter notification
import { Notification } from './components/Notification';
// importing showNotification as show as it is same name
import { showNotification as show } from './components/helpers';
// array of words to use
import { words } from './components/WordsList'
import './App.css';


// picking random word from list
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // setting states 
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  // showing notifications about duplicate buttons set to false
  const [showNotification, setShowNotification] = useState(false);
  // useEffect to perform side effects
  useEffect(() => {
    // 
    const handleKeydown = event => {
      const { key, keyCode } = event;
      // if playable and keycode is greater than or equal 65 less than or equal 90
      if (playable && keyCode >= 65 && keyCode <= 90) {
        // make lower case
        const letter = key.toLowerCase();
        // if selectedWord includes the letter
        if (selectedWord.includes(letter)) {
          // if letter is not in the word
          if (!correctLetters.includes(letter)) {
            // take current letters create new array spread current letters and add to new letter
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // pass show for notification if user enters letter again
            show(setShowNotification);
          }
        } else {
          // if letter is in the word
          if (!wrongLetters.includes(letter)) {
            // take letters create a new array, spread current letters and add letter
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // pass show for notification if user enters letter again
            show(setShowNotification);
          }
        }
      }
    }
    // event listener for keydown with function
    window.addEventListener('keydown', handleKeydown);
    // clean up event listeners so there aren't lots of event listners so only one event listner running
    return () => window.removeEventListener('keydown', handleKeydown);
    // dependencies, any time these get updated call function
  }, [correctLetters, wrongLetters, playable]);
  // function for play again pop up button
  function playAgain() {
    setPlayable(true);

    // Empty Arrays for new go
    setCorrectLetters([]);
    setWrongLetters([]);
    // pick another random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <div className="gameCont">
        <Hangman wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <HowToPlay/>
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;