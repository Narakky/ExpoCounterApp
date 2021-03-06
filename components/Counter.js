import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import colors from '../utils/colors';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  plus = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  minus = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <Container>
        <Count>{this.state.counter}</Count>
        <Buttons>
          <ButtonBoxPlus
            underlayColor={colors.plus}
            onPress={this.plus}
           >
            <ButtonText>+</ButtonText>
          </ButtonBoxPlus>
          <ButtonBoxMinus
            underlayColor={colors.minus}
            onPress={this.minus}
           >
            <ButtonText>-</ButtonText>
          </ButtonBoxMinus>
        </Buttons>
      </Container>
    );
  }
}

const Container = styled(View)`
  justify-content: center;
  height: 100%;
  background: ${colors.white};
`;

const Buttons = styled(View)`
  justify-content: space-around;
  flex-direction: row;
`;

const ButtonBox = styled(TouchableHighlight)`
  height: 40;
  width: 100;
  border-radius: 3px;
  border: ${colors.black};
  justify-content: center;
  align-items: center;
`;

const ButtonBoxPlus = styled(ButtonBox)`
  border: ${colors.plus};
`;

const ButtonBoxMinus = styled(ButtonBox)`
  border: ${colors.minus};
`;

const ButtonText = styled(Text)`
  font-size: 20;
`;

const Count = styled(Text)`
  font-size: 50;
  text-align: center;
`;

export default Counter;