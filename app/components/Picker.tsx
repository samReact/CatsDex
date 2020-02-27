import React from 'react';
import {Picker, StyleSheet, View} from 'react-native';

import colorsConstants from '../constants/colors.constants';

type PickerProps = {
  onValueChange: (e: string) => void;
  selectedValue: string;
  list: Array<string>;
  mode: 'dialog' | 'dropdown';
  error: boolean;
};

const PickerComponent: React.FC<PickerProps> = (props: PickerProps) => {
  const {onValueChange, selectedValue, list, mode, error} = props;

  const borderStyle = {
    borderColor: error ? colorsConstants.danger : colorsConstants.success,
  };

  return (
    <View style={[styles.view, borderStyle]}>
      <Picker
        onValueChange={onValueChange}
        selectedValue={selectedValue}
        mode={mode}>
        {list.map((elt, i) => (
          <Picker.Item key={i} label={elt} value={elt} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {borderWidth: 1, borderColor: 'red', marginTop: 10},
});

export default PickerComponent;
