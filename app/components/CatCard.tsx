import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {ICat} from '../reducers/cats.reducer';
import {useDispatch} from 'react-redux';
import {DELETE_CAT} from '../actions/types/cats.actions.types';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatCard: React.FC<Props> = ({cat, visible}) => {
  const dispatch = useDispatch();
  return (
    <Card style={{flex: 1}}>
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
      <CardItem>
        <Left />
        <Right>
          <Button
            transparent
            onPress={() => dispatch({payload: cat, type: DELETE_CAT})}>
            <Icon
              type="FontAwesome"
              name="trash"
              style={{fontSize: 20, color: 'red'}}
            />
            <Text style={{color: 'red'}}>Delete</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {fontSize: 20, color: '#888'},
  image: {height: 200, width: null, flex: 1},
});

export default CatCard;
