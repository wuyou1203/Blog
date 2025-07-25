// 安装时缓存页面资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('demo-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './main.js',
        './styles.css',
        './photo/home.png',
        './photo/home%20(1).png',
        './photo/home%20(2).png',
        './photo/home%20(3).png',
        './photo/home%20(4).png',
        './photo/home%20(5).png',
        './photo/home%20(6).png',
        './photo/home%20(7).png'

      ]);
    })
  );
});

// 拦截请求，优先从缓存中读取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
