import { type } from 'os';
import React from 'react';
import './App.css';
/* import Table from './components/Table'; */
import {Table, User} from './components/Table';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
/* function App() {
  return (
    <div className="App">
      <p>Hola mundo </p>
    </div>
  );
} */

/* const App:React.FC = () => { */
  type MyState ={
    users: User[];
  }

  class App extends React.Component<{},MyState> {
    state:MyState ={
      users:[
        {
          name: 'Cloud',
          job: 'Merc',
        },
        {
          name: 'Barret',
          job: 'Bar owner',
        },
        {
          name: 'Tifa',
          job: 'Bartender',
        },
        {
          name: 'Aerith',
          job: 'Flower girl',
        },
      ]
    }
  
    removeUser = (index:any) => {
      const { users } = this.state
       this.setState({
        users: users.filter((_, i) => {
          return i !== ind
        })
    }
  

  
  
  /* return (
    <div className="App">
      <Table/>
      <TableBody/>
      <TableHeader/>
    </div>
  ); */



export default App;
