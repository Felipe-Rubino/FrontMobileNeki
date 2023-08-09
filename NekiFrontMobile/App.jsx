import RotasNavigation from './src/routes/rotas';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/Context/authContext';
function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
        <RotasNavigation />
    </NavigationContainer>
    </AuthProvider>
  );
}
export default App;
