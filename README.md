# proxy
> HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
- https://proxy.zme.ink/$url

### 示例
> 请求接口

- <https://proxy.zme.ink/https://www.google.com>
- <https://proxy.zme.ink/https://api.github.com>

> fetch请求，拷贝到控制台运行

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

### 服务器环境
- 搬瓦工 CN2 1G带宽，详细信息：<https://www.netnr.com/mix/about>

### Fork
- <https://github.com/Rob--W/cors-anywhere>

### Source
- <https://github.com/netnr/proxy>
- <https://gitee.com/netnr/proxy>