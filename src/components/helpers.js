// function to show message on duplicate button presses
export function showNotification(setter) {
  // change setter to true
    setter(true);
  //timer for display 
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  
// check for win or lose
  export function checkWin(correct, wrong, word) {
    let status = 'win';
  
    //win
    word.split('').forEach(letter => {
      // if the array does not include the letters set status to nothing
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    //lose
    // if length equals 10(amount of images for hangman) change status to lose
    if(wrong.length === 10) status = 'lose';
    return status
  }