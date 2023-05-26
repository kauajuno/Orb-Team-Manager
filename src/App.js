import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form'

function App() {

  const [members, setMembers] = useState([]);

  const onNewMemberRegister = (member) => {
    setMembers([...members, member]);
    console.log(member);
  }

  return (
    <div className="App">
      <Banner/>
      <Form onRegister={onNewMemberRegister}/>
    </div>
  );
}

export default App;
