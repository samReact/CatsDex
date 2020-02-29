import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import {useHistory} from 'react-router-native';

import Icon from './Icon';
import colorsConstants from '../constants/colors.constants';
import {CATSLIST, ADD_CAT, MAP} from '../constants/routes.constants';

type Props = {
  pathname: string;
};

const FooterItem: React.FC<Props> = (props: Props) => {
  const {pathname} = props;
  const history = useHistory();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableHighlight
          underlayColor={colorsConstants.gray}
          style={styles.touchable}
          onPress={() => history.push(CATSLIST)}>
          <Icon
            name="list"
            color={
              pathname === CATSLIST
                ? colorsConstants.primary
                : colorsConstants.gray
            }
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
            name="plus"
            color={
              pathname === ADD_CAT
                ? colorsConstants.primary
                : colorsConstants.gray
            }
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colorsConstants.gray}
          style={styles.touchable}
          onPress={() => history.push(MAP)}>
          <Icon
            name="map"
            color={
              pathname === MAP ? colorsConstants.primary : colorsConstants.gray
            }
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
});

export default FooterItem;
