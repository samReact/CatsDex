import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'react-native';
import {
  Container,
  Content,
  Button,
  Icon,
  Header,
  Left,
  Text,
  Right,
  Item,
  Form,
  Label,
  Input,
  Textarea,
} from 'native-base';

import validator from 'validator';
import {ADD_CAT, UPDATE_CAT} from '../actions/types/cats.actions.types';
import {IState, ICat} from '../reducers/cats.reducer';

type Props = {
  cat: ICat;
};

const CatUpdateModal: React.FC<Props> = ({cat}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [ready, setReady] = useState(false);

  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (cat) {
      dispatch({
        payload: {id: cat.id, name, breed, url, description},
        type: UPDATE_CAT,
      });
    } else {
      let id = counter + 1;
      dispatch({payload: {id, name, breed, url, description}, type: ADD_CAT});
    }
    setModalVisible(false);
  };

  useEffect(() => {
    if (cat) {
      setName(cat.name);
      setBreed(cat.breed);
      setUrl(cat.url);
      setDescription(cat.description);
    }
  }, [cat]);

  useEffect(() => {
    if (
      !validator.isEmpty(name) &&
      validator.isURL(url) &&
      !validator.isEmpty(description) &&
      !validator.isEmpty(breed)
    ) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [name, breed, url, description]);
  const textareaStyle = {
    borderColor: validator.isEmpty(description) ? 'red' : 'green',
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Container>
          <Header>
            <Left>
              <Button onPress={() => setModalVisible(false)} transparent>
                <Icon name="arrow-back" />
                <Text>back</Text>
              </Button>
            </Left>
            <Right>
              <Button
                onPress={() => handleSubmit()}
                transparent
                disabled={!ready}>
                <Text>{cat ? 'Edit' : 'Add'}</Text>
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Form>
              <Item
                stackedLabel
                success={!validator.isEmpty(name)}
                error={validator.isEmpty(name)}>
                <Label>Name</Label>
                <Input onChangeText={e => setName(e)} defaultValue={cat.name} />
              </Item>
              <Item
                stackedLabel
                success={validator.isURL(url)}
                error={!validator.isURL(url)}>
                <Label>Photo url</Label>
                <Input onChangeText={e => setUrl(e)} defaultValue={cat.url} />
              </Item>
              <Item
                stackedLabel
                success={!validator.isEmpty(breed)}
                error={validator.isEmpty(breed)}>
                <Label>Breed</Label>
                <Input
                  onChangeText={e => setBreed(e)}
                  defaultValue={cat.breed}
                />
              </Item>
            </Form>
            <Form style={{padding: 5, marginTop: 10}}>
              <Textarea
                rowSpan={5}
                defaultValue={cat.description}
                onChangeText={e => setDescription(e)}
                bordered
                underline={false}
                placeholder="Description"
                style={textareaStyle}
              />
            </Form>
          </Content>
        </Container>
      </Modal>
      <Button onPress={() => setModalVisible(true)} transparent>
        <Icon
          name={cat ? 'pencil-outline' : 'plus-circle-outline'}
          type="MaterialCommunityIcons"
          style={{color: 'orange', fontSize: 30}}
        />
      </Button>
    </>
  );
};

export default CatUpdateModal;
