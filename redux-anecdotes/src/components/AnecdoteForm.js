import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        if(content){
            dispatch(createAnecdote(content))
            dispatch(setNotification(`"${content}" is added!`, 10))
        }else{
            dispatch(setNotification('please Enter your anecdote !', 10))
        }
      }

    return (
        <div>
          <h3>create new</h3>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form> 
          <hr /> 
        </div>
    )
}

export default AnecdoteForm
