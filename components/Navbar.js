import { SvgXml } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';
import { navHome, navCalendar, navPaw, navSetting } from '../utils/icons';


export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <SvgXml xml={navHome} width="100%" height="28" />
      <SvgXml xml={navCalendar} width="100%" height="28" />
      <SvgXml xml={navPaw} width="100%" height="28" />
      <SvgXml xml={navSetting} width="100%" height="28" />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    elevation: 16
  }
})