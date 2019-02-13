import React from "react";
import HistoryCeil from "./HistoryCeil";

export default class HistoryRow extends React.PureComponent {
  render() {
    return (
      <>
        <tr>
          <HistoryCeil ceil={this.props.row.dt_txt} />
          <HistoryCeil
            ceil={`${Math.floor(this.props.row.main.temp - 273)} C`}
          />
          <HistoryCeil ceil={`${this.props.row.weather[0].description}`} />
        </tr>
      </>
    );
  }
}
