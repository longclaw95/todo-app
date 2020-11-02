import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const EditItem = ({Items,match}) => {
    
    const selected_item = Items.filter( element => element.description===match.params.description)
    console.log(selected_item)
    return (
        
        <Form.Group>
            
            <Form.Control size="lg" type="text" placeholder="Edit" value={match.params.description}  />
            <Link to='/'>
            <Button variant="primary">Edit Task</Button>
            </Link>
        </Form.Group>
        
    )
}

export default EditItem
