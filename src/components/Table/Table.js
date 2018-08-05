import React, { Component } from 'react';



class Table extends Component {

  renderHeader() {
    return this.props.headers.map(th => (
      <th>{th}</th>
    ));
  }

  renderRows() {
    return this.props.rows.map(row => (
      <tr>
        { this.renderRow(row) }
      </tr>
    ))
  }

  renderRow(row) {
    return Object.values(row).map(cell => (
      <td>{cell}</td>
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            { this.renderHeader() }
          </tr>
        </thead>
        <tbody>
          { this.renderRows() }
        </tbody>
      </table>
    )
  }
}

export default Table;