import React, { } from 'react'

function Counter({ count, id, azalt, coxalt }) {

    return (
        <div className='count_box'>
            <button onClick={() => azalt(id)}>-</button>
            <span className='count'>{count}</span>
            <button onClick={() => coxalt(id)}>+</button>
        </div>
    )
}

export default Counter
