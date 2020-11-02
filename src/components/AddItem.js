import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import {Form,Button} from 'react-bootstrap'
import { addItem} from '../js/actions/ActionTaks';
const AddItem = ({handleFilter, filter}) => {
    const [input, setinput] = useState("")
    
    const handleChange=(e)=> {
        setinput(e.target.value);
    }
    const dispatch = useDispatch();

    const addNewItem=(e)=>{
        if (input) {
            dispatch(
                addItem({
                    id: Date.now(),
                    description: input,
                    isDone: false,
                  })
            );
            setinput("");
                } else alert("mahah")
        
        
    };

    return (
        <Form.Group>
            
            <Form.Control size="lg" type="text" placeholder="Add a todo Task" value= {input} onChange={handleChange} />
            <Button variant="secondary" onClick={addNewItem}>+</Button>
            <Button variant="primary"onClick={handleFilter}>{filter?"All":"isDone"}</Button>
            
        </Form.Group>
    )
}

export default AddItem
