import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Main from './Main'
import './index.css'
import Footer from './Footer'

function App(){
    return(<div>
        <Navbar />
        <Main />
        <Footer />
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)