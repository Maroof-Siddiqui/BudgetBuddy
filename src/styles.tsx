import { StyleSheet } from 'react-native';
import Colors from './color';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.general.background,
    padding: 20,
  },
  header: {
    backgroundColor: Colors.header.background,
    color: Colors.header.text,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.buttons.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Add more styles as needed for different components/screens
});

export default Styles;
