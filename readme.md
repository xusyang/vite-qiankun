## 说明

vite-plugin-qiankun 测试乾坤中集成 vite 开发的子应用

## 解决 vite-plugin-qiankun 在集成后，由于子应用的图片为相对地址，导致无法显示

## 实现原理

通过 transform 的钩子，对图片资源的相对路径改为绝对路径