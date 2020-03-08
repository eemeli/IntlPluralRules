Examples for `intl-pluralrules`. To build these:

```sh
git clone https://github.com/eemeli/intl-pluralrules.git

cd intl-pluralrules
npm install   # The examples use make-plural from the root
npm run build # The examples use ../.. paths

cd examples
npm install
npm run build

open index.html

gzip -k dist/*js
stat -f "%z %N" dist/*gz
  # 1659 dist/factory.js.gz
  # 5286 dist/polyfill.js.gz
  # 5185 dist/ponyfill.js.gz
```