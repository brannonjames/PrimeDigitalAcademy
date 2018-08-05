import React, { Component } from 'react';
import './Table.css';


class Table extends Component {

  renderHeader() {
    return this.props.headers.map((th, i) => (
      <th key={i}>{th}</th>
    ));
  }

  renderRows() {
    return this.props.rows.map((row, i)=> (
      <tr key={i}>
        { this.renderRow(row) }
      </tr>
    ))
  }

  renderRow(row) {
    return Object.values(row).map((cell, i) => (
      <td key={i}>{cell}</td>
    ));
  }

  render() {
    return (
      <table className="Table">
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