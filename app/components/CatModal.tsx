import React, {useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';

import CatThumbnail from './CatThumbnail';
import CatCard from './CatCard';
import {ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
};

const CatModal: React.FC<Props> = ({cat}) => {
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
        <Container style={styles.container}>
          <Content padder contentContainerStyle={styles.content}>
            <CatCard cat={cat} visible={() => setModalVisible(false)} />
          </Content>
        </Container>
      </Modal>
      <CatThumbnail cat={cat} visible={() => setModalVisible(true)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,0.6)'},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default CatModal;
