// const element = document.createElement('h1')
// element.innerText = "Hello, Vander"

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hola Vander</h1>
const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__)
ReactDOM.render(element, container)