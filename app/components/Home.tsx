import React from 'react';
import {
  Container,
  Content,
  Header,
  Footer,
  Left,
  Icon,
  Body,
  Title,
  Right,
  FooterTab,
  Text,
} from 'native-base';

import {StyleSheet} from 'react-native';

import CatsList from './CatsList';
import CatUpdateModal from './CatUpdateModal';

const Home = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Icon name="cat" type="MaterialCommunityIcons" />
        </Left>
        <Body>
          <Title style={styles.title}>CatsDex</Title>
        </Body>
        <Right />
      </Header>
      <Content style={{flex: 1}} padder>
        <CatsList />
      </Content>
      <Footer>
        <FooterTab>
          <CatUpdateModal cat={false} />
        </FooterTab>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {fontFamily: 'Amatic-Bold', fontSize: 28},
});

export default Home;
