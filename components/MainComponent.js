import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from "./HomeComponent";
import ContactUs from "./ContactComponent";
import AboutUs from "./AboutComponent";
import { View ,Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createAppContainer , SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})

const MenuNavigatorItems = createStackNavigator({
    Menu: { screen: Menu ,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />          
        })  
    },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    })
});
const MenuNavigator = createAppContainer(MenuNavigatorItems);

const HomeNavigatorItems = createStackNavigator({
    Home: { screen: Home }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />  
    })
});
const HomeNavigator = createAppContainer(HomeNavigatorItems);

const ContactUsNavigatorItems = createStackNavigator({
    ContactUs: { screen: ContactUs }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#512DA8"            
        },
        headerLeft: <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />  
    })
});
const ContactUsNavigator = createAppContainer(ContactUsNavigatorItems);

const AboutUsNavigatorItems = createStackNavigator({
    'About Us': { screen: AboutUs }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#512DA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />  
    })
});
const AboutUsNavigator = createAppContainer(AboutUsNavigatorItems);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigatorItems = createDrawerNavigator({
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                name='home'
                type='font-awesome'            
                size={24}
                color={tintColor}
                />
            ),
        }
    },
    AboutUs: { 
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                name='info-circle'
                type='font-awesome'            
                size={24}
                color={tintColor}
                />
            ),
        }, 
    },
    Menu: { 
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                name='list'
                type='font-awesome'            
                size={24}
                color={tintColor}
                />
            ),
        }, 
    },
    ContactUs: { 
        screen: ContactUsNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                name='address-card'
                type='font-awesome'            
                size={22}
                color={tintColor}
                />
            ),
        }, 
    },
}, {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
});

const MainNavigator = createAppContainer(MainNavigatorItems);

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        return ( 
            <View style={{flex:1, paddingTop:0 }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);