import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { render, cleanup } from '@testing-library/react'
import AddComment from '../AddComment'
import App from '../App'

afterEach(cleanup)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it('can render AddComment', () => {
    const {getByText } = render(
        <AddComment />,
    )
    /* ToDo Need Firebase Mocks to test*/
})

