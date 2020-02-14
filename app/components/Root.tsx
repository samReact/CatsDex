import React, {useEffect} from 'react';
import {Container, View} from 'native-base';
import {StyleSheet, SafeAreaView, StatusBar, BackHandler} from 'react-native';
import {Route, useLocation, useHistory} from 'react-router-native';

import CatsList from './CatsList';
import CatForm from './CatForm';
import HeaderItem from '../utils/HeaderItem';
import FooterItem from '../utils/FooterItem';
import colorsConstants from '../constants/colors.constants';
import MapComponent from './MapComponent';

const Root: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const {pathname} = location;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleBackPress = () => {
    if (pathname !== '/') {
      history.goBack();
      return true;
    }
  };

  return (
    <Container>
      <StatusBar
        backgroundColor={colorsConstants.primary}
        barStyle="light-content"
      />
      <HeaderItem pathname={pathname} />
      <SafeAreaView style={styles.content}>
        <Route path="/map" component={MapComponent} />
        <View style={styles.view}>
          <Route exact path="/" component={CatsList} />
          <Route path="/addCat" component={CatForm} />
          <Route path="/updateCat" component={CatForm} />
        </View>
      </SafeAreaView>
      <FooterItem pathname={pathname} />
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1},
  view: {padding: 10},
});

export default Root;
