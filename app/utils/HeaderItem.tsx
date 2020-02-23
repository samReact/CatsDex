import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';

import Icon from '../utils/Icon';
import {
  CATSLIST,
  ADD_CAT,
  UPDATE_CAT,
  MAP,
} from '../constants/routes.constants';
import colorsConstants from '../constants/colors.constants';

const catLogo = require('../assets/img/cat_white128.png');

type Props = {
  pathname: string;
};
let titleName: string;

const HeaderItem: React.FC<Props> = ({pathname}) => {
  switch (pathname) {
    case CATSLIST:
      titleName = 'CatsDex';
      break;
    case ADD_CAT:
      titleName = 'Add Me !';
      break;
    case UPDATE_CAT:
      titleName = 'Update Me !';
      break;
    case MAP:
      titleName = 'Localize Me !';
  }
  const history = useHistory();
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.left}>
          {pathname !== CATSLIST ? (
            <TouchableOpacity onPress={() => history.goBack()}>
              <Icon name="arrow" color={colorsConstants.white} />
            </TouchableOpacity>
          ) : (
            <Image source={catLogo} style={styles.image} />
          )}
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>{titleName}</Text>
        </View>
        <View style={styles.right} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colorsConstants.primary,
    padding: 10,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  left: {flex: 1},
  titleView: {flex: 1, alignItems: 'center'},
  title: {
    fontFamily: 'Amatic-Bold',
    fontSize: 28,
    color: colorsConstants.white,
  },
  right: {flex: 1, alignItems: 'flex-end'},
  image: {width: 34, height: 34},
});

export default HeaderItem;
