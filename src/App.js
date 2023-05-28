import { useState } from 'react';
import Banner from './components/banner';
import Form from './components/form'
import Team from './components/team';

function App() {

  const teams = [
    {
      name: 'Front-end',
      primaryColor: '#FF7A7A',
      secondaryColor: '#FFD3D3'
    },
    {
      name: 'Back-end',
      primaryColor: '#FFF27A',
      secondaryColor: '#FEFFD3'
    },
    {
      name: 'DevOps',
      primaryColor: '#BCFF67',
      secondaryColor: '#DFFFB6'
    },
    {
      name: 'UX & Design',
      primaryColor: '#69FF81',
      secondaryColor: '#B6FFC1'
    },
    {
      name: 'Process Management',
      primaryColor: '#9069FF',
      secondaryColor: '#DFD3FF'
    },
    
  ];

  const [members, setMembers] = useState([]);

  const onNewMemberRegister = (member) => {
    setMembers([...members, member]);
    // console.log(member);
  }

  return (
    <div className="App">
      <Banner/>
      <Form onRegister={onNewMemberRegister} teamNames={teams.map(team => team.name)}/>
      {teams.map(
        team =>
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            members={members.filter(member => member.team === team.name)}
          />)}
    </div>
  );
}

export default App;
