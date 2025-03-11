/* eslint-disable react/display-name */
export const logProps = (Component) => {
  return (props) => {
    console.log(props)

    return <Component {...props} />
  }
}
