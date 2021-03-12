import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial214083Navigator from '../features/Tutorial214083/navigator';
import NotificationList214055Navigator from '../features/NotificationList214055/navigator';
import Settings214054Navigator from '../features/Settings214054/navigator';
import Settings214046Navigator from '../features/Settings214046/navigator';
import UserProfile214044Navigator from '../features/UserProfile214044/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial214083: { screen: Tutorial214083Navigator },
NotificationList214055: { screen: NotificationList214055Navigator },
Settings214054: { screen: Settings214054Navigator },
Settings214046: { screen: Settings214046Navigator },
UserProfile214044: { screen: UserProfile214044Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
