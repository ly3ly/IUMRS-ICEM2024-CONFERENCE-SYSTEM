# Iumrs-icem2024 Conference System Backend

#### Env Config
```ini
MYSQL_DSN="user:password@tcp(ip:port)/dbname?charset=utf8&parseTime=True&loc=Local" # mysql连接串
REDIS_ADDR="127.0.0.1:6379" # redis地址
REDIS_PW="" # redis密码(可以不填)
REDIS_DB="" # redis数据库(可以不填)
SESSION_SECRET="youneedtoset" # session密钥，开发环境可以不用改
GIN_MODE="debug" # 服务状态，开发环境不用改
# 下面是OSS对象存储的参数
OSS_END_POINT="oss-cn-hongkong.aliyuncs.com" # OSS端点
OSS_ACCESS_KEY_ID="xxx"
OSS_ACCESS_KEY_SECRET="qqqq"
OSS_BUCKET="lalalal"

```
#### Run

```bash
go mod tidy
go run main.go
```



## Swaager
http://localhost:3000/swagger/index.html
