import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/Navigation';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);
