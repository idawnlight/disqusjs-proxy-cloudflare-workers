# disqusjs-proxy-cloudflare-workers

proxy disqus api via cloudflare workers

demo: [https://disqus.emiria.moe/api/](https://disqus.emiria.moe/api/) && [https://disqus.dawn.workers.dev/api/](https://disqus.dawn.workers.dev/api/)

（此项目基于 CVM 开发模式，显然我完全不会 JavaScript

# Cloudflare Workers 路由示例

`https://disqus.emiria.moe/api/*` -> `this worker`
