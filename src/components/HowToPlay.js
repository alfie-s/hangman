


// passing props to this function as per app.js
export const HowToPlay = () => {

  return (
    // if help is not equl to blank - display. If it is blank don't do anything
    <div className="HowToCont">
      <div className="HowTo">
        <h2>How to Play</h2>
        <p>Guess the word one letter at a time.</p>
        <p>Use your keyboard.</p>
        <p>Dashes at the bottom give you a clue to how long the word is.</p>
        <p>When the drawing is complete, the game is over</p>
        <p>Wrong letters will appear to the left.</p>
        <p>Correct letters will fill the gaps at the bottom.</p>
      </div>
    </div>
  )

}