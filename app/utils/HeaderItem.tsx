import React from 'react';
import {StyleSheet} from 'react-native';

import {Header, Left, Icon, Body, Title, Right} from 'native-base';

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
  return (
    <Header>
      <Left>
        <Icon name="cat" type="MaterialCommunityIcons" style={styles.icon} />
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
  icon: {color: '#fff', fontSize: 35},
});

export default HeaderItem;
