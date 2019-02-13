import React from "react";
import HistoryCeil from "./HistoryCeil";

export default class HistoryRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

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
