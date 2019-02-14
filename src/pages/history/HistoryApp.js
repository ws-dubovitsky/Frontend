import React from "react";
import HistoryTable from "./components/HistoryTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchHistory } from "../../Store/actions";

class HistoryApp extends React.PureComponent {
  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    return (
      <>
        {this.props.history.list.map(item => (
          <HistoryTable key={item._id} obj={item} />
        ))}
      </>
    );
  }
}

function mapStateToProps({ history }) {
  return { history };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHistory }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryApp);
