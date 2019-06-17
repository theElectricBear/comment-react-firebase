import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { db } from './firebase'

import AddComment from './AddComment'
import Comments from './Comments'

const Article = styled.article`
    ${tw`bg-orange`}
    min-height: 100vh;
    min-width: 100vw;
`
const Header = styled.header`
    ${tw`w-screen m-0 py-2 text-center text-black_light bg-orange`}
`
const Main = styled.main`
    ${tw`m-0 py-2 text-center text-black_light`}
`

const App = () => {
    const [ comments, setComments ] = useState([])

    useEffect(() => {
        const unsubscribe = db.onSnapshot( snapshot => {
            const comments = []
            snapshot.forEach(doc => { comments.push(doc) }) 
            setComments(comments);
        }, error => console.log(error) )

        return () => unsubscribe()
    }, [])

    return (
        <Article>
        <Header>
            <h1>Comments - React - Firebase</h1>
            <AddComment />
        </Header>
        <Main>
        <Router>
        <Comments {...{comments}} />
        </Router>
        </Main>
        </Article>
    )
}

export default App
