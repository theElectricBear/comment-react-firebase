import React, { useState } from 'react'

import { db } from './firebase'

const AddComment = () => {
    const [ newComment, setNewComment ] = useState('')

    const handleSubmit = () => db.add({ comment: newComment }) && setNewComment('')
    
    return (
        <div>
        <input
            data-testid="inputName"
            type='text'
            value={newComment}
            placeholder='New Comment...'
            onChange={(e) => setNewComment(e.target.value) }
        />
        <button onClick={handleSubmit}>Add Comment</button>
      </div>
    )
}

export default AddComment