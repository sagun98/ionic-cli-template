## Requirements 
- Xcode
- Android studio 
- node > v12 
- npm 
- react

## IONIC CLI 

- npm install -g @ionic/cli
- ionic start ionic-cli-app blank --type=react --capacitor
- ionic serve (To start the development server of the Web Project)

- Then update the `capacitor.config.json` and `package.json` with app details and dependencies

- Remove package-lock.json and `npm install`
- npm install @ionic/cli --save-dev --save-exact

### Fix Splash screen load time 

To make sure that we do not display the splash screen more than we have to !!! 
```
import {Plugins} from '@capacitor/core';` to `index.tsx`
const {SplashScreen} = Plugins;
ReactDOM.render(<App />, document.getElementById('root'));
SplashScreen.hide();
```

### Build web project 
- ionic build


#### IOS support 
- ionic capacitor add ios
- ionic capacitor open ios
#### Android support 
- ionic capacitor add android
- ionic capacitor open android

### Capacitor
- ionic capacitor --help
```
$ ionic capacitor run 
$ ionic capacitor run android
$ ionic capacitor run android -l --external (Choose this)
$ ionic capacitor run ios --livereload --external (Choose this)
$ ionic capacitor run ios --livereload-url=http://localhost:8100
```

### TS 
- Set `"strict": false` in `tsconfig.json` to disable the typescripts checks  

## More Project Templates

```
ionic start --list --type=react

Starters for @ionic/react (--type=react)

name         | description
--------------------------------------------------------------------------------------
blank        | A blank starter project
list         | A starting project with a list
my-first-app | An example application that builds a camera with gallery
sidemenu     | A starting project with a side menu with navigation in the content area
tabs         | A starting project with a simple tabbed interface
conference   | A kitchen-sink application that shows off all Ionic has to offer
```

To create the ionic app based off a template: 
```
ionic start tabs-app tabs --type=react
ionic start conference-app conference --type=react
```