import React, {useState, useEffect} from 'react';
import {
  Item,
  Form,
  Input,
  Textarea,
  Button,
  Text,
  View,
  Picker,
  Icon,
} from 'native-base';
import validator from 'validator';
import {ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useHistory, useLocation} from 'react-router-native';

import {IState, ICat} from '../reducers/cats.reducer';
import {UPDATE_CAT, ADD_CAT} from '../actions/types/cats.actions.types';
import {useDispatch, useSelector} from 'react-redux';
import {breeds, agesList} from '../constants/datas.constants';
import colorsConstants from '../constants/colors.constants';

interface IStateLocation {
  cat: ICat;
}

interface Ilocation {
  state: IStateLocation;
}
const CatForm: React.FC = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [url, setUrl] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [ready, setReady] = useState(false);

  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();
  const history = useHistory();
  const location: Ilocation = useLocation();

  const {cat} = location.state;

  useEffect(() => {
    if (cat) {
      setName(cat.name);
      setBreed(cat.breed);
      setUrl(cat.url);
      setDescription(cat.description);
      setGender(cat.gender);
      setAge(cat.age);
    }
  }, [cat]);

  useEffect(() => {
    if (
      !validator.isEmpty(name) &&
      validator.isURL(url) &&
      !validator.isEmpty(description) &&
      !validator.isEmpty(breed) &&
      !validator.isEmpty(gender) &&
      !validator.isEmpty(age)
    ) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [name, breed, url, description, gender, age]);

  const handleSubmit = () => {
    if (cat) {
      dispatch({
        payload: {id: cat.id, name, breed, url, gender, age, description},
        type: UPDATE_CAT,
      });
    } else {
      let id = counter + 1;
      dispatch({
        payload: {id, name, breed, url, gender, age, description},
        type: ADD_CAT,
      });
    }
    history.push('/');
  };

  const textareaStyle = [
    styles.marginTop,
    {borderColor: validator.isEmpty(description) ? 'red' : 'green'},
  ];

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.view} behavior="padding" enabled>
        <Form style={styles.marginTop}>
          <Item
            regular
            success={!validator.isEmpty(name)}
            error={validator.isEmpty(name)}>
            <Input
              onChangeText={e => setName(e)}
              defaultValue={cat.name || name}
              placeholder="Name"
            />
          </Item>
          <Item
            regular
            style={styles.marginTop}
            success={validator.isURL(url)}
            error={!validator.isURL(url)}>
            <Input
              onChangeText={e => setUrl(e)}
              defaultValue={cat.url}
              placeholder="Photo url"
            />
          </Item>
          <Item
            picker
            style={styles.marginTop}
            error={validator.isEmpty(breed)}
            success={!validator.isEmpty(breed)}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select cat's breed"
              placeholderStyle={styles.pickerPlaceholder}
              placeholderIconColor="#007aff"
              selectedValue={breed}
              onValueChange={e => setBreed(e)}>
              <Picker.Item label={'Breed'} value={''} />
              {breeds.map((e, i) => (
                <Picker.Item key={i} label={e} value={e} />
              ))}
            </Picker>
          </Item>
          <Item
            picker
            style={styles.marginTop}
            error={validator.isEmpty(gender)}
            success={!validator.isEmpty(gender)}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select cat's gender"
              placeholderStyle={styles.pickerPlaceholder}
              placeholderIconColor="#007aff"
              selectedValue={gender}
              onValueChange={e => setGender(e)}>
              <Picker.Item label={'Gender'} value={''} />
              <Picker.Item label={'Male'} value={'m'} />
              <Picker.Item label={'Female'} value={'f'} />
            </Picker>
          </Item>
          <Item
            picker
            style={styles.marginTop}
            error={validator.isEmpty(age)}
            success={!validator.isEmpty(age)}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select cat's age"
              placeholderStyle={styles.pickerPlaceholder}
              placeholderIconColor="#007aff"
              selectedValue={age}
              onValueChange={e => setAge(e)}>
              <Picker.Item label={'Age'} value={''} />
              {agesList.map((e, i) => (
                <Picker.Item key={i} label={e} value={e} />
              ))}
            </Picker>
          </Item>
          <Textarea
            rowSpan={4}
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
            <Text style={styles.buttonText}>Submit</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  marginTop: {marginTop: 20},
  buttonView: {marginTop: 20},
  button: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Amatic-Bold',
  },
  pickerPlaceholder: {color: colorsConstants.gray},
});

export default CatForm;
