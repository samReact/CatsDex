import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colorsConstants from '../constants/colors.constants';

type InputProps = {
  placeholder: string;
  defaultValue: string;
  onChangeText: (e: string) => void;
  error: boolean;
  multiline?: boolean;
  numberOfLines?: number;
};

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    multiline,
    numberOfLines,
    placeholder,
    defaultValue,
    onChangeText,
  } = props;
  const borderStyle = {
    borderColor: props.error ? colorsConstants.danger : colorsConstants.success,
  };
  const multilinesStyle = {
    height: props.multiline ? 80 : 45,
  };
  return (
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      style={[styles.input, borderStyle, multilinesStyle]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colorsConstants.gray,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    textAlignVertical: 'top',
  },
});

export default Input;
