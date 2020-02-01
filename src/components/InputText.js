import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";



});

class InputText extends Component<{}> {

    state = {
        value: ""
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    onChangeText = (value) => {
        this.setState({
            value
        }, () => {
            this.props.onChangeText(value);
        })
    }

    render() {
        const {placeholder, secureTextEntry, keyboardType, maxLength, value, onChangeText, onSubmitEditing} = this.props;
        return (
            <View>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={placeholder}
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    selectionColor="#999999"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    returnKeyType="next"
                    value={this.state.value}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={this.onChangeText} />
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;
