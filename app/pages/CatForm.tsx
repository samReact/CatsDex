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
import {breeds, agesList, genders} from '../constants/datas.constants';
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
  const [datas, setDatas] = useState<ICat>({
    id: 0,
    name: '',
    url: '',
    description: '',
    breed: '',
    gender: '',
    age: '',
  });
  const [ready, setReady] = useState<boolean>(false);

  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();
  const history = useHistory();
  const location: Ilocation = useLocation();

  const {cat} = location.state;
  const {id, name, url, description, breed, gender, age} = datas;

  useEffect(() => {
    if (cat) {
      setDatas(cat);
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
        payload: {id, name, breed, url, gender, age, description},
        type: UPDATE_CAT,
      });
    } else {
      let incrementedId = counter + 1;
      dispatch({
        payload: {
          id: incrementedId,
          name,
          breed,
          url,
          gender,
          age,
          description,
        },
        type: ADD_CAT,
      });
    }
    history.push('/');
  };

  const handleDataChange = (value: string, inputName: string) => {
    setDatas({...datas, [inputName]: value});
  };

  const buttonStyle = {
    backgroundColor: ready ? colorsConstants.secondary : colorsConstants.gray,
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.view} behavior="padding" enabled>
        <Input
          onChangeText={e => handleDataChange(e, 'name')}
          defaultValue={cat.name || name}
          placeholder="Name"
          error={validator.isEmpty(name)}
        />
        <Input
          error={!validator.isURL(url)}
          onChangeText={e => handleDataChange(e, 'url')}
          defaultValue={cat.url}
          placeholder="Photo url"
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(breed)}
          list={breeds}
          selectedValue={breed}
          onValueChange={e => handleDataChange(e, 'breed')}
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(gender)}
          selectedValue={gender}
          onValueChange={e => handleDataChange(e, 'gender')}
          list={genders}
        />
        <Picker
          mode="dropdown"
          error={validator.isEmpty(age)}
          selectedValue={age}
          onValueChange={e => handleDataChange(e, 'age')}
          list={agesList}
        />
        <Input
          multiline
          numberOfLines={5}
          defaultValue={cat.description}
          onChangeText={e => handleDataChange(e, 'description')}
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
