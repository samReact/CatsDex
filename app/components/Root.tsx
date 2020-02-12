import React from 'react';
import {Container} from 'native-base';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Route, useLocation} from 'react-router-native';

import CatsList from './CatsList';
import CatForm from './CatForm';
import HeaderItem from '../utils/HeaderItem';
import FooterItem from '../utils/FooterItem';

const Root: React.FC = () => {
  const location = useLocation();
  const {pathname} = location;

  return (
    <Container>
      <HeaderItem pathname={pathname} />
      <SafeAreaView style={styles.content}>
        <Route exact path="/" component={CatsList} />
        <Route path="/addCat" component={CatForm} />
        <Route path="/updateCat" component={CatForm} />
      </SafeAreaView>
      <FooterItem pathname={pathname} />
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, padding: 10},
});

export default Root;
