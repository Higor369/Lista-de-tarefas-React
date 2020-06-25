import React , { Component } from 'react'


import PageHeader from '../template/pagesHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const url = 'http://localhost:3009/api/todos'

export default prop => {

     return (

            <div>
              <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
              <TodoForm></TodoForm>
              <TodoList></TodoList>
            </div>
        )
    }

