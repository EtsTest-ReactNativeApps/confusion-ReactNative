import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from "./HomeComponent";
import ContactUs from "./ContactComponent";
import AboutUs from "./AboutComponent";
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { Icon } from 'react-native-elements';


const MenuNavigatorItems = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});
const MenuNavigator = createAppContainer(MenuNavigatorItems);

const HomeNavigatorItems = createStackNavigator({
    Home: { screen: Home }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});
const HomeNavigator = createAppContainer(HomeNavigatorItems);

const ContactUsNavigatorItems = createStackNavigator({
    ContactUs: { screen: ContactUs }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#512DA8"            
        }
    }
});
const ContactUsNavigator = createAppContainer(ContactUsNavigatorItems);

const AboutUsNavigatorItems = createStackNavigator({
    'About Us': { screen: AboutUs }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});
const AboutUsNavigator = createAppContainer(AboutUsNavigatorItems);


const MainNavigatorItems = createDrawerNavigator({
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
    },
    AboutUs: { 
        screen: AboutUsNavigator,
        navigationOptions: {
          title: 'About Us',
          drawerLabel: 'About Us'
        }, 
    },
    Menu: { 
        screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
    },
    ContactUs: { 
        screen: ContactUsNavigator,
        navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us'
        }, 
    },
}, {
  drawerBackgroundColor: '#D1C4E9'
});

const MainNavigator = createAppContainer(MainNavigatorItems);

class Main extends Component {

    render() {

        return ( 
            <View style={{flex:1, paddingTop:0 }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;