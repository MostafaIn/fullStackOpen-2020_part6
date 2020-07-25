import anecdoteServices from '../services/anecdotes'

export const addVote = id => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
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
    const targetAnecdote = state.find( an => an.id === id)
    targetAnecdote.votes += 1

    return state.map( an => (an.id !== id) ? an : targetAnecdote )
  
  case 'NEW_ANECDOTE':
    return [ ...state, action.data]

  case 'INIT_ANECDOTES':
    return action.data

  default:
    return state
}
}

export default reducer