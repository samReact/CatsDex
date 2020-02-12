import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useHistory} from 'react-router-native';
import {Icon, Button} from 'native-base';

import {IState} from '../reducers/cats.reducer';
import CatModal from './CatModal';
import {DELETE_CAT} from '../actions/types/cats.actions.types';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <SafeAreaView>
      <SwipeListView
        data={cats}
        renderItem={data => <CatModal cat={data.item} />}
        renderHiddenItem={data => (
          <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
              <Button
                onPress={() => {
                  history.push({
                    pathname: '/updateCat',
                    state: {cat: data.item},
                  });
                }}
                transparent>
                <Icon name={'edit'} type="Feather" style={styles.icon} />
              </Button>
            </View>

            <TouchableOpacity
              onPress={() => dispatch({payload: data.item, type: DELETE_CAT})}
              style={[styles.backRightBtn, styles.backRightBtnRight]}>
              <Icon type="FontAwesome" name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
        disableRightSwipe
        rightOpenValue={-150}
        keyExtractor={data => data.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'orange',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  icon: {color: '#fff', fontSize: 20},
});

export default CatsList;
