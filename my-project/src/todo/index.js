import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import TodoList from '../todoList/index'
import uuidv4 from 'uuidv4'

const Todo = () => {
    const [todoItems, setTodoItems] = useState([
        {id: 1, title: 'Task-1', isComplete: false},
        {id: 2, title: 'Task-2', isComplete: false},
    ])
    const [text, setText] = useState('')
    const changeText = text => setText(text)
    return (
        <>
            <TodoList todoItems={todoItems} />
            <TextInput
                style={styles.textInput}
                placeholder='Add task...'
                value={text}
                onChangeText={changeText}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default Todo