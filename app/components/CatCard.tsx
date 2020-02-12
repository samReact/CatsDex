import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Card, CardItem, Text, Button, Icon, Body, Right} from 'native-base';
import {ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatCard: React.FC<Props> = ({cat, visible}) => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Body>
          <Text>{cat.name}</Text>
          <Text note>{cat.breed}</Text>
        </Body>
        <Right>
          <Button transparent onPress={visible}>
            <Icon type="FontAwesome" name="close" style={styles.button} />
          </Button>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: cat.url,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text note>{cat.description}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {fontSize: 20, color: '#888'},
  image: {height: 200, width: null, flex: 1},
  card: {flex: 1},
});

export default CatCard;
