import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/login'
import Signup from '../components/signup'
import Fblogin from '../components/fblogin'
import SearchComponent from '../components/searchComponent'


const AppNavigator = createStackNavigator({
  fblogin: {
    screen: Fblogin,
    navigationOptions:{
      headerShown: false
    }
  },
  login: {
      screen: Login,
      navigationOptions:{
        headerShown: true
      }
    },
    signup: {
        screen: Signup,
        navigationOptions:{
            headerShown: true
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