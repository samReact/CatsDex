import React from 'react';
import {Left, Thumbnail, Body, Text, Right, Button} from 'native-base';
import {ICat} from '../reducers/cats.reducer';
import {TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatThumbnail: React.FC<Props> = ({cat, visible}) => {
  const {name, url, breed} = cat;
  return (
    <TouchableOpacity onPress={visible} style={styles.touchable}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {flex: 1, flexDirection: 'row', padding: 5},
});

export default CatThumbnail;
