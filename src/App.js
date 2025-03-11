import { useState } from 'react'
import { ControlledFlow } from './components/controlled-flow'

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter your name:</h1>
      <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
    </>
  )
}
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age:</h1>
      <button onClick={() => goNext({ age: 26 })}>Next</button>
    </>
  )
}

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congratulations! You qualify for the gift</h1>
      <button onClick={() => goNext({})}>Next</button>
    </>
  )
}

const StepFourth = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter your country:</h1>
      <button onClick={() => goNext({ country: 'Brazil' })}>Next</button>
    </>
  )
}

function App() {
  const [data, setData] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const onNext = (dataFromStep) => {
    setData({
      ...data,
      ...dataFromStep,
    })

    setCurrentStep(currentStep + 1)
  }

  return (
    <>
      <ControlledFlow currentIndex={currentStep} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFourth />
      </ControlledFlow>
    </>
  )
}

export default App
