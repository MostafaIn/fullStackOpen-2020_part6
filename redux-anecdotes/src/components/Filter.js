import React from 'react'
import { connect } from 'react-redux'
import { filterList } from '../reducers/filterReducer'

const Filter = (props) => {

    const handleChange = e => {
        e.preventDefault()
        let filterValue = e.target.value
        props.filterList(filterValue)
    }
    return (
        <div style={{margin: 10}}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        filterList: value => dispatch(filterList(value))
    }
}

export default connect(null, mapDispatchToProps)(Filter)
