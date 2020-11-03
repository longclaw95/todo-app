import React, { useState } from "react";
import './App.css';
import { useSelector } from "react-redux";
import {Button} from 'react-bootstrap'
import TodoList from './components/TodoList';
import {Route,Switch} from 'react-router-dom'
import EditItem from './components/EditItem'
import {Container} from 'react-bootstrap'
import AddItem from './components/AddItem'
import ListItems from "./components/ListItems";
function App() {
  const [filter, setfilter] = useState(false)
  const handleFilter=()=>{setfilter(!filter)}
  const Items = useSelector((state) => state)
  return (
    <div className="App">
      
      <Container>
            <AddItem handleFilter={handleFilter} filter={filter} ></AddItem>
            <ListItems Items={filter?Items.filter(el=>el.isDone):Items}/>
        </Container>
        
    </div>
  );
}

export default App;
