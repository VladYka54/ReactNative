import React from 'react'
import TodoItem from '../todoItem'
import { FlatList } from 'react-native'

// const todoItems = [
//     {id: 1, title: 'Task-1', isComplete: false},
//     {id: 2, title: 'Task-2', isComplete: true},
//     {id: 3, title: 'Task-3', isComplete: false},
//     {id: 4, title: 'Task-1', isComplete: false},
//     {id: 5, title: 'Task-2', isComplete: true},
//     {id: 6, title: 'Task-3', isComplete: false},
// ] 

const TodoList = ({todoItems}) => {
    // let todoItem = ({item}) => <TodoItem title={item.title} isComplete={item.isComplete} />
    return (
        <FlatList
            data={todoItems}
            renderItem={({item}) => (
                <TodoItem title={item.title} isComplete={item.isComplete} />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}
    

export default TodoList