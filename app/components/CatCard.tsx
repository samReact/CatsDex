import React from 'react';
import {Image} from 'react-native';

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
    <Card>
      <CardItem>
        <Body>
          <Text>{cat.name}</Text>
          <Text note>{cat.breed}</Text>
        </Body>
        <Right>
          <Button transparent onPress={visible}>
            <Icon
              type="FontAwesome"
              name="close"
              style={{fontSize: 20, color: '#888'}}
            />
          </Button>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: cat.url,
          }}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text note>{cat.description}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
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
        </Left>
        <Right>
          <Button transparent>
            <Icon
              type="FontAwesome"
              name="edit"
              style={{fontSize: 20, color: 'orange'}}
            />
            <Text style={{color: 'orange'}}>Edit</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default CatCard;
