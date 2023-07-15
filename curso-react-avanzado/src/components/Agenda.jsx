import React, { Component } from "react"
import ReservarHora from "./ReservarHora"
import Modal from "./Modal"
import Confirmacion from "./Confirmacion"

export default class Agenda extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: false }
  }

  modalClickHandler = (e) => {
    this.setState({ modalVisible: false })
  }

  confirm = () => {
    this.setState({ modalVisible: true })
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Doctor Nicolás</h1>
        <div className="list-group">
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
        </div>

        <div onClick={this.modalClickHandler}>
          <Modal>{this.state.modalVisible && <Confirmacion />}</Modal>
        </div>
      </div>
    )
  }
}
