import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useHistory} from 'react-router-native';

import {Header, Left, Icon, Body, Title, Right, Button} from 'native-base';
import {
  CATSLIST,
  ADD_CAT,
  UPDATE_CAT,
  MAP,
} from '../constants/routes.constants';
const catLogo = require('../assets/img/cat_white128.png');

type Props = {
  pathname: string;
};
let titleName: string;

const HeaderItem: React.FC<Props> = ({pathname}) => {
  switch (pathname) {
    case CATSLIST:
      titleName = 'CatsDex';
      break;
    case ADD_CAT:
      titleName = 'Add Me !';
      break;
    case UPDATE_CAT:
      titleName = 'Update Me !';
      break;
    case MAP:
      titleName = 'Localize Me !';
  }
  const history = useHistory();
  return (
    <Header>
      <Left>
        {pathname !== CATSLIST ? (
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
