const CACHE_NAME = "what-to-do-v3";

const cacheUrls = [
    "/",
    "/assets/offline.html",
    "/main.js",
    "/vendor.js"
];


self.addEventListener('install',function(ev){
    console.log(ev);

    caches.open(CACHE_NAME)
    .then(function(cache){
        return cache.addAll(cacheUrls);
    })
})


self.addEventListener('activate',function(ev){
    console.log("SW Actualizado");
    
    const limpiarCachePr = caches.keys().then(function(names){
        const limpiarViejosPr = names.map((name) => {
            if (CACHE_NAME !== name){
                return caches.delete(name);
            }
        });
    });
    
    ev.waitUntil(limpiarCachePr);
})

self.addEventListener('fetch',function(ev){
   const responsePr = caches.match(ev.request)
   .then(function(response){
       console.log(response);
       if (response){
           return response;
       }
       return fetch(ev.request);
   }).catch(err => {
       if (ev.request.mode == "navigate"){
           return caches.match("/assets/offline.html")
       }
   });

   ev.respondWith(responsePr);
})