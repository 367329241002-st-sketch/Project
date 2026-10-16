import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopicStack from './TopicStack';
import BudgetScreen from '../screens/BudgetScreen';
import TierScreen from '../screens/TierScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MainStack">
      <Drawer.Screen 
        name="MainStack" 
        component={TopicStack} 
        options={{ title: '1. คลังสเปก & แก้ไขปัญหา' }} 
      />
      <Drawer.Screen 
        name="BudgetScreen" 
        component={BudgetScreen} 
        options={{ title: '2. คำนวณงบจัดสเปก' }} 
      />
      <Drawer.Screen 
        name="TierScreen" 
        component={TierScreen} 
        options={{ title: '3. ตารางความแรง (Tier List)' }} 
      />
    </Drawer.Navigator>
  );
}