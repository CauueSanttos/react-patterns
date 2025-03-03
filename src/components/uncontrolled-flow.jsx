import { Children, cloneElement, isValidElement, useState } from 'react'

export const UncontrolledFlow = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const goNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const currentChild = Children.toArray(children)[currentStep]

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goNext })
  }

  return currentChild
}
