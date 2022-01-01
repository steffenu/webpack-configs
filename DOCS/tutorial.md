/*
 * @Author: Medy 
 * @Date: 2021-12-31 16:23:38 
 * @Last Modified by: Medy
 * @Last Modified time: 2021-12-31 18:08:55
 */

 
Alle Schritte von A-Z für eine Basic Webpack config.



## Scritt 1 

**Package.json eerstellen und Webpack installieren**

npm init -y
npm install webpack webpack-cli --save-dev

## Schritt 2

**Development server installieren**

npm install --save webpack-dev-server

## Schritt 2.1

** Development Server Konfigurieren + (live reloading)**

https://github.com/webpack/webpack-dev-server

  // webpack.config.js
  const path = require('path');

  module.exports = {
    //...
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },
  };


## Schritt 3

**Install tailwind as dev dependency**

  npm install --save-dev tailwindcss

## Schritt 3.1

**Tailwind config erstellen**


## Schritt 3.2

**Tailwind Config anpassen**

--> In den Dateien die wir im purge array angegeben haben
    werden alle nicht verwendeten styles entfernt (tailwind bibliothek wird kleiner).

  module.exports = {
    purge: ['./dist/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
    extend: {},
    },
    plugins: [],
  };






## Schritt 4


**install basic loaders**

  ```Basic` Setup`` with : Babel , style loader , css loader , postcss loader and postcss preset.

  npm install --save-dev babel-loader @babel/core @babel/preset-env style-loader css-loader postcss-loader postcss postcss-preset-


css loader erlaubt es das wir unsere css dateien in 
javscript einbinden. Diese werde dann im Head von unseren html eingebunden.
The css-loader interprets @import and url() like import/require() and will resolve them.

Eine Javscript datei könnte zb ein html element erstellen und hätte dann direkt das styling.
siehe bsp : https://webpack.js.org/loaders/style-loader/

  import customSquareStyles from "./custom-square.css";

## Schritt 5

**install autoprefixer**

  npm install -D tailwindcss postcss autoprefixer


## SChritt 6

**postcss.config.js erstellen und anpassen**

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

## Schritt 6


## Schritt 7


## Schritt 8





npx tailwindcss init 


https://webpack.js.org/loaders/css-loader/#assets

Assets
The following webpack.config.js can load CSS files, embed small PNG/JPG/GIF/SVG images as well as fonts as Data URLs and copy larger files to the output directory.

  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          // More information here https://webpack.js.org/guides/asset-modules/
          type: "asset",
        },
      ],
    },
  };
