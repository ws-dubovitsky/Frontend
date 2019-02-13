import React from "react";
import { Collapse, Button, CardBody, Card, Table } from "reactstrap";
import HistoryRow from "./HistoryRow";

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
        <Button
          outline
          color="secondary"
          onClick={this.toggle}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignSelf: "center",

            marginBottom: "1rem",
            marginTop: "1rem"
          }}
        >
          {this.props.obj.city} {this.props.obj.date}
        </Button>
        <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <Table bordered>
                <thead>
                  <tr>
                    <td>Date</td>
                    <td>Temperature</td>
                    <td>Weather condition</td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.obj.weatherList.map(item => (
                    <HistoryRow key={item.dt} row={item} />
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
      </>
    );
  }
}



