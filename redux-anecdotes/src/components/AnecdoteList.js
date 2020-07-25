import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

    const vote = (anecdote) => {
        props.addVote(anecdote)
        props.setNotification(`you voted "${anecdote.content}"`, 10)
    }

    return (
        <div>
            {props.anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    if(!state.filter){
        return { anecdotes: state.anecdotes }
    }else{
        return {
            anecdotes: state.anecdotes.filter(an => an.content.toLowerCase().includes(state.filter.toLowerCase()))
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addVote: value => dispatch(addVote(value)),
        setNotification: (msg, time) => dispatch(setNotification(msg, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
