import React from 'react';
import {StyleSheet} from 'react-native';
import {useHistory} from 'react-router-native';

import {Footer, Icon, FooterTab, Button} from 'native-base';

type Props = {
  pathname: string;
};

const FooterItem: React.FC<Props> = ({pathname}) => {
  const history = useHistory();

  return (
    <Footer>
      <FooterTab style={styles.footer}>
        <Button transparent onPress={() => history.push('/')}>
          <Icon
            name={'list'}
            type="Feather"
            style={pathname === '/' ? styles.activeicon : styles.icon}
          />
        </Button>
      </FooterTab>
      <FooterTab style={styles.footer}>
        <Button
          onPress={() =>
            history.push({
              pathname: '/addCat',
              state: {cat: false},
            })
          }
          transparent>
          <Icon
            name={'plus-circle'}
            type="Feather"
            style={pathname === '/addCat' ? styles.activeicon : styles.icon}
          />
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  content: {flex: 1, padding: 10},
  icon: {color: '#BBB', fontSize: 30},
  activeicon: {color: '#ff585f', fontSize: 30},
  footer: {backgroundColor: '#fff'},
});

export default FooterItem;