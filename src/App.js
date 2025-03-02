import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceWithRender } from "./components/data-source-with-render";
import { DataSource } from "./components/data-source";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
}

const Message = ({ message }) => <h1>{message}</h1>

function App() {
  return (
    <>
      <DataSourceWithRender 
        getData={() => getDataFromServer('/users/2')}
        resourceName="user"
        render={(resource) => <UserInfo user={resource}/>}
      >
        <UserInfo />
      </DataSourceWithRender>

      <DataSource 
        getData={() => getDataFromLocalStorage('test')} 
        resourceName="message"
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
