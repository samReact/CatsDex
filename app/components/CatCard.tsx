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

const CatCard: React.FC = () => {
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>Roxy</Text>
          <Text note>Persan</Text>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text note>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quas
            fuga omnis tempora eligendi, cupiditate quam molestias id aperiam
            modi fugit consequatur consequuntur in nulla accusantium doloremque
            amet ipsum. Quaerat!
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
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
