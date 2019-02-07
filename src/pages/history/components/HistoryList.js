// import React from "react";
// import { connect } from "react-redux";
// import HistoryCollapse from "./HistoryCollapse";

// class WeatherList extends React.PureComponent {
//   render() {
//     console.log(this.props.weather);
//     return (
//       <>
//         {this.props.weather.list.map(obj => (
//           <HistoryCollapse key={obj.dt} row={obj} />
//         ))}
//       </>
//     );
//   }
// }

// function mapStateToProps({ weather }) {
//   return { weather };
// }

// export default connect(mapStateToProps)(WeatherList);