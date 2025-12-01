// 安装时缓存页面资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('demo-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './main.js',
        './styles.css',
        './page/talks.html',
        './page/about.html',
        './page/archives.html',
        './page/photoalbums.html',
        './page/recommend.html',
        './page/talks.css',
        './page/about.css',
        './page/archives.css',
        './page/photoalbums.css',
        './page/recommend.css',
        './photo/home.png',
        './photo/home%20(1).png',
        './photo/home%20(2).png',
        './photo/home%20(3).png',
        './photo/home%20(4).png',
        './photo/home%20(5).png',
        './photo/home%20(6).png',
        './photo/home%20(7).png',
        './photo/head.png',
        './photo/ph%20(1).jpg',
        './photo/ph%20(3).jpg',
        './photo/ph%20(4).jpg',
        './photo/pho%20(1).jpg',
        './photo/pho%20(2).jpg',
        './photo/pho%20(3).jpg',
        './photo/pho%20(4).jpg',
        './photo/pho%20(5).jpg',
        './photo/pho%20(6).jpg'

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
