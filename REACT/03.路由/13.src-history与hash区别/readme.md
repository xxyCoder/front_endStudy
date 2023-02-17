# BrowseRouter 与 HashRouter 区别
1. 底层不同
    - 前者使用H5的history API，后者使用URL哈希值
2. path表现形式不同
    - 前者路径没有#，后者路径有#
3. 对state参数影响
    - 前者没有任何影响，因为state保存在history中，后者会丢失
4. 后者可以解决路径错误相关问题