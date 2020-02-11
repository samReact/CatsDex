import React from 'react';
import {useSelector} from 'react-redux';
import {View} from 'native-base';

import {IState, ICat} from '../reducers/cats.reducer';
import CatModal from './CatModal';

const CatsList: React.FC = () => {
  const cats = useSelector((state: IState) => state.cats);
  console.log(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Frane_du_clos_dame_Gilles.jpg/200px-Frane_du_clos_dame_Gilles.jpg',
  );
  return (
    <View>
      {cats.map((cat: ICat) => (
        <CatModal key={cat.id} cat={cat} />
      ))}
    </View>
  );
};

export default CatsList;
