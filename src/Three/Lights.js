import React, { Component } from 'react'
import { DirectionalLight, PointLight } from 'three'


class Lights extends Component {
  constructor(props) {
    super(props)

    this.directionalLight = new DirectionalLight(0x4888A2)
    this.pointLight = new PointLight(0x17BEBB)
  }


  componentWillMount() {
    let { directionalLight, pointLight } = this

    directionalLight.position.z = 300
    directionalLight.position.y = -100
    directionalLight.position.x = 10
    directionalLight.intensity = 0.4

    pointLight.position.y = 0
    pointLight.position.x = 0
    pointLight.position.z = 400
    pointLight.intensity = 0.7
  }


  componentDidMount() {
    let { scene } = this.props

    scene.add(this.directionalLight)
    scene.add(this.pointLight)
  }


  render() {
    return <div></div>
  }
}

export default Lights
