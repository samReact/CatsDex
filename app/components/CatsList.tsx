import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {IState, ICat} from '../reducers/cats.reducer';
import CatModal from './CatModal';
import {Icon} from 'native-base';
import {DELETE_CAT} from '../actions/types/cats.actions.types';
import CatUpdateModal from './CatUpdateModal';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      {/* {cats.map((cat: ICat) => (  
        <CatModal key={cat.id} cat={cat} />
      ))} */}

      <SwipeListView
        data={cats}
        renderItem={data => <CatModal cat={data.item} />}
        renderHiddenItem={data => (
          <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
              <CatUpdateModal cat={data.item} />
            </View>
            <TouchableOpacity
              onPress={() => dispatch({payload: data.item, type: DELETE_CAT})}
              style={[styles.backRightBtn, styles.backRightBtnRight]}>
              <Icon
                type="FontAwesome"
                name="trash"
                style={{fontSize: 20, color: '#FFF'}}
              />
            </TouchableOpacity>
          </View>
        )}
        disableRightSwipe
        rightOpenValue={-150}
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
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
});

export default CatsList;
