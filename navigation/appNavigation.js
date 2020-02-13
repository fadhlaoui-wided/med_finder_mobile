import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/login'
import Signup from '../components/signup'
import SearchComponent from '../components/searchComponent'


const AppNavigator = createStackNavigator({
    login: {
      screen: Login,
      navigationOptions:{
        headerShown: false
      }
    },
    signup: {
        screen: Signup,
        navigationOptions:{
            headerShown: false
        }
      },
      search: {
        screen: SearchComponent,
        navigationOptions:{
            headerShown: false
        }
      },
    
  });
  
  export default createAppContainer(AppNavigator);