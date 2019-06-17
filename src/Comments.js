import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Comment from './Comment'

const List = styled.section`
    ${tw`relative w-64 mx-auto`}
    list-style: none;
`
const Comments = ({ comments }) => {
    return (
        <List>
            { comments.map((doc, index) => {
                const { id } = doc 
                const { comment } = doc.data()
                return (
                    <Comment {...{ key: index, id, comment }} />
                )
            })}
        </List>
    )
}

export default Comments

Comments.propTypes = {
    comments: PropTypes.array.isRequired
};