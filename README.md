English | [简体中文](README_zh-CN.md)

# proxy
HTTP request proxy, CORS cross-domain request, HTTPS support

### Function
- Support cross-domain requests (converting interfaces that do not support cross-domain requests), and directly initiate ajax, fetch
- Support HTTPS (Resolve that the remote data interface does not support HTTPS)

### Use
- Host/{URL}
- <https://proxy.netnr.eu.org/https://api.github.com>
- <https://proxy.netnr.eu.org/nginx.org/download/nginx-1.18.0.zip>

```js
// Copy to the console to run

var $url = "http://wthrcdn.etouch.cn/weather_mini?citykey=101040100";
fetch("https://proxy.netnr.eu.org/" + $url).then(x => x.json()).then(console.log)
```

### Run
```
yarn        # Installation package
npm start   # start

node app.js
PORT=8888 node app.js
```

### Source code
- Fork: <https://github.com/Rob--W/cors-anywhere>
- <https://github.com/netnr/proxy>
- <https://gitee.com/netnr/proxy>