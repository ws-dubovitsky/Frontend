import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { changeFloorsAmount, changeAppartmentsSelectorData, changeFloorSelectorData } from '../../Store/actions';
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

const StyledDivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 30px;
`;

const StyledButton = styled(Button)`
  display: flex;
`;

class Dashboard extends React.Component {
  onChangeNumber = (param) => {
    if (param.value < 1 || param.value > this.props.dashboard.maxFloorsAmount) return null;
    this.props.changeFloorsAmount(param);
  };

  onAppartmentsSelectorData = (select) => {
    console.log('select', select);
    this.props.changeAppartmentsSelectorData(select);
  };

  onFloorSelectorData = (select) => {
    console.log('select', select);
    this.props.changeFloorSelectorData(select);
  };


  onNextPage = () => {
    console.log('Clicked');
    this.props.history.push('/step-two');
  };


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
              selected={this.onAppartmentsSelectorData}
              checked={this.props.dashboard.checkedAppartments}
              onChange={this.onChangeAppartmentsSelectorData}
              // checked={this.props.dashboard.checkedAppartments == 'appartments'}
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
              selected={this.onFloorSelectorData}
              checked={this.props.dashboard.checkedFloor}
            />
            <BuildingSchema data={schemaData} width={300} height={600} />
          </RightDiv>
        </StyledBody>
        <StyledDivButton>
          <StyledButton onClick={this.onNextPage}>Next</StyledButton>
        </StyledDivButton>
      </>
    );
  }
}

function mapStateToProps({ dashboard }) {
  return { dashboard };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeFloorsAmount, changeAppartmentsSelectorData, changeFloorSelectorData },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
