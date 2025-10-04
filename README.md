# application-assistance-guidage
Product Owner: Gauthier HENNEBERT  
Scrum Master: Joshua LUCAS  
Tech Lead: Adrien STOOCK  
Dev:
  - Arthur FOULON
  - Camille BARTON
  - Clément MAZEAU
  - Eric LECOUFFE


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   
   # for svg in react native 
   npx expo install react-native-svg
   
   npm install --save-dev react-native-svg-transformer
   ```
   
### for more details you can see this website : https://github.com/kristerkari/react-native-svg-transformer


2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## Organization of the code 

The different pages can be found in the app folder. At the beginning of the app, we have : 

   ## folder "/app"

* _layout.tsx is for the general interface including the color themes and the layout of the page.

* modal.tsx is a subpage model.

* In the folder (tabs):
   * _layout.tsx is the interface for the menu homepage+ search bar+ explore
   * index.tsx is the homepage
   * explore.tsx is the search area
   * maps.tsx is the common space for the maps view

   ## folder "/assets"

It is the common place for all media. Basically contains icons, pictures and will contain the maps for every building.

   ## folder "/components"

This folder contains every classes for texts, links and tabs. You may create animations here like the 'hello-wave.tsx' example. 'themed-text.tsx' and 'themed-view.tsx' are used in the 'index.tsx' file for example.
      
   * subfolder "/components/ui"
   
   It contains specific components like 'collapsible.tsx' that acts like bullets in word or the '##" in this file. clicking them collapses the text they contain.

   ## folder '/constants'

This folder contains the constants of the app. These files determine fixed properties like the theme of the app. It defines the dark and light themes for example.

   ## folder 'hooks'

It lists the hooks we can use in the application.

   ## folder '/node_modules'

It contains all the modules installed by node. You shall not touch it.

   ## folder '/scripts'

It allows the developper to centralize any script that will modify the app. The script reset-project.js is lolcalized here and should NOT be used under any reason. It would delete the entire projet. 
It is the big red button so please don't be stupid.

# Add a simple page 

Go to the '/app' folder and create your page. Do not put it in the (tabs)subfolder as it would add it to the bottom menu.


# Add a tab to the menu at the bottom

To add a menu at the bottom, you should go to the components/ui/icon-symbol.tsx to configure the icon you want. 

To know what is available, you can go to node_modules/@expo/vector-icons/build/MaterialIcons.d.ts which contains a list of the said Icons.