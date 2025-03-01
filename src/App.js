import axios from "axios";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

function App() {
  return (
    <>
      <DataSource 
        getData={() => getDataFromServer('/users/2')}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
