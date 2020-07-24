import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        if(anecdote){
            dispatch(createAnecdote(anecdote))
            dispatch(setNotification(`"${anecdote}" is added!`))
        }else{
            dispatch(setNotification('please Enter your anecdote !'))
        }

        setTimeout(() => dispatch(setNotification(null)), 5000);
        e.target.anecdote.value = ''
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
