import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (

    // <NativeTabs>

    //   <NativeTabs.Trigger name="index">
    //     <Label>Accueil</Label>
    //     <Icon
    //       src={require('../../assets/icons/house.png')}
    //     />
    //   </NativeTabs.Trigger>

    //   <NativeTabs.Trigger name="explore">
    //     <Icon 
    //     src={require('../../assets/icons/search.png')}
    //     />
    //     <Label>Rechercher</Label>
    //   </NativeTabs.Trigger>

    //   <NativeTabs.Trigger name="buildings/IC1" >
    //     <Label>IC1</Label>
    //   </NativeTabs.Trigger>

    //   <NativeTabs.Trigger name="buildings/IC2">
    //     <Label>IC2</Label>
    //   </NativeTabs.Trigger>

    //   <NativeTabs.Trigger name="buildings/ALG">
    //     <Label>ALG</Label>
    //   </NativeTabs.Trigger>

    // </NativeTabs>

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown:false,
        tabBarButton: HapticTab,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color }) => <IconSymbol size={36} name="house.fill" color={color} />,
          }} />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Rechercher',
            tabBarIcon: ({ color }) => <IconSymbol size={36} name="paperplane.fill" color={color} />,
          }} />
          <Tabs.Screen
            name="buildings/IC1"
            options={{
              title:"IC1",
            href: null,
            }}
          />
          <Tabs.Screen
            name="buildings/IC2"
            options={{
              title:"IC2",
            href: null,
            }}
          />
          <Tabs.Screen
            name="buildings/ALG"
            options={{
              title:"ALG",
            href: null,
            }}
          />
      </Tabs>
  );
}
