# proxy
HTTP请求代理，CORS跨域请求，HTTPS支持

### 作用
- 支持跨域请求（转换不支持跨域请求的接口），可直接发起 ajax、fetch
- 支持HTTPS（解决远程数据接口不支持HTTPS）

### 接口
https://proxy.netnr.com?url=

### 示例
> 请求源代码

<https://proxy.netnr.com?url=https://www.google.com>


> fetch请求jquery脚本

```
fetch("https://proxy.netnr.com/?url=https://api.github.com")
    .then(x => x.text())
    .then(function (data) {
        console.log(data);
    })
```

### 服务器环境
<https://www.netnr.com/mix/about>
