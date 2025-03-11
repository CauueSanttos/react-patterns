import { logProps } from './components/log-props'
import { UserInfo } from './components/user-info'

const UserInfoWrapper = logProps(UserInfo)

function App() {
  return (
    <>
      <UserInfoWrapper test="test" b="I am be " />
    </>
  )
}

export default App
