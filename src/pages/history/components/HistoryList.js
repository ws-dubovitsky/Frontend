import React from "react";
import { connect } from "react-redux";

// import HistoryCollapse from "./HistoryCollapse";

class HistoryList extends React.PureComponent {
  render() {
    console.log(this.props.weather.list.map(obj =>obj));
    return <div>History</div>;
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(HistoryList);
