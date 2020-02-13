import React from 'react';
import {Thumbnail, Text, View, Icon} from 'native-base';
import {ICat} from '../reducers/cats.reducer';
import {StyleSheet, TouchableHighlight} from 'react-native';
import colorsConstants from '../constants/colors.constants';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatThumbnail: React.FC<Props> = ({cat, visible}) => {
  const {name, url, breed, gender} = cat;

  const genderColor =
    gender === 'm' ? colorsConstants.secondary : colorsConstants.primary;
  return (
    <TouchableHighlight
      onPress={visible}
      style={styles.touchable}
      underlayColor={'#DDD'}>
      <>
        <Thumbnail
          source={{
            uri: url,
          }}
        />
        <View style={styles.mainView}>
          <View style={styles.nameView}>
            <Text style={[styles.name, {color: genderColor}]}>{name}</Text>
            <Icon
              type="MaterialCommunityIcons"
              name={gender === 'm' ? 'gender-male' : 'gender-female'}
              style={styles.icon}
            />
          </View>
          <Text note numberOfLines={1}>
            {breed}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colorsConstants.white,
    borderBottomColor: colorsConstants.gray,
    borderBottomWidth: 1,
  },
  mainView: {paddingLeft: 20},
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Amatic-Bold',
    fontSize: 24,
  },
  icon: {fontSize: 18, paddingLeft: 10},
});

export default CatThumbnail;
