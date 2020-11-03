import React from "react";
import { useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import EditItem from "./EditItem";
import { DeleteItem, completeItem } from '../js/actions/ActionTaks';
import {Link} from 'react-router-dom'



const ListItems = ({Items}) => {

    

    const dispatch = useDispatch();
    return (
        <div>
             {Items.map((item,index)=>
             <ListGroup>
             <ListGroup.Item >
                 <p style={{ margin: "0px" }} className={item.isDone ? "checked" : ""}>
            {item.description}
          </p>
                <Button variant="danger" onClick={() => dispatch(DeleteItem(item.id))}>Delete</Button>
                
                <Button variant="primary"><EditItem item={item}></EditItem></Button>
                
                <Button variant="secondary"onClick={() => dispatch(completeItem(item.id))}>{item.isDone ? "is Done" : "Not Done"}</Button></ListGroup.Item>
             </ListGroup>
                )} 
        </div>
    )
}

export default ListItems
