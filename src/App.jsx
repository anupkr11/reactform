import { useState } from "react";
import Form from "./form"
import Display from "./Display";

function App() {
  const [users, setUsers] = useState([]);
  const userData = ({name, age, email}) => {
    console.log("User Data: ", name, age, email);
    setUsers([...users, {name, age, email}]);
  }
  return (
    <>
      <Form userData={userData}/>
      <Display users={users}/>
    </>
  )
}

export default App
