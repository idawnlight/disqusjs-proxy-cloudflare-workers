addEventListener('fetch', event => {
  event.respondWith(proxy(event));
});

async function proxy(event) {
  const getReqHeader = (key) => event.request.headers.get(key);

  let url = new URL(event.request.url);
  url.hostname = "disqus.com";

  let parameter = {
    headers: {
      'Host': 'disqus.com',
      'User-Agent': getReqHeader("User-Agent"),
      'Accept': getReqHeader("Accept"),
      'Accept-Language': getReqHeader("Accept-Language"),
      'Accept-Encoding': getReqHeader("Accept-Encoding"),
      'Connection': 'keep-alive',
      'Cache-Control': 'max-age=0'
    }
  };

  if (event.request.headers.has("Referer")) {
    parameter.headers.Referer = getReqHeader("Referer");
  }

  if (event.request.headers.has("Origin")) {
    parameter.headers.Origin = getReqHeader("Origin");
  }

  return fetch(new Request(url, event.request), parameter);
}
