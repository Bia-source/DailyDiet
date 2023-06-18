import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator initialRouteName='home'>
            <Screen
               name="home"
               component={Home}
            />
        </Navigator>
    )
}