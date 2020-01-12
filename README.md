# proxy
> HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
- https://netnr-proxy.cloudno.de/{URL}

### 使用
- <https://netnr-proxy.cloudno.de/https://api.github.com>
- <https://netnr-proxy.cloudno.de/http://nginx.org/download/nginx-1.16.1.tar.gz>

> 拷贝到控制台运行
```js
var $url = "http://wthrcdn.etouch.cn/weather_mini?citykey=101040100";
fetch("https://netnr-proxy.cloudno.de/" + $url).then(x => x.text()).then(console.log)
```

### 安装
- `npm install`
- `node server`

### Fork
- <https://github.com/ccoenraets/cors-proxy>

### Source
- <https://github.com/netnr/proxy>
- <https://gitee.com/netnr/proxy>