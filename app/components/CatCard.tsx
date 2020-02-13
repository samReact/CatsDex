import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
  Right,
  View,
} from 'native-base';
import {ICat} from '../reducers/cats.reducer';
import colorsConstants from '../constants/colors.constants';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatCard: React.FC<Props> = ({cat, visible}) => {
  const {name, url, breed, gender, age, description} = cat;
  const genderColor =
    gender === 'm' ? colorsConstants.secondary : colorsConstants.primary;

  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <View style={styles.nameView}>
            <Text style={[styles.name, {color: genderColor}]}>{name}</Text>
            <Icon
              type="MaterialCommunityIcons"
              name={gender === 'm' ? 'gender-male' : 'gender-female'}
              style={styles.genderIcon}
            />
          </View>
          <Text note>
            {age} yr{age !== '0' && 's'}
          </Text>
          <Text note>{breed}</Text>
        </Body>
        <Right>
          <Button transparent onPress={visible}>
            <Icon type="FontAwesome" name="close" style={styles.button} />
          </Button>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text note>{description}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {fontSize: 20, color: colorsConstants.gray},
  image: {height: 200, width: null, flex: 1},
  card: {flex: 1},
  name: {
    fontFamily: 'Amatic-Bold',
    fontSize: 32,
    color: colorsConstants.secondary,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderIcon: {fontSize: 24, paddingLeft: 10},
});

export default CatCard;
