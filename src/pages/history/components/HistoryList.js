import React from "react";
import { fetchHistory } from "../../../Store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import HistoryCollapse from "./HistoryCollapse";

class HistoryList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  componentDidMount() {
    this.props.fetchHistory();
  }

  render() {
    let a = this.props.history.list.map(item =>
      item.weatherList.map(obj => obj.dt)
    );
    console.log(a);
    return (
      <>
        <Button
          outline
          color="secondary"
          onClick={this.toggle}
          style={{
            marginBottom: "1rem"
          }}
        >
          {this.props.history.list.map(
            item => "City: " + item.city + " Date: " + item.date
          )}
        </Button>
        <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
          <Card>
            <br />
            <CardBody style={{ textAlign: "center" }}>
              {this.props.history.list.map(item =>
                item.weatherList.map(obj => (
                  <HistoryCollapse key={obj.dt} row={obj} />
                ))
              )}
            </CardBody>
          </Card>
        </Collapse>
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
)(HistoryList);
