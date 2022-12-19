import React from 'react'
import { Card } from 'react-bootstrap'
import InputForm from '../component/InputForm'
import TodoList from '../component/TodoList'
const Home = () => {
  return (
    <div>
      <h1 className='text-info text-center'>To Do List</h1>
      <Card>
        <Card.Header className='text-center text-info'>Using react,redux</Card.Header>
        <InputForm />
      </Card>
      <h1 className='text-info text-center'>Yor List</h1>
      <TodoList />
    </div >
  )
}

export default Home