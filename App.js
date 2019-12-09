import React from "react";
import { Image, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons"
import { Provider } from "react-redux";
import store from "./src/stores";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import VideoScreen from "./src/screens/VideoScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SettingScreen from "./src/screens/SettingScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import SearchingScreen from "./src/screens/SearchingScreen";
import BoardCreateScreen from "./src/screens/BoardCreateScreen";
import BoardEditScreen from "./src/screens/BoardEditScreen";


const defaultNavigationOptions = {
  headerTintColor: "#2685F9",
  // navigationOptions: ({navigation}) => ({
  //   headerStyle: {
  //     backgroundColor: "#2685F9",
  //   },
  // }),     
  header: ({navigate}) => ({
    // title: (
    //   <Image
    //     style={styles.app_logo}
    //     source={require("./assets/spiro.png")}/>
    // ),
    style: {backgroundColor: "#2685F9"},
  }),   
  tabBarOptions: {
    activeTintColor: "#ffffff",
    inactiveTintColor: "#000000",
    labelStyle: {
      fontSize: 14
    }
  }
};

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./assets/spiro.png') }
      />
    );
  }
}

const StackNavigator = createStackNavigator({
  Home: {
    // screen: HomeScreen
    screen: AboutScreen,
    navigationOptions: () => ({
      // title: `속보`,
      headerBackTitle: null,
      // headerStyle: {
      //   backgroundColor: "#2685F9",
      // },
      headerTitle: () => <LogoTitle />,
      headerBackground: (
        <Image style={{padding : 50}}
          style={StyleSheet.absoluteFill}
          source={require('./assets/spiro.png') }
        />
      ),
      headerTitleStyle: { color: '#fff' },
    }),
  },
  Video: {
    screen: VideoScreen,
    navigationOptions: () => ({
      title: `Play Movie`,
      headerBackTitle: null,
      // headerStyle: {
      //   backgroundColor: "#2685F9",
      // },      
      headerTitle: () => <LogoTitle />,
      headerBackground: (
        <Image style={{padding : 50}}
          style={StyleSheet.absoluteFill}
          source={require('./assets/spiro.png') }
        />
      ),      
    }),
  },  
  Detail: {
    screen: DetailScreen
  },
  Create: {
    screen: BoardCreateScreen
  },
  Edit: {
    screen: BoardEditScreen
  }
});

StackNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: "보험정보",
    tabBarIcon: <Ionicons name={"ios-play-circle"} size={20} color="#ffffff" />
  };
};

const SearchingStack = createStackNavigator(
  {
    Searching: {
      screen: SearchingScreen
    }
  },

  defaultNavigationOptions
);
SearchingStack.navigationOptions = {
  title: "비교검색",
  tabBarIcon: <Ionicons name={"ios-search"} size={20} color="#ffffff" />
};


const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: SettingScreen
    }
  },
  defaultNavigationOptions
);
SettingStack.navigationOptions = {
  title: "보험지식인",
  // tabBarIcon: <Ionicons name={"ios-find"} size={20} color="#ffffff" />
  tabBarIcon: <Icon name={"ios-help"} size={40} color="#ffffff" />

};

const CategoryStack = createStackNavigator(
  {
    Setting: {
      screen: CategoryScreen
    }
  },
  defaultNavigationOptions
);
CategoryStack.navigationOptions = {
  title: "카테고리",
  tabBarIcon: <Ionicons name={"ios-menu"} size={20} color="#ffffff" />
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      // screen: HomeScreen,
      screen: StackNavigator
    },
    Searching: {
      screen: SearchingStack
    },    
    Setting: {
      screen: SettingStack
    },
    Category: {
      screen: CategoryStack
    },  
  },
  // {
  //   defaultNavigationOptions
  // }
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: "#ffffff",
        inactiveTintColor: "#000000",
        showIcon: true,
        showLabel: true,
        style: { backgroundColor: '#2685F9' },
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    // top: 10,
    backgroundColor: 'transparent',
  },
});