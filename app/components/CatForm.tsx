import React, {useState, useEffect} from 'react';
import {
  Item,
  Form,
  Label,
  Input,
  Textarea,
  Button,
  Text,
  View,
} from 'native-base';
import validator from 'validator';
import {ScrollView, StyleSheet} from 'react-native';
import {useHistory, useLocation} from 'react-router-native';

import {IState} from '../reducers/cats.reducer';
import {UPDATE_CAT, ADD_CAT} from '../actions/types/cats.actions.types';
import {useDispatch, useSelector} from 'react-redux';

const CatForm: React.FC = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [ready, setReady] = useState(false);

  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const {cat} = location.state;

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
    history.push('/');
  };

  const textareaStyle = {
    borderColor: validator.isEmpty(description) ? 'red' : 'green',
  };

  return (
    <ScrollView>
      <Form>
        <Item
          stackedLabel
          success={!validator.isEmpty(name)}
          error={validator.isEmpty(name)}>
          <Label>Name</Label>
          <Input
            onChangeText={e => setName(e)}
            defaultValue={cat.name || name}
          />
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
          <Input onChangeText={e => setBreed(e)} defaultValue={cat.breed} />
        </Item>
      </Form>
      <Form style={styles.form}>
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
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          disabled={!ready}
          onPress={() => handleSubmit()}>
          <Text>Submit</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {marginTop: 20},
  buttonView: {marginTop: 30},
  button: {justifyContent: 'center'},
});

export default CatForm;
