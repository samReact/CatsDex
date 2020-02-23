import React from 'react';
import {StyleSheet} from 'react-native';
import {useHistory} from 'react-router-native';

import {Footer, Icon, FooterTab, Button} from 'native-base';
import colorsConstants from '../constants/colors.constants';
import {CATSLIST, ADD_CAT, MAP} from '../constants/routes.constants';

type Props = {
  pathname: string;
};

const FooterItem: React.FC<Props> = ({pathname}) => {
  const history = useHistory();

  return (
    <Footer>
      <FooterTab style={styles.footer}>
        <Button transparent onPress={() => history.push(CATSLIST)}>
          <Icon
            name={'list'}
            type="Feather"
            style={pathname === CATSLIST ? styles.activeicon : styles.icon}
          />
        </Button>
      </FooterTab>
      <FooterTab style={styles.footer}>
        <Button
          onPress={() =>
            history.push({
              pathname: ADD_CAT,
              state: {cat: false},
            })
          }
          transparent>
          <Icon
            name={'plus-circle'}
            type="Feather"
            style={pathname === ADD_CAT ? styles.activeicon : styles.icon}
          />
        </Button>
      </FooterTab>
      <FooterTab style={styles.footer}>
        <Button transparent onPress={() => history.push(MAP)}>
          <Icon
            name={'map'}
            type="Feather"
            style={pathname === MAP ? styles.activeicon : styles.icon}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  icon: {color: colorsConstants.gray, fontSize: 30},
  activeicon: {color: colorsConstants.primary, fontSize: 30},
  footer: {backgroundColor: colorsConstants.white},
});

export default FooterItem;
