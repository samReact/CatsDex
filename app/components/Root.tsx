import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {StyleSheet, SafeAreaView, StatusBar, BackHandler} from 'react-native';
import {Route, useLocation, useHistory} from 'react-router-native';

import CatsList from './CatsList';
import CatForm from './CatForm';
import HeaderItem from '../utils/HeaderItem';
import FooterItem from '../utils/FooterItem';
import colorsConstants from '../constants/colors.constants';
import MapComponent from './MapComponent';
import {
  CATSLIST,
  MAP,
  UPDATE_CAT,
  ADD_CAT,
} from '../constants/routes.constants';

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
    if (pathname !== CATSLIST) {
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
        <Route exact path={CATSLIST} component={CatsList} />
        <Route path={MAP} component={MapComponent} />
        <Route path={ADD_CAT} component={CatForm} />
        <Route path={UPDATE_CAT} component={CatForm} />
        <FooterItem pathname={pathname} />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, justifyContent: 'space-between'},
});

export default Root;
