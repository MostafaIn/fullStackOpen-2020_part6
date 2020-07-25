import anecdoteServices from '../services/anecdotes'

export const addVote = anecdote => {
  return async dispatch => {
    anecdote.votes += 1
    const votedAnecdote = await anecdoteServices.updateVotes(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const createAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}


export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
switch (action.type) {
  case 'VOTE':
    const { id } = action.data
    return state.map( an => (an.id !== id) ? an : action.data )

  case 'NEW_ANECDOTE':
    return [ ...state, action.data]

  case 'INIT_ANECDOTES':
    return action.data

  default:
    return state
}
}

export default reducer