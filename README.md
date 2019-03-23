# proxy
> HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
- https://proxy.zme.ink/$url

### 使用
- <https://proxy.zme.ink/https://api.github.com>
- <https://proxy.zme.ink/https://www.google.com>
- <https://proxy.zme.ink/http://nginx.org/download/nginx-1.14.2.tar.gz>

> 拷贝到控制台运行

```
fetch("https://proxy.zme.ink/https://www.google.com")
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})
```
----------
```
var $url = "http://wthrcdn.etouch.cn/weather_mini?citykey=101040100";
fetch("https://proxy.zme.ink/" + $url)
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})
```

### 安装
- `npm install`
- `node server.js`

### Fork
- <https://github.com/Rob--W/cors-anywhere>

### Source
- <https://github.com/netnr/proxy>
- <https://gitee.com/netnr/proxy>