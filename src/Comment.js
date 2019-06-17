import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { db } from './firebase'

const CommentCard = styled.div`
    ${tw`relative m-4 p-4 text-left text-black_light`}
    background-color: rgba(102, 255, 255, 0.4);
    > span {
        ${tw`absolute pin-t pin-r mt-2 mr-2`};
        cursor: pointer;
        &:hover { background-color: rgba(102, 0, 0, 0.8) }
        span { ${tw`font-bold`}; }
    }
`

const Comment = ({ id, comment }) => {
    const withHashTags = () => {
        let hashed = comment.replace(/#(\w+)/g, `<a href='https://www.alomoves.com/hashtags/$1' target='_blank' rel='noopener noreferrer'>$&</a>`)
        return {__html: hashed}
    }

    const handleDelete = () => {
        return db.doc(id).delete()
        .then(() => alert(`${id} comment deleted!`))
        .catch( error => alert("Error removing document: ", error))
    }

    return (
        <CommentCard>
            <span onClick={ () => handleDelete() }><span>X</span> Delete</span>
            <br />
            <p dangerouslySetInnerHTML={ withHashTags() } />
        </CommentCard>
    )
}

export default Comment

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
};