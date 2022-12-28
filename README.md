English | [简体中文](README_zh-CN.md)

# proxy
HTTP request proxy, CORS cross-domain request, HTTPS support

### Function
- Support cross-domain requests (converting interfaces that do not support cross-domain requests), and directly initiate ajax, fetch
- Support HTTPS (Resolve that the remote data interface does not support HTTPS)

### Use
- {Host}/{URL}
- {Host}/api.github.com
- {Host}/http://nginx.org/download/nginx-1.22.1.zip

### Run
```
npm start   # start

# node app.js
# PORT=8888 node app.js
```

### Source code
- Fork: <https://github.com/Rob--W/cors-anywhere>
- <https://github.com/netnr/proxy>