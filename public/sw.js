self.addEventListener('install', function(event){
    console.log("Installing sw..",event);
    event.waitUntil(
        caches.open('static')
        .then(function(cache){
            console.log("preCaching....." );
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/src/js.feed.js',
                '/src/js/material.min.js',
                '/src/css/app.css',
                'src/css/feed.css'
            ])
        })
    )
});

self.addEventListener('active',function(event){
    console.log('acivating sw...',event);
    return self.clients.claim();
})
self.addEventListener('fetch',function(event){
    console.log("fetching event...",event);
    event.respondWith(
            caches.match(event.request)
            .then(function(resonse){
                if(resonse){
                    return resonse;
                }else{
                    return fetch(event.request);
                }
            })
        )
})
