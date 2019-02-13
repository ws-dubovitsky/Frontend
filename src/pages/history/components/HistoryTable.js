import React from "react";
import TableCollapse from "./TableCollapse";
import Btn from "./Btn";

export default class HistoryTable extends React.PureComponent {
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
        <Btn
          city={this.props.obj.city}
          date={this.props.obj.date}
          toggle={this.toggle}
        />
        <TableCollapse obj={this.props.obj} isOpen={this.state.collapse} />
      </>
    );
  }
}
