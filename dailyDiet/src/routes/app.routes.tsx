import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { NewDiet } from '@screens/NewDiet';
import { Statics } from '@screens/Statics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='statics'
                component={Statics}
            />
            <Screen 
              name='newdiet'
              component={NewDiet}
            />
        </Navigator>
    )
}