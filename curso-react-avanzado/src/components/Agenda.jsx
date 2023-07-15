import React, { Component } from 'react'
import ReservarHora from './ReservarHora'

export default class Agenda extends Component {
  confirm = () =>{
    alert("OK")
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Doctor Nicolás</h1>
        <div class="list-group">
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
          <ReservarHora onClick={this.confirm} />
        </div>
      </div>
    )
  }
}
