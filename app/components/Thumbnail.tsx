import React, {useEffect} from 'react';
import {ICat} from '../reducers/cats.reducer';
import {
  StyleSheet,
  TouchableHighlight,
  Animated,
  View,
  Text,
  Image,
} from 'react-native';
import colorsConstants from '../constants/colors.constants';

import Icon from './Icon';

type Props = {
  cat: ICat;
  visible: () => void;
  pos: number;
};

let animatedValue = new Animated.Value(0);

const Thumbnail: React.FC<Props> = (props: Props) => {
  const {cat, visible, pos} = props;
  const {name, url, breed, gender, age} = cat;

  const genderColor =
    gender === 'm' ? colorsConstants.secondary : colorsConstants.primary;

  useEffect(() => {
    handleBlink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let animatedOpacity = (val: number) =>
    Animated.timing(animatedValue, {
      toValue: val,
      duration: 1000,
      useNativeDriver: true,
    });

  const handleBlink = () => {
    Animated.sequence([
      animatedOpacity(1),
      animatedOpacity(0),
      animatedOpacity(1),
      animatedOpacity(0),
    ]).start();
  };
  return (
    <TouchableHighlight
      onPress={visible}
      style={styles.touchable}
      underlayColor={'#DDD'}>
      <View style={styles.firstView}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
        <View style={styles.mainView}>
          <View style={styles.nameView}>
            <Text style={[styles.name, {color: genderColor}]}>{name}</Text>
            <View style={styles.genderView}>
              <Icon name={gender === 'm' ? 'male' : 'female'} color={'#888'} />
            </View>
          </View>
          <Text style={styles.textSecondary}>
            {age} yr{age !== '0' && 's'}
          </Text>
          <Text style={styles.textSecondary}>{breed}</Text>
        </View>
        {pos === 0 && (
          <Animated.View style={{opacity: animatedValue}}>
            <Icon name="swipe" color={colorsConstants.secondary} />
          </Animated.View>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 5,
    backgroundColor: colorsConstants.white,
    borderBottomColor: colorsConstants.gray,
    borderBottomWidth: 1,
  },
  firstView: {flexDirection: 'row', alignItems: 'center'},
  mainView: {paddingLeft: 20, justifyContent: 'space-between', flex: 1},
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Amatic-Bold',
    fontSize: 24,
  },
  genderView: {paddingLeft: 10},
  textSecondary: {fontSize: 14, color: colorsConstants.textSecondary},
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Thumbnail;
