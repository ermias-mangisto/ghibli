
async function getApi(api){
    try{
        
        return await fetch(api)
        .then(response=>response.json());
    }
    catch(err){
        return err;
    }
}
async function getLone(api){
    try{
        return await fetch(api)
        .then(response=>response.json());
    }
    catch(err){
        return err;
    }
}
const ghilbli="https://ghibliapi.herokuapp.com/films";

function getOnlyMovie(res,div){      
div.innerHTML +=
`<img src="${res["image"]}"width=40% height=80%>
<div>
<h2>${res["title"]}</h2>
<h2>${res["original_title"]}</h2>
<p>${res["description"]}</p>
<p><span>Directed by:${res["director"]}</span></p>
<p><span>Produced by:${res["producer"]}</span></p>
<p>${res["running_time"]} min</p>
</div>
` 
       
}

function printBox(id){
let boxBackground=document.getElementById("boxBackground");
let inBox=document.getElementById("inBox");
  boxBackground.style.display="block";

   getLone(ghilbli+"/"+id)
   .then(res=>getOnlyMovie(res,inBox))
  
}
function getMovies(res,div){

    for(obj of res){
        div.innerHTML +=
        `<div onclick=printBox("${obj["id"]}")>
        <img src="${obj.image}" width="80%" height="80%">
        <p>${obj.title}</p>
        <p>by ${obj.director}</p>
        </div>`;
    }
}


exit.addEventListener("click",()=>{
  boxBackground.style.display="none";
  inBox.innerHTML="";
    
 })
getApi(ghilbli)
.then(res=>getMovies(res,holder))
// .then(res=>console.log(res)) 