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
import {ADD_CAT} from '../actions/types/cats.actions.types';
import {IState} from '../reducers/cats.reducer';

const CatUpdateModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [breed, setBreed] = useState('');
  const [breedError, setBreedError] = useState(false);
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState(false);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [ready, setReady] = useState(false);

  const counter = useSelector((state: IState) => state.counter);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let id = counter + 1;
    dispatch({payload: {id, name, breed, url, description}, type: ADD_CAT});
    setModalVisible(false);
  };

  const handleReset = () => {
    setName('');
    setBreed('');
    setDescription('');
    setUrl('');
  };

  useEffect(() => {
    setNameError(validator.isEmpty(name));
    setUrlError(!validator.isURL(url));
    setBreedError(validator.isEmpty(breed));
    setDescriptionError(validator.isEmpty(description));
  }, [name, url, breed, description]);

  useEffect(() => {
    if (!nameError && !urlError && !descriptionError && !breedError) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [nameError, urlError, breedError, descriptionError]);
  const textareaStyle = {borderColor: descriptionError ? 'red' : 'green'};

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onShow={() => handleReset()}
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
                <Text>Add</Text>
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Form>
              <Item floatingLabel success={!nameError} error={nameError}>
                <Label>Name</Label>
                <Input value={name} onChangeText={e => setName(e)} />
              </Item>
              <Item floatingLabel success={!urlError} error={urlError}>
                <Label>Photo url</Label>
                <Input value={url} onChangeText={e => setUrl(e)} />
              </Item>
              <Item floatingLabel success={!breedError} error={breedError}>
                <Label>Breed</Label>
                <Input value={breed} onChangeText={e => setBreed(e)} />
              </Item>
            </Form>
            <Form style={{padding: 5, marginTop: 10}}>
              <Textarea
                rowSpan={5}
                value={description}
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
      <Button onPress={() => setModalVisible(true)}>
        <Icon name="add" />
      </Button>
    </>
  );
};

export default CatUpdateModal;
