import { Children, cloneElement, isValidElement } from 'react'

export const ControlledFlow = ({ children, currentIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep)
  }

  const currentChild = Children.toArray(children)[currentIndex]

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goNext })
  }

  return currentChild
}
