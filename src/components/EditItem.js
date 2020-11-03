import React,{useState} from 'react'
import {Modal,Button,FormControl} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { editItem } from '../js/actions/ActionTaks'

const EditItem = ({item}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const [input, setinput] = useState(item.description);
    const edit = () => {
        dispatch(editItem({ id: item.id, description: input }));
      };
    return (
        
        <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={input}
            onChange={(e)=>setinput(e.target.value)}
          /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose();setinput(item.description);}} >
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();edit()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    )
}

export default EditItem
