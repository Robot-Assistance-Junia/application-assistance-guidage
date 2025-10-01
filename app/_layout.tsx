import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Maps' }} />
        <Stack.Screen name="buildings/IC1" options={{ presentation: 'modal', title: 'IC1' }} />
        <Stack.Screen name="buildings/IC2" options={{ presentation: 'modal', title: 'IC2' }} />
        <Stack.Screen name="buildings/ALG" options={{ presentation: 'modal', title: 'ALG' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
