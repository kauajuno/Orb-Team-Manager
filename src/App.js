import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form'
import Team from './components/team';

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
      <Team name="Front-end"/>
      <Team name="Back-end"/>
      <Team name="UX & Design"/>
      <Team name="DevOps"/>
      <Team name="Proccess Management"/>
    </div>
  );
}

export default App;
