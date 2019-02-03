import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";

const propStyle = (percent, base_degress) => {
  const rotateBy = base_degress + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  };
};

export default class ProgressBarCircle extends Component {
  static propTypes = {
    percent: PropTypes.number,
    radius: PropTypes.number.isRequired,
    ringWidth: PropTypes.number.isRequired,
    ringColor: PropTypes.string,
    ringBgColor: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.commonStyle = {
      width: props.radius * 2,
      height: props.radius * 2,
      borderRadius: props.radius,
      borderWidth: props.ringWidth
    };
    this.ringColorStyle = {
      borderRightColor: props.ringColor,
      borderTopColor: props.ringColor
    };

    this.ringBgColorStyle = {
      borderRightColor: props.ringBgColor,
      borderTopColor: props.ringBgColor
    };
  }

  renderThirdLayer(percent) {
    if (percent > 50) {
      percent > 100 ? (percent = 100) : (percent = percent);
      return (
        <View
          style={[
            styles.secondProgressLayer,
            propStyle(percent - 50, 45),
            this.commonStyle,
            this.ringColorStyle
          ]}
        />
      );
    } else {
      return (
        <View
          style={[styles.offSetLayer, this.commonStyle, this.ringBgColorStyle]}
        />
      );
    }
  }

  render() {
    const { percent } = this.props;
    let firstProgressLayerStyle;
    if (percent > 50) {
      firstProgressLayerStyle = propStyle(50, -135);
    } else {
      firstProgressLayerStyle = propStyle(percent, -135);
    }
    return (
      <View
        style={[
          styles.containerProgressCircle,
          this.commonStyle,
          { borderColor: this.props.ringBgColor }
        ]}
      >
        <View
          style={[
            styles.firstProgressLayer,
            firstProgressLayerStyle,
            this.commonStyle,
            this.ringColorStyle
          ]}
        />
        {this.renderThirdLayer(percent)}
        <Text style={{}}>{percent}%</Text>
      </View>
    );
  }
}

ProgressBarCircle.defaultProps = {
  percent: 0,
  radius: 100,
  ringWidth: 20,
  ringColor: "#3498db",
  ringBgColor: "grey"
};

const styles = StyleSheet.create({
  containerProgressCircle: {
    alignItems: "center",
    justifyContent: "center"
  },
  firstProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  },
  secondProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  },
  offSetLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    transform: [{ rotateZ: "-135deg" }]
  },
  display: {
    position: "absolute",
    fontSize: 24,
    fontWeight: "bold"
  }
});
