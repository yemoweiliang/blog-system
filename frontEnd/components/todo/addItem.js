import React from 'react';
import { connect } from "react-redux"
import {addItemAction} from "../../redux/action"
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.state = {
        item:{
            body:''
    }};
  }
  handleAddItem(){
    this.props.addItemAction(this.state.item.body)
    this.setState({item:{body:''}})
  }
  handleChange(event) {
      
    this.setState({item: {body:event.target.value}});
  }
    render() {
      return (
          <div className='divide-y divide-gray-500 '>
            <label htmlFor="new-task">Add Item</label>
            <div className='grid grid-cols-2 py-10 px-20'>
                <input className='relative outline-none border border-gray-400 rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline' type="text" onChange={this.handleChange} value={this.state.item.body}/>
                <button className="hover:text-blue-500  rounded " onClick={this.handleAddItem}>Add</button>
            </div>
          </div>
      )
      
      
    }
  }
const mapDispatchToProps={
  addItemAction
}
export default connect(null,mapDispatchToProps)(AddItem)