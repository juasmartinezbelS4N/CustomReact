import React, { Component } from "react"

export default class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <dt>Título: {this.props.titulo}</dt>
        <dd>definición: {this.props.definicion}</dd>
      </>
    )
  }
}
