export default (options) => {
  console.log(options)
  return {
    name: 'vite-plugin-qiankun-assets',
    async transform(code, id) {
      if (/\.(svg|png|jpg|webp)/.test(code)) {
        console.log('包含静态资源')
        code = code.replace(/src: "(.*).(svg|png|jpg|webp)"/g, `src: "http://127.0.0.1:5174/$1.$2"`)
        return code
      } else {
        return code
      }
    },
  }
}
