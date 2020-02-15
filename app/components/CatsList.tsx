import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useHistory} from 'react-router-native';
import {Icon} from 'native-base';

import {IState} from '../reducers/cats.reducer';
import CatModal from './CatModal';
import {DELETE_CAT} from '../actions/types/cats.actions.types';
import colorsConstants from '../constants/colors.constants';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <View style={styles.content}>
      <SwipeListView
        data={cats}
        renderItem={data => <CatModal cat={data.item} pos={data.index} />}
        renderHiddenItem={data => {
          return (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => {
                  history.push({
                    pathname: '/updateCat',
                    state: {cat: data.item},
                  });
                }}>
                <Icon name={'edit'} type="Feather" style={styles.icon} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => dispatch({payload: data.item, type: DELETE_CAT})}
                style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Icon type="FontAwesome" name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
        disableRightSwipe
        rightOpenValue={-150}
        keyExtractor={data => data.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {padding: 10, flex: 1},
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: colorsConstants.warning,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: colorsConstants.danger,
    right: 0,
  },
  icon: {color: colorsConstants.white, fontSize: 20},
});

export default CatsList;
