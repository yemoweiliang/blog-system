const initialState = {
    items: [
    ],
    initState:true,
    pendding:true,
  }
  
  const reducer = (state = initialState, action) => {
      switch (action.type){
        case "LOADING_DATA":
            return {...state,pendding:true};
        case "FETCH_TODO_LIST":
            return {...state,items:action.items,pendding:false, initState:false};
        case "ADD_ITEM":
            return {...state,items:[...state.items,action.item]};
        case "REMOVE_ITEM":
            return {...state,items:state.items.filter((item)=>(item.ItemId!==action.ItemId))}
        case "UPDATE_ITEM":
            let newState={...state}
            newState.items.forEach(
                (item,ind)=>{
                    if (item.ItemId===action.ItemId){
                        newState.items[ind]={...item,...action.payload}
                    }}
            )
            return newState;
        default:
            return state;
      }
  }
  export default reducer