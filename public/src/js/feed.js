function readRoomComponentStatus(){
  var urls=[
    'https://run.mocky.io/v3/a40b98f5-82ea-445a-b3f4-2e945524c395', 
    'https://run.mocky.io/v3/07c50345-27e6-4ad8-96fe-86c9e4b45674'
  ];
  for(var i=0;i<urls.length;i++){
    fetch(urls[i])
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      console.log('data:',data)
      createCard(data);
    })
  }
 
}
function createCard(data){
  var card=document.createElement('div');
  card.id=data.name;
  var cardImage=document.createElement('div');
  cardImage.className='card-image'
  var imag=document.createElement('img')
  imag.src='../src/images/main-image-sm.jpg'
  cardImage.appendChild(imag);
  //cardImage.innerHTML="CARD IMAGE"
  card.appendChild(cardImage);
  var cardbag=document.createElement('div')
  cardbag.className='card-bag';
  
  for(var key in data){
    if(key=="name")
      continue;
      var cardElement=document.createElement('div')
      cardElement.className='cardElement'
    var label=document.createElement('label')
    label.htmlFor=data.name+"-"+key
    label.innerHTML=key
    var inputC=document.createElement('input');
    inputC.type="checkbox";
    inputC.className='mdl-switch__input'
    inputC.id=data.name+"-"+key;
    inputC.className="mdl-switch__input"
    inputC.checked=data[key]
    // var temp=document.createElement('div')
    // temp.className='controllme';
    // cardElement.appendChild(temp)
    cardElement.appendChild(label);
    cardElement.appendChild(inputC);
    cardbag.appendChild(cardElement);
  }
  
  card.appendChild(cardbag);
  //console.log(card)
  var main=document.getElementById('container-001')
  //main.appendChild(card)
  if (main!=null){
    main.appendChild(card)
  }

}

self.addEventListener('load',readRoomComponentStatus);