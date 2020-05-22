# Enjoy App

### IOS
npm install -g ios-sim
ionic cordova platform add ios

ionic cordova prepare ios

open -a Simulator
ionic cordova run ios -l --external


### Android

brew tap homebrew/cask-versions

brew search java 
brew search jdk

brew cask info java
brew cask info adoptopenjdk

brew cask install java

ionic cordova platform add android

ionic cordova prepare android
ionic cordova run android -l [--verbose]
