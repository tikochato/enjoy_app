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
emulator @Pixel_2_API_R -logcat *:e
```

#### Install App
```
ionic cordova platform add android

ionic cordova prepare android
ionic cordova run android -l [--verbose]

adb logcat
```

### Pending Task
- [x] Remove Veg.
- [x] Currency Translate ($/Q)
- [ ] Language buttons
  - [ ] Set language with ubication 
  - [ ] Spanish language as default
  - [ ] Texts (ES/EN) instead of buttons
- [ ] Select City
  - [x] Default city 
  - [ ] Set city by user location
- [ ] Restaurants by city: Show only near restaurants
- [ ] Address Maps 
  - [x] Add button to get actual location
  - [ ] Add location search by text
- [x] Remove Plus taxes, only show total
- [x] Total Price
  - [x] Add delivery charge
  - [x] Sum price + fee
- [x] Delivery time in mins. 
- [x] Orders Status / Orders Status Detaills
  - [x] completed
  - [x] delivered
  - [x] rejected
  - [x] cancel
  - [x] created
  - [x] ongoing
  - [x] accepted
- [ ] Payments Types
  - [x] Cash on Delivery
  - [ ] Credit/Debit Cards
  - [ ] Stripe ?
  - [ ] Paypal ?
- [ ] ~$ Dish Per Person automatically calculated
- [ ] Tips for drivers
- [ ] Historial
  - [ ] Add 'order status' filter 
- [ ] Notifications
  - [ ] New incoming message
  - [ ] Order status changed
- [ ] Translations
  - [ ] Order tracking
    - [ ] Currency code
    - [ ] Order status
  - [ ] Login
    - [ ] Failed login message "login failed ..."
- [ ] Add "Bring change for ..."