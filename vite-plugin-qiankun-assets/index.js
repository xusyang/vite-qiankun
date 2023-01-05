export default (options) => {
  let __config = {}
  let __server = {}
  return {
    name: 'vite-plugin-qiankun-assets',
    configResolved(resolvedConfig) {
      __config = resolvedConfig
    },
    configureServer(server) {
      __server = server
    },
    async transform(code, id) {
      if (/\.(svg|png|jpg|webp)/.test(code)) {
        code = code.replace(/"(.*).(svg|png|jpg|webp)"/g, `"${__server.resolvedUrls.local[0]}$1.$2"`)
        return code
      } else {
        return code
      }
    },
  }
}
