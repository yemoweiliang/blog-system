//let nextTodoId = 3
//minimo id 
import {v1 as uuidv1} from 'uuid'
const url='http://localhost:5001/express/api/todo'
export function addItemAction(text){
    let id=uuidv1()
    let action={
        type:"ADD_ITEM",
        item:{
            ItemId:id,
            body:text,
            completed:false
        }
    }
    return (dispatch)=>{
        dispatch(loadingDataAction)
        return fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(action.item),
        }).then(response => response.json())
        .then(
            data=>dispatch(action)
        )
    }
    

}
export function removeItemAction(id){
    let action={
        type:"REMOVE_ITEM",
        ItemId:id
    }

    return (dispatch)=>{
        dispatch(loadingDataAction)
        return fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                ItemId:id
            }),
        }).then(response => response.json())
        .then(
            data=>dispatch(action)
        )
    }
}
export function updateItemAction(id,value){
    let action={
        type:"UPDATE_ITEM",
        ItemId:id,
        payload:value
    }
    return (dispatch)=>{
        return fetch(url,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                ItemId:id,
                UpdateContent:value
            }),
        }).then(response => response.json())
        .then(
            data=>dispatch(action)
        )
    }
}
export function loadingDataAction(){
    return {
        type:"LOADING_DATA"
    }
}


export function fetchDataFromeServerAction(){
        return (dispatch)=>{
            dispatch(loadingDataAction)
            return fetch(url)
                    .then(response => response.json())
                    .then(data => dispatch({
                        type:"FETCH_TODO_LIST",
                        items:data.items
                    }))
            
}}