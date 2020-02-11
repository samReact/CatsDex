import React, {useState} from 'react';
import {Modal, Alert} from 'react-native';
import CatCard from './CatCard';
import CatThumbnail from './CatThumbnail';
import {Container, Content} from 'native-base';

const CatModal = ({cat}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Container>
          <Content padder>
            <CatCard cat={cat} visible={() => setModalVisible(false)} />
          </Content>
        </Container>
      </Modal>
      <CatThumbnail cat={cat} visible={() => setModalVisible(true)} />
    </>
  );
};

export default CatModal;
