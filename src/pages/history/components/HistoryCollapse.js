// import React from "react";
// import HistoryDetail from "./HistoryDetail";
// import { Collapse, Button, CardBody, Card } from "reactstrap";

// export default class HistoryCollapse extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = { collapse: false };
//   }

//   toggle = () => {
//     this.setState({ collapse: !this.state.collapse });
//   };

//   render() {
//     return (
//       <>
//         <Button
//           outline
//           color="secondary"
//           onClick={this.toggle}
//           style={{
//             marginBottom: "1rem"
//           }}
//         >
//           <HistoryDetail ceil={this.props.row.dt_txt} />
//         </Button>
//         <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
//           <Card>
//             <br />
//             <CardBody style={{ textAlign: "center" }}>
//               <HistoryDetail
//                 ceil={`Temperature: ${Math.floor(
//                   this.props.row.main.temp - 273
//                 )} C`}
//               />
//               <br />
//               <HistoryDetail
//                 ceil={`Weather condition: ${
//                   this.props.row.weather[0].description
//                 }`}
//               />
//             </CardBody>
//           </Card>
//         </Collapse>
//       </>
//     );
//   }
// }