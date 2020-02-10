import React from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
} from 'native-base';
import {ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
};

const CatThumbnail: React.FC<Props> = ({cat}) => {
  const {name, url, breed} = cat;
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          source={{
            uri: url,
          }}
        />
      </Left>
      <Body>
        <Text>{name}</Text>
        <Text note numberOfLines={1}>
          {breed}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default CatThumbnail;
