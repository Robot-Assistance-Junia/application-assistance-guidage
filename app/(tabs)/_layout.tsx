import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Accueil</Label>
        <Icon
          src={require('../../assets/house.svg')}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon 
        src={require('../../assets/search.svg')}
        />
        <Label>Rechercher</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
