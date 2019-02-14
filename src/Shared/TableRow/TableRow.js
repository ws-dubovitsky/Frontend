import React from "react";
import TableCeil from "../TableCell/TableCeil";

export default class TableRow extends React.PureComponent {
  render() {
    return (
        <tr>
          <TableCeil ceil={this.props.row.dt_txt} />
          <TableCeil ceil={`${Math.floor(this.props.row.main.temp - 273)} C`} />
          <TableCeil ceil={`${this.props.row.weather[0].description}`} />
        </tr>
    );
  }
}
