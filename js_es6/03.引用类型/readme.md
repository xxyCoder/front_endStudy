# 引用类型
## 基本引用类型
## 日期
    - date 可以传入参数，必须是毫秒，且是1970年1月1日午夜开始计算的毫秒
    - date.parse() 接受一个日期字符串参数，将其转变为毫秒数
        月/日/年
        月 日, 年
        周几 月名 日 年 时:分:秒 时区
    - date.UTC() 返回毫秒数
        年 零起点月 日 时 分 毫秒
        只有年 月必须，日默认为1，其余默认为0
    - 继承方法
        - toLocaleString 返回与浏览器运行的本地环境一致的日期和时间
        - toString 返回带时区信息的日期和时间
    - 格式化方法
        - toDateString
        - toTimeString
        - toLocaleDateString
        - toLocaleTimeString
        - toUTCString