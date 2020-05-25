## Content-Type: text/palin
  提交到后端 纯文本
  没有意义的

## application/x-www-form-urlencoded

## multipart/form-data

-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

123456789  // 文件内容

-----------------------------205579936434786223734260171678--

前面两种编码对二进制文件或者一些非  ASCII 字符处理很低效

后端处理文件上传：
- 分隔符分离
- 得到分隔之后的每一块，文件内容，fs.write()  保存文件了
- 完成