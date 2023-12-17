### demo 数据库

一款基于 localStorage 设计的 demo 数据库。
具有完善的 api, 可模拟真实的数据库操作场景。
使用非常简单, `initDemoDataBase()` + `DemoAPI.XXX`

### 安装方法

```
npm i demo-database
```

### 导出与使用方法

- `initDemoDataBase` 初始化数据
- `DemoAPI` 包含所有的 api 对象

```
import { initDemoDataBase, DemoAPI } from "demo-database";
```

### 已有的 demo 数据

- 用户列表: userinfos
- 数据字典: 性别 gender, 擅长 skill, 爱好 hobby, 省市区 city, 民族 nation

#### ！！！欢迎一起丰富本 demo 数据库！！！
