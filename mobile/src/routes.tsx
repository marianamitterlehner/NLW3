import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';
import OrphanagesData from './pages/CreateOrphanages/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';

import Header from './components/Header';

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false, cardStyle:{ backgroundColor:'#f2f3f5'} }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                />
                <Screen 
                    name="OrphanagesDetails" 
                    component={OrphanagesDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header title={'Orphanage'} />
                    }}
                />
                <Screen 
                    name="OrphanagesData" 
                    component={OrphanagesData}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                />
            </Navigator>
        </NavigationContainer>
    )
}