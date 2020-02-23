import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import CatThumbnail from './CatThumbnail';
import CatCard from './CatCard';
import {ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
  pos: number;
};

const CatModal: React.FC<Props> = ({cat, pos}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.container}>
          <View padder style={styles.content}>
            <CatCard cat={cat} visible={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <CatThumbnail cat={cat} pos={pos} visible={() => setModalVisible(true)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,0.6)', flex: 1},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});

export default CatModal;
