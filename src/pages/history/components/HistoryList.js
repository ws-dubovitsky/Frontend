import React from "react";
import HistoryDetail from "./HistoryDetail";

export default class HistoryCollapse extends React.PureComponent {
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
          <HistoryDetail ceil={this.props.row.dt_txt} />
          <HistoryDetail
            ceil={`${Math.floor(this.props.row.main.temp - 273)} C`}
          />
          <HistoryDetail ceil={`${this.props.row.weather[0].description}`} />
        </tr>
      </>
    );
  }
}
