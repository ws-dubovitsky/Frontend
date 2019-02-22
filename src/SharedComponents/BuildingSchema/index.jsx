import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
`;
const StyledDiv = styled.div`
    width: ${props => props.width - 30}px;
    height: ${props => props.height / props.amount}px;
    border: 1px solid #000;
    max-height: 100px;
`;
const ElementWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;
    align-items: flex-end;
`;

export default class BuildingSchema extends React.Component {
  renderDivs = () => {
    const { data, width, height } = this.props;
    console.log('data, width, height', data, width, height);
    return data.map(d => (
      <ElementWrapper>
        {d.label}
        <StyledDiv width={width} height={height} amount={data.length} />
      </ElementWrapper>

    ));
  }

  render() {
    console.log('this.props', this.props);
    const { width, height } = this.props;
    return (
      <Container width={width} height={height}>
        {this.renderDivs()}
      </Container>
    );
  }
}
