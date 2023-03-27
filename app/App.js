import { StyleSheet, Text, View } from 'react-native';

import MainContainer from './components/MainContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
