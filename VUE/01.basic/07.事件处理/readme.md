# v-on
-  用于监听DOM事件
# $event
- 有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法
# 事件修饰符
    .stop 阻止事件传播，但是本身可以触发
    .prevent 提交事件不再重载页面
    .capture 捕获模式，先从父级，然后再是内部触发，内部使用了stop无效，父级仍然会触发含税
    .self 只当在 event.target 是当前元素自身时触发处理函数
    .once 点击事件将只会触发一次 
    .passive 不等待回调直接触发，提升了性能
        passive与prevent不能一起使用，因为 .passive 已经向浏览器表明了你不想阻止事件的默认行为。如果你这么做了，则 .prevent 会被忽略，并且浏览器会抛出警告。
- 可以串联
    - .stop.once