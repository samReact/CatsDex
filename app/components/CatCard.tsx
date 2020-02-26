import React from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {ICat} from '../reducers/cats.reducer';
import colorsConstants from '../constants/colors.constants';

import Icon from '../utils/Icon';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatCard: React.FC<Props> = ({cat, visible}) => {
  const {name, url, breed, gender, age, description} = cat;
  const genderColor =
    gender === 'm' ? colorsConstants.secondary : colorsConstants.primary;

  return (
    <View style={styles.card}>
      <View style={styles.cardView}>
        <View>
          <View style={styles.nameView}>
            <Text style={[styles.name, {color: genderColor}]}>{name}</Text>
            <Icon name={gender === 'm' ? 'male' : 'female'} color={'#888'} />
          </View>
          <Text style={styles.textSecondary}>
            {age} yr{age !== '0' && 's'}
          </Text>
          <Text style={styles.textSecondary}>{breed}</Text>
        </View>
        <TouchableHighlight
          underlayColor={colorsConstants.textSecondary}
          style={styles.touchable}
          onPress={visible}>
          <Icon name="close" color={colorsConstants.darkGray} />
        </TouchableHighlight>
      </View>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.textSecondary}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {flex: 1},
  cardView: {
    backgroundColor: colorsConstants.white,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Amatic-Bold',
    fontSize: 32,
    color: colorsConstants.secondary,
  },
  textSecondary: {fontSize: 14, color: colorsConstants.textSecondary},

  imageView: {height: 200},
  image: {flex: 1},
  descriptionView: {backgroundColor: colorsConstants.white, padding: 10},
  touchable: {
    paddingTop: 10,
  },
});

export default CatCard;
