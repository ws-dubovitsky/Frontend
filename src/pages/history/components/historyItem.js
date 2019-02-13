import React from "react";
import HistoryDetail from "./HistoryDetail";

export default class HistoryList extends React.PureComponent {
  render() {
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
          <HistoryDetail ceil={this.props.row.dt_txt} />
        </Button>
        <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <Table>
                <HistoryDetail
                  ceil={`Temperature: ${Math.floor(
                    this.props.row.main.temp - 273
                  )} C`}
                />

                <HistoryDetail
                  ceil={`Weather condition: ${
                    this.props.row.weather[0].description
                  }`}
                />
              </Table>
            </CardBody>
          </Card>
        </Collapse>
      </>
    );
  }
}
