import { Component } from 'react'
import { Mesh, MeshBasicMaterial, BoxBufferGeometry } from 'three'


class Cube extends Component {
  constructor(props) {
    super(props)

    this.geometry = new BoxBufferGeometry(20, 20, 20)
    this.material = new MeshBasicMaterial({color: 0x35e0f0})
    this.mesh = new Mesh(this.geometry, this.material)
  }
  

  componentDidMount() {
    this.props.scene.add(this.mesh)
  }


  render() {
    return null
  }
}

export default Cube
