import React, {useState} from 'react';
import {Modal, Alert} from 'react-native';
import CatCard from './CatCard';
import CatThumbnail from './CatThumbnail';
import {Container, Content, View} from 'native-base';

const CatModal = ({cat}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Container style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <Content
            padder
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <CatCard cat={cat} visible={() => setModalVisible(false)} />
          </Content>
        </Container>
      </Modal>
      <CatThumbnail cat={cat} visible={() => setModalVisible(true)} />
    </>
  );
};

export default CatModal;
