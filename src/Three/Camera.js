import React, { Component } from 'react'
import { PerspectiveCamera } from 'three'


class Camera extends Component {
  constructor(props) {
    super(props)
    
    this.camera = new PerspectiveCamera(20, window.innerWidth/window.innerHeight, 1, 1000)  
  }


  componentWillMount() {
    if(window.innerWidth <= 1200) {
      this.camera.position.z = 80
    }
    else {
      this.camera.position.z = 50
    }  
    console.log(this.camera)
    this.props.passUpProps(this.camera)
  }


  render() {
    return <div></div>
  }
}

export default Camera
