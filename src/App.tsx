import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Status from 'pages/status';
import Calls from 'pages/calls';
import Camera from 'pages/camera';
import Chats from 'pages/chats';
import Settings from 'pages/settings';
import { colors } from 'utils/colors';

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: colors.secondary,
      }}>
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Status',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Ligações',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: 'Câmera',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Conversas',
          tabBarIcon: ({ color }) => (
            <Icon name="comments" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color }) => (
            <Icon name="cogs" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
}
