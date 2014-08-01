# easteregg

js-library providing js easter eggs even on Christmas

## Getting Started

We all love easter. Probably because of hunting eggs.
Therefore one must hide the eggs first.
As hiding eggs often feels annoying, this lib will hide them for you.

### In the browser
To not spoil your fun, download the [production version][min].

[min]: https://raw.github.com/xy124/easteregg.js/master/dist/easteregg.min.js

In your web page:

```html
<script src="dist/easteregg.min.js"></script>
```

If you found an addled egg, simply deactivate it by specifying:
```javascript
easteregg.disable('up up down down left right left right a b');
```
alternatively, hunt down its id e.g. on the console log:
```javascript
easteregg.disable('addledEgg');
```

## Help hiding eggs!
Hide your own eggs in
[https://github.com/xy124/easteregg.js/blob/master/easteregg.js][max]

### Warning!
Clicking on [https://github.com/xy124/easteregg.js/blob/master/easteregg.js][max]
might cost you a large amount of searching fun ;) .

[max]: https://github.com/xy124/easteregg.js/blob/master/easteregg.js

### Dependencies

 * [npm][npm]
 * [cheet.js][cheet.js]

[npm]: https://www.npmjs.org/
[cheet.js]: http://namuol.github.io/cheet.js/

To get the toolchain running do the following:
```
git clone https://github.com/xy124/easteregg.js.git
cd easteregg.js
```
now we need cheet.js. Therefore either use bower:
```
bower install cheet.js
```
or get it manually:
```
mkdir -p bower_components/cheet.js/
cd bower_components/cheet.js
wget https://raw.githubusercontent.com/namuol/cheet.js/master/cheet.min.js
cd ../..
```

*optionally* install `grunt`-dependencies for easy deploying
```
npm install
```
If you have `grunt-cli` installed (`sudo npm -g install grunt-cli`) you can now
deploy with
```
grunt
```

## License
[MIT][MIT]

[MIT]:http://opensource.org/licenses/MIT
