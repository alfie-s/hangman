
// this displays the word
// destructured const
export const Word = ({ selectedWord, correctLetters }) => {
// returns the selected word split up and mapped using letter and index
    return (
      <div className="word">
        {selectedWord.split('').map((letter, i) => {
          return (
            /* add key as is being mapped */
            <span className="letter" key={i}>
            {/* checking id correct letters includes the letter
            if it is we want to display the letter
            if not show blank */}
              {correctLetters.includes(letter) ? letter : ''}
            </span>
          )
        })}
      </div>
    )
  }