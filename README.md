# v-placeholder

v-placeholder is a very simple component that you can use if you want your images to have a placeholder image (of your choice) until the actual image is downloaded by the user.

## Installation

Install

```sh
npm install v-placeholder
# or
yarn add v-placeholder
```

### ES6 (main.js)

```js
import vPlaceholder from "v-placeholder";

createApp(App).use(vPlaceholder).mount("#app");
```

### CommonJS

```js
var Vue = require("vue");
var vPlaceholder = require("v-placeholder").default;

Vue.use(vPlaceholder);
```

### Example

```js
<v-placeholder
  src="https://i.imgur.com/BfZCBXY.jpeg"
  placeholder="https://i.imgur.com/kYHhXXf.png"
/>
```

Example app is included in /example

## Contributing

1. Fork this repository
2. Create your feature branch: `git checkout -b branch-name`
3. Commit your changes: `git commit -am 'commit-message-here'`
4. Push to the branch: `git push origin branch-name`
5. Submit a pull request

## Credits

Robert (@treboryx)

## License

MIT License

Copyright (c) 2022 treboryx.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
