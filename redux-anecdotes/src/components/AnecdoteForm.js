import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        if(content){
            props.createAnecdote(content)
            props.setNotification(`"${content}" is added!`, 10)
        }else{
            props.setNotification('please Enter your anecdote !', 10)
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

const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => dispatch(createAnecdote(value)),
    setNotification: (msg, time) => dispatch(setNotification(msg, time))
  }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
