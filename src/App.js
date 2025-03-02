import { useState } from 'react'
import { ControlledModal } from './components/controlled-modal'

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false)

  return (
    <>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I'm the body of the modal</h3>
        <p>This is a controlled modal</p>
      </ControlledModal>

      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>
    </>
  )
}

export default App
