import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useHistory} from 'react-router-native';

import {Header, Left, Icon, Body, Title, Right, Button} from 'native-base';
const catLogo = require('../../assets/img/cat_white128.png');

type Props = {
  pathname: string;
};

const HeaderItem: React.FC<Props> = ({pathname}) => {
  let titleName: string;
  switch (pathname) {
    case '/':
      titleName = 'CatsDex';
      break;
    case '/addCat':
      titleName = 'Add Me !';
      break;
    case '/updateCat':
      titleName = 'Update Me !';
  }
  const history = useHistory();
  return (
    <Header>
      <Left>
        {pathname !== '/' ? (
          <Button transparent onPress={() => history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        ) : (
          <Image source={catLogo} style={styles.image} />
        )}
      </Left>
      <Body>
        <Title style={styles.title}>{titleName}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({
  title: {fontFamily: 'Amatic-Bold', fontSize: 28},
  image: {width: 34, height: 34},
});

export default HeaderItem;
