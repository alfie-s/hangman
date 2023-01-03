// importing images from folder
import state1 from '../hangmanDrawings/state1.GIF'
import state2 from '../hangmanDrawings/state2.GIF'
import state3 from '../hangmanDrawings/state3.GIF'
import state4 from '../hangmanDrawings/state4.GIF'
import state5 from '../hangmanDrawings/state5.GIF'
import state6 from '../hangmanDrawings/state6.GIF'
import state7 from '../hangmanDrawings/state7.GIF'
import state8 from '../hangmanDrawings/state8.GIF'
import state9 from '../hangmanDrawings/state9.GIF'
import state10 from '../hangmanDrawings/state10.gif'
import state11 from '../hangmanDrawings/state11.GIF'

// bring in wrongLetters 
export const Hangman = ({ wrongLetters }) => {
  // errors equal to how many wrong letters there are
const errors = wrongLetters.length

  return (
    // conditionals, errors === number will show specific image
    <div height="250" width="200" className='HangmanCont'>
      {errors === 0 &&
      <img src={state1} alt="first"/>
      }
      {errors === 1 &&
        <img src={state2} alt="second"/>
      }
      {errors === 2 &&
        <img src={state3} alt="third"/>
      }
      {errors === 3 &&
        <img src={state4} alt="fourth"/>
      }
      {errors === 4 &&
        <img src={state5} alt="fifth"/>
      }
      {errors === 5 &&
        <img src={state6} alt="sixth"/>
      }
      {errors === 6 &&
        <img src={state7} alt="seventh"/>
      }
      {errors === 7 &&
        <img src={state8} alt="eighth"/>
      }
      {errors === 8 &&
        <img src={state9} alt="ninth"/>
      }
      {errors === 9 &&
        <img src={state10} alt="tenth"/>
      }
      {errors === 10 &&
        <img src={state11} alt="eleventh"/>
      }
      </div>
  )
}