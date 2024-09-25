import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      number: 0,
      startStopText: 'Start',
    };

    this.startStopButton = this.startStopButton.bind(this);
    this.clearButton = this.clearButton.bind(this);
  }

  startStopButton() {
    if (this.state.timer === null) {
      this.setState({
        startStopText: 'Stop',
        timer: setInterval(() => {
          this.setState((prevState) => ({
            number: prevState.number + 0.1,
          }));
        }, 100),
      });
    } else {
      clearInterval(this.state.timer);
      this.setState({
        startStopText: 'Start',
        timer: null,
      });
    }
  }

  clearButton() {
    clearInterval(this.state.timer);
    this.setState({
      number: 0,
      startStopText: 'Start',
      timer: null,
    });
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.tContainer}>
          <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.startStopButton}>
              <Text style={styles.buttonText}>{this.state.startStopText}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.clearButton}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  tContainer: {
    alignItems: "center",
  },
  counterText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
