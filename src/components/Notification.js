// notification idea from https://github.com/bradtraversy/vanillawebprojects/tree/master/hangman

// passing showNotification into function
export const Notification = ({ showNotification }) => {
    return (
      // template lilteral - if showNotification is true add show as a class if not add nothing
      <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>You have already entered this letter</p>
      </div>
    )
  }
