if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(()=>{
        console.log("serviceWorker register")
    })
    .catch(function(err){
        console.log(err);
    });
}