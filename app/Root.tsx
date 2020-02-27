import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, BackHandler} from 'react-native';
import {Route, useLocation, useHistory} from 'react-router-native';

import CatsList from './pages/CatsList';
import CatForm from './pages/CatForm';
import HeaderItem from './components/Header';
import FooterItem from './components/Footer';
import colorsConstants from './constants/colors.constants';
import Map from './pages/Map';
import {CATSLIST, MAP, UPDATE_CAT, ADD_CAT} from './constants/routes.constants';

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
    <>
      <StatusBar
        backgroundColor={colorsConstants.primary}
        barStyle="light-content"
      />
      <SafeAreaView style={styles.content}>
        <HeaderItem pathname={pathname} />
        <Route exact path={CATSLIST} component={CatsList} />
        <Route path={MAP} component={Map} />
        <Route path={ADD_CAT} component={CatForm} />
        <Route path={UPDATE_CAT} component={CatForm} />
        <FooterItem pathname={pathname} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, justifyContent: 'space-between'},
});

export default Root;
