import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Container} from 'react-bootstrap'
import AddItem from './AddItem'
import ListItems from "./ListItems";

const TodoList = () => {

    const [filter, setfilter] = useState(false)
    const handleFilter=()=>{setfilter(!filter)}
    const Items = useSelector((state) => state)
    return (
        <Container>
            <AddItem handleFilter={handleFilter} filter={filter} ></AddItem>
            <ListItems Items={filter?Items.filter(el=>el.isDone):Items}/>
        </Container>
    )
}

export default TodoList
