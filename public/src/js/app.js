if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(()=>{
        console.log("serviceWorker register")
    })
    .catch(function(err){
        console.log(err);
    });
}
function options(id){
    var ele=document.getElementById('img-'+id);
    if(id=='cam1'){
        if(ele!=null){
            document.getElementById(id).removeChild(ele)
            var cam1=document.createElement('iframe')
            cam1.id="ifcam1";
            cam1.src="http://192.168.4.2:80";
            document.getElementById(id).appendChild(cam1)
        }else{
            document.getElementById(id).removeChild(document.getElementById('ifcam1'))
            var stream=document.createElement('img');
            stream.src='http://192.168.4.2:81/stream';
            stream.id='img-cam1';
            stream.style.width='100%';
            stream.style.height='100%';
            document.getElementById('cam1').appendChild(stream)
        }
    }
    if(id=='cam2'){
        if(ele!=null){
            document.getElementById(id).removeChild(ele)
            var cam1=document.createElement('iframe')
            cam1.id="ifcam2";
            cam1.src="http://192.168.4.4:80";
            document.getElementById(id).appendChild(cam1)
        }else{
            document.getElementById(id).removeChild(document.getElementById('ifcam2'))
            var stream=document.createElement('img');
            stream.src='http://192.168.4.4:81/stream';
            stream.id='img-cam2';
            stream.style.width='100%';
            stream.style.height='100%';
            document.getElementById(id).appendChild(stream)
        }
    }
}