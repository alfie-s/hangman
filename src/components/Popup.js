// popup idea from https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman
import { useEffect } from 'react';
import { checkWin } from '../components/helpers';
// passing props to this function as per app.js
export const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  // empty strings on pop up to be populated by if else statement below
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  // if user has guessed correctly final message is changed and so it playable boolean
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'You won!';
    playable = false;
      // if user has guessed incorrectly final message is changed and so it playable boolean
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Better luck next time!';
    // reveal the full word
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }
  // setPlayable is side effect so useEffect as it will not work otherwise.
  // want it to run everytime so no dependencies
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    // if final message is not equl to blank - display. If it is blank don't do anything
    <div className="popupCont" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}