import React, { Component } from 'react'
import Renderer from './Three/Renderer'


// const { log } = console
// Going to make App pass down the functions which will get access to the
// scene and camera THREE objects and then pass those to the renderer to render
// the scene. May move them later for better structuring of the application
class App extends Component {
  render() {
    return <Renderer/>
  }
}

export default App;
