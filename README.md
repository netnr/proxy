# proxy
HTTP 请求代理，CORS 跨域请求，HTTPS 支持  
HTTP request proxy, CORS cross-domain request, HTTPS support

### 作用 Feature
支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch  
Support cross-domain requests (converting interfaces that do not support cross-domain requests), and directly initiate ajax, fetch

支持 HTTPS（解决远程数据接口不支持 HTTPS）  
Support HTTPS (Resolve that the remote data interface does not support HTTPS)

### 使用 Usage
- https://seep.eu.org/{URL}
- https://seep.eu.org/api.github.com
- https://seep.eu.org/http://nginx.org/download/nginx-1.22.1.zip

### 运行 Run
```
npm start   # 启动

# node app.js
# PORT=8888 node app.js
```

### Source
Fork：<https://github.com/Rob--W/cors-anywhere>  
<https://github.com/netnr/proxy>