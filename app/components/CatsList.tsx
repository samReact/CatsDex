import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'native-base';

import {IState, ICat} from '../reducers/cats.reducer';
import CatModal from './CatModal';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  return (
    <View>
      {cats.map((cat: ICat) => (
        <CatModal cat={cat} />
      ))}
    </View>
  );
};

export default CatsList;
