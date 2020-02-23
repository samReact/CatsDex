import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {useHistory} from 'react-router-native';

import {Icon} from 'native-base';
import colorsConstants from '../constants/colors.constants';
import {CATSLIST, ADD_CAT, MAP} from '../constants/routes.constants';

type Props = {
  pathname: string;
};

const FooterItem: React.FC<Props> = ({pathname}) => {
  const history = useHistory();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableHighlight
          underlayColor={colorsConstants.gray}
          style={styles.touchable}
          onPress={() => history.push(CATSLIST)}>
          <Icon
            name={'list'}
            type="Feather"
            style={pathname === CATSLIST ? styles.activeicon : styles.icon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colorsConstants.gray}
          style={styles.touchable}
          onPress={() =>
            history.push({
              pathname: ADD_CAT,
              state: {cat: false},
            })
          }>
          <Icon
            name={'plus-circle'}
            type="Feather"
            style={pathname === ADD_CAT ? styles.activeicon : styles.icon}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colorsConstants.gray}
          style={styles.touchable}
          onPress={() => history.push(MAP)}>
          <Icon
            name={'map'}
            type="Feather"
            style={pathname === MAP ? styles.activeicon : styles.icon}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderTopWidth: 0.5,
    borderColor: colorsConstants.gray,
    backgroundColor: colorsConstants.white,
  },
  touchable: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {color: colorsConstants.gray, fontSize: 30},
  activeicon: {color: colorsConstants.primary, fontSize: 30},
});

export default FooterItem;
