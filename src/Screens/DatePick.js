import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';

export default class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <DatePicker
            defaultDate={new Date(2020, 4, 1)}
            minimumDate={new Date(2020, 1, 1)}
            maximumDate={new Date(2030, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
      </Container>
    );
  }
}