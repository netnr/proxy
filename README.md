# proxy
HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
https://proxy.netnr.com

### 参数
- url：HTTP请求的完整链接，必填
- cors：不添加跨域标识，传cors=0，不添加跨域，（已经支持跨域的站点会造成重复添加，所以配置一个参数）

### 示例
> 请求源代码

<https://proxy.netnr.com?url=https://www.google.com>


> fetch请求
```
fetch("https://proxy.netnr.com/?url=https://www.google.com")
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})
```

```
var url = "https://api.github.com";
//由于api.github.com已经支持跨域，需要配置参数cors=0，不添加跨域，不然会重复添加
fetch("https://proxy.netnr.com/?url=" + url + '&cors=0')
	.then(x => x.text())
	.then(function (data) {
		console.log(data);
	})
```

### 服务器环境
<https://www.netnr.com/mix/about>
