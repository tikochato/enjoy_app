# Enjoy App

### IOS
npm install -g ios-sim
ionic cordova platform add ios

ionic cordova prepare ios

open -a Simulator
ionic cordova run ios -l --external


### Android

#### Java version
```
brew tap homebrew/cask-versions

brew search java 
brew search jdk

brew cask info java
brew cask info adoptopenjdk

brew cask install java
```

#### Launch emulator
```
emulator -list-avds
emulator -avd Pixel_2_API_R
```

#### Install App
```
ionic cordova platform add android

ionic cordova prepare android
ionic cordova run android -l [--verbose]
```

### Pending Task
- [ ] Remove Veg.
- [x] Currency Translate ($/Q)
- [ ] Language buttons
  - [ ] Set language with ubication 
  - [ ] Spanish language as default
  - [ ] Texts (ES/EN) instead of buttons
- [ ] Select City: Set city by user location
- [ ] Restaurants by city: Show only near restaurants
- [ ] Address Maps 
  - [ ] Add button to get actual location
  - [ ] Add search of address by text
- [x] Remove Plus taxes, only show total