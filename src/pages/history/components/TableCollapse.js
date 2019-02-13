import React from "react";
import HistoryRow from "./HistoryRow";
import { Collapse, CardBody, Card, Table } from "reactstrap";

export default class TableCollapse extends React.PureComponent {
  render() {
    return (
      <Collapse style={{ marginBottom: "1rem" }} isOpen={this.props.isOpen}>
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
    );
  }
}
