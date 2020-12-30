import React from 'react';
import { connect } from "react-redux"
import AddItem from './addItem'
import {bindActionCreators} from 'redux'
import {removeItemAction,updateItemAction,fetchDataFromeServerAction} from "../../redux/action"
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    let items=[...props.items]
    this.state={items:items}
  }

  showItem(item) {
    //remove var  change them to let/const 
    let ind=this.state.items.findIndex((it)=>(it.ItemId===item.ItemId))
    let edit=this.state.items[ind].editMode?item.editMode:false
    let completed=this.state.items[ind].completed
    let inputClassNames='relative outline-none border border-gray-400 rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline'
    return <li key={item.ItemId} className='grid grid-cols-2 py-4 px-20 '>
        <div className='flex '>
          <input type="checkbox" 
                  defaultChecked={item.completed} 
                  onClick={()=>{
                    this.props.updateItemAction(item.ItemId,{completed:!item.completed})
                  }}/>
          <div className={edit?'hidden ':completed?'line-through':''}>{item.body}</div>
          <input className={edit?inputClassNames:'hidden '} type="text" value={item.body} onChange={(e)=>{
          let newItems=[...this.state.items]
          newItems[ind].body=e.target.value
          this.props.updateItemAction(item.ItemId,{body:e.target.value})
        }}/>
        </div>
        <div className='px-20'>
          <button className="hover:text-blue-500 mr-5" onClick={()=>{
            edit=!edit   
            let newItems=[...this.state.items]
            newItems[ind].editMode=edit
            this.setState({items:newItems})
            //this.props.updateItemAction(item.id,{editMode:edit})
            }}>Edit</button>
          <button className="hover:text-red-500 " onClick={()=>{
            this.props.removeItemAction(item.ItemId)
          }}   >Delete</button>
        </div>
        </li>
  }
  //refresh page when props /state changed by redux
  static getDerivedStateFromProps(props, state) {
    if (props.initState) {
      props.fetchDataFromeServerAction()
    }
    if(JSON.stringify(props.items)!==JSON.stringify(state.items)){
      return {items:[...props.items]}}
    return null
  }

  render() {

      return (
      <div className='container max-w-screen-md'>
          <button className="hover:text-blue-500 mr-5" onClick={()=>{
                this.props.fetchDataFromeServerAction()
            }}>Fetch Data From Server</button>
          <div className={this.props.pendding?'':'hidden'}>LOADING DATA ....</div>
          <AddItem/>
      <div className='divide-y divide-gray-500'>
        <h3>Todo</h3>
        <ul >
            {this.props.incompleteItems.map((item,index)=>{
              return this.showItem(item)
            })}
        </ul>
      </div>
      <div className='divide-y divide-gray-500'>
        <h3>Completed</h3>
        {/* id selector, 名字只支持 驼峰式 */}
        <ul >
            {this.props.completedItems.map((item,index)=>{
              return this.showItem(item)
            })}
        </ul>
      </div>

      </div>
      )
      
      
    }
  }


const mapStateToProps=state=>{
  let completedItems=state.items.filter((item)=>(item.completed))
  let incompleteItems=state.items.filter((item)=>!item.completed)
  let totalItems=state.items.length
  return{
    initState:state.initState,
    pendding:state.pendding,
    completedItems:completedItems,
    incompleteItems:incompleteItems,
    items:state.items,
    totalItems:totalItems
  }
}
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     updateItemAction:(ItemId,payload)=>{ dispatch(updateItemAction(ItemId,payload)) },
//     removeItemAction:(ItemId)=>{dispatch(removeItemAction(ItemId))},
//     fetchDataFromeServerAction:()=>{dispatch(fetchDataFromeServerAction() )}

//   }
// }
const mapDispatchToProps={
  fetchDataFromeServerAction,removeItemAction,updateItemAction
}
export default connect(mapStateToProps,mapDispatchToProps)(ToDo)