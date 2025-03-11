import { Children, cloneElement, isValidElement, useState } from 'react'

export const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const goNext = (dataFromStep) => {
    const nextStep = currentStep + 1
    const updatedData = { ...data, ...dataFromStep }

    console.log(updatedData)

    if (nextStep < children.length) {
      setCurrentStep(nextStep)
    } else {
      onDone(updatedData)
    }

    setData(updatedData)
  }

  const currentChild = Children.toArray(children)[currentStep]

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goNext })
  }

  return currentChild
}
