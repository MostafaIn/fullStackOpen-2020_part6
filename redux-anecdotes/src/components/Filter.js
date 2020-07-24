import React from 'react'
import { useDispatch } from 'react-redux'
import { filterList } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = e => {
        e.preventDefault()
        let filterValue = e.target.value
        dispatch(filterList(filterValue))
    }
    return (
        <div style={{margin: 10}}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter
