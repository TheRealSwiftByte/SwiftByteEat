# SwiftByteEat

This is an application developed for CSIT314, a subject on Software Development Methodologies at the University of Wollongong.
SwiftBye Eat is the customer facing applicaiton in the SwiftByte platform and allows users to order food from a variety of restaurants and get it delivered to their household.

## Development
This application is written in Rect Native using the expo library, to test it on your device install the application expo go. 

To get started with development clone this repository and in the main directory run:

- npm ci
- npm start

Then scan the barcode that appears on the screen with your phones camera to test the current build.

### Expo Router

Routing in this application uses the [Expo Router](https://docs.expo.dev/router/introduction/). This provides a url based routing system similar to navigating the web. 

The app directory is where the pages of the application should live. Within the app directory file navigation routes are determined by file names. A file named Payments.tsx can be navigated to with the href of '/Payments'.

Directories can be used to group like pages together, for example if you wanted to group together the payments pages you could create a directory named *Payments*. Then create files as such Payments/index.tsx, Payments/AddCard.tsx, Payments/OrderSummary.tsx. These pages can be navigated to as such: '/Payments', '/Payments/AddCard', '/Payments/OrderSummary'.

The (tabs) directory is special in that any Page in there will appear at the bottom of the application as a navigatable tab.