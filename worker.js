addEventListener('fetch', event => {
  event.respondWith(proxy(event));
})

async function proxy(event) {
  let url = new URL(event.request.url);
  url.hostname = "disqus.com"; //change this
  event.request.url = url;
  let parameter = {
    headers: {
      'Host': 'disqus.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Cache-Control': 'max-age=0'
    }
  };

  if (event.request.headers.has("Referer")) {
    parameter.headers.Referer = event.request.headers.get("Referer");
  }

  if (event.request.headers.has("Origin")) {
    parameter.headers.Origin = event.request.headers.get("Origin");
  }

  let request = new Request(url, event.request);
  return fetch(request, parameter);
}