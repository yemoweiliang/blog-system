import Head from 'next/head'

//import DeliverSection from './components/index/deliver'
import {Deliver,Price, Footer} from  '../components/index/index'
import {store} from '../redux/store'
import {Provider} from 'react-redux'
import ToDo from '../components/todo/toDo'
export default function Home() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  )
}
