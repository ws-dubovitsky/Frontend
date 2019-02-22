import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { changeFloorsAmount } from '../../Store/actions';
import Header from '../../SharedComponents/Header/index';
import RadioButtonGroup from '../../SharedComponents/RadioButtonGroup/index';
import NumberSelector from '../../SharedComponents/NumberSelector/index';
import BuildingSchema from '../../SharedComponents/BuildingSchema/index';
import Button from '../../SharedComponents/Button/index';

const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

class Dashboard extends React.Component {
  onChangeNumber = (param) => {
    console.log('param', param);
    this.props.changeFloorsAmount(param);
  }


  render() {
    console.log('this.props.dashboard', this.props.dashboard);
    const {
      floorsAmount,
      appartmentsSelectorData,
      floorSelectorData,
      schemaData,
    } = this.props.dashboard;
    return (
      <>
        <Header>Step 1 : Listing details</Header>
        <StyledBody>
          <LeftDiv>
            <RadioButtonGroup
              name="appartments-selector"
              data={appartmentsSelectorData}
              selected={this.appTypeSelected}
            />
            <NumberSelector
              label="Floors"
              value={floorsAmount}
              onChange={this.onChangeNumber}
            />
          </LeftDiv>
          <RightDiv>
            <RadioButtonGroup
              name="floor-selector"
              data={floorSelectorData}
              selected={this.floorSelected}
            />
            <BuildingSchema data={schemaData} width={300} height={600} />
          </RightDiv>
        </StyledBody>
        <Button
          onClick={() => {
            console.log('clicked');
          }}
        >
          Next
        </Button>
      </>
    );
  }
}

function mapStateToProps({ dashboard }) {
  return { dashboard };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFloorsAmount }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
