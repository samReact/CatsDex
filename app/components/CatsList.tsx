import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'native-base';

import {IState, ICat} from '../reducers/cats.reducer';
import CatThumbnail from './CatThumbnail';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  return (
    <View>
      {cats.map((cat: ICat) => (
        <CatThumbnail cat={cat} />
      ))}
    </View>
  );
};

export default CatsList;
