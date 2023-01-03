// destructure wrongletters
export const WrongLetters = ({ wrongLetters }) => {

    return (
      <div className="wrongLettersCont">
        <div>
        {/* length if wrongLetters greater than 0 produce "wrong" */}
          {wrongLetters.length > 0 && 
            <p className="wrongLetterTitle">Wrong Letters</p>
          }
          {wrongLetters
          /* map to add the span for each letter */
            .map((letter, i) => <span key={i}>{letter}</span>)
            /* reduce to put a , between letters if it equals null just have current,  */
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
    )
  }