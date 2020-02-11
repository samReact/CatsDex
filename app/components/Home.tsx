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
} from 'native-base';
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
          <Title>CatsDex</Title>
        </Body>
        <Right />
      </Header>
      <Content style={{flex: 1}} padder>
        <CatsList />
      </Content>
      <Footer>
        <FooterTab>
          <CatUpdateModal />
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Home;
