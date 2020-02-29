import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import CatThumbnail from '../components/Thumbnail';
import CatCard from '../components/Card';
import {ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
  pos: number;
};

const CatModal: React.FC<Props> = (props: Props) => {
  const {cat, pos} = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
          <View style={styles.content}>
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
