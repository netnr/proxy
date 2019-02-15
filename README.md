# proxy
HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
https://proxy.netnr.com/$url

### 示例
> 请求接口

- <https://proxy.netnr.com/https://www.google.com>
- <https://proxy.netnr.com/https://api.github.com>

> fetch请求

```
fetch("https://proxy.netnr.com/https://www.google.com")
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})

fetch("https://proxy.netnr.com/http://wthrcdn.etouch.cn/weather_mini?citykey=101040100")
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})
```

### 服务器环境
搬瓦工 CN2 1G带宽，详细信息：<https://www.netnr.com/mix/about>

### Fork
<https://github.com/Rob--W/cors-anywhere>