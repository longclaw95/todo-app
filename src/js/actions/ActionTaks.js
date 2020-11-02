import {ADD_TASK,DELETE_TASK,CHECK_TASK,EDIT_TASK} from '../constants/ActionTypes'

export const addItem =(payload) => {
    return {
        type : ADD_TASK,
        payload,
    };

}

export const DeleteItem =(payload) => {
    return {
        type : DELETE_TASK,
        payload,
    };

}

export const completeItem =(payload) => {
    return {
        type : CHECK_TASK,
        payload,
    };

}

export const EditItem =(payload) => {
    return {
        type : EDIT_TASK,
        payload,
    };

}