import React, {useState, useEffect} from 'react';
import validator from 'validator';
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useHistory, useLocation} from 'react-router-native';

import {IState, ICat} from '../reducers/cats.reducer';
import {UPDATE_CAT, ADD_CAT} from '../actions/types/cats.actions.types';
import {useDispatch, useSelector} from 'react-redux';
import {breeds, agesList} from '../constants/datas.constants';
import colorsConstants from '../constants/colors.constants';
import Input from '../components/Input';

import Picker from '../components/Picker';

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

  const buttonStyle = {
    backgroundColor: ready ? colorsConstants.secondary : colorsConstants.gray,
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.view} behavior="padding" enabled>
        <Input
          onChangeText={e => setName(e)}
          defaultValue={cat.name || name}
          placeholder="Name"
          error={validator.isEmpty(name)}
        />
        <Input
          error={!validator.isURL(url)}
          onChangeText={e => setUrl(e)}
          defaultValue={cat.url}
          placeholder="Photo url"
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(breed)}
          list={breeds}
          selectedValue={breed}
          onValueChange={(e: string) => setBreed(e)}
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(gender)}
          selectedValue={gender}
          onValueChange={e => setGender(e)}
          list={['Male', 'Female']}
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(age)}
          selectedValue={age}
          onValueChange={e => setAge(e)}
          list={agesList}
        />
        <Input
          multiline
          numberOfLines={5}
          defaultValue={cat.description}
          onChangeText={e => setDescription(e)}
          placeholder="Description"
          error={validator.isEmpty(description)}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.button, buttonStyle]}
            disabled={!ready}
            onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
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
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Amatic-Bold',
    color: colorsConstants.white,
  },
  pickerPlaceholder: {color: colorsConstants.gray},
});

export default CatForm;
