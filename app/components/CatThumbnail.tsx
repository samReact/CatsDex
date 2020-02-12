import React from 'react';
import {Thumbnail, Text, View} from 'native-base';
import {ICat} from '../reducers/cats.reducer';
import {StyleSheet, TouchableHighlight} from 'react-native';

type Props = {
  cat: ICat;
  visible: () => void;
};

const CatThumbnail: React.FC<Props> = ({cat, visible}) => {
  const {name, url, breed} = cat;
  return (
    <TouchableHighlight
      onPress={visible}
      style={styles.touchable}
      underlayColor={'#DDD'}>
      <>
        <Thumbnail
          source={{
            uri: url,
          }}
        />
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
          <Text note numberOfLines={1}>
            {breed}
          </Text>
        </View>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#FFF',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  nameView: {paddingLeft: 20},
  name: {fontFamily: 'Amatic-Bold', fontSize: 24},
});

export default CatThumbnail;
