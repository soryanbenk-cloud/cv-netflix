window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video1");

  if (!video) return;

  video.muted = true;
  video.playsInline = true;

  let isPlaying = false;

  video.addEventListener("mouseover", () => {
    if (!isPlaying) {
      video.play()
        .then(() => isPlaying = true)
        .catch(err => console.log("Play bloqué :", err));
    }
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
    isPlaying = false;
  });
});



window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("start");
	const skipBtn= document.getElementById("skip");
	
	
  if (!video) return;

video.muted = true;
video.playsInline = true;
video.currentTime = 0;
video.play();

	if(skipBtn);
	skipBtn.addEventListener("click", () => {
	video.currentTime = 5;
  video.style.opacity = "0";
	setTimeout(() => {
            video.style.display = "none";
        } ,300);
});
  video.addEventListener("ended", () => {
     video.style.opacity = "0";
	setTimeout(() => {
            video.style.display = "none";
        } ,300);
  });
});


	document.addEventListener("DOMContentLoaded", () => {
const button =document.getElementById("button");

let count=0;
const maxboxe=1;

button.addEventListener("click", ()=>{
	if(count >= maxboxe) {
	document.getElementById("nono").remove();
	setTimeout(() =>{

	},1000);
	count=0;
	return;
}
	const rect=createRectangle();

	
	rect.style.height ="250px";
	rect.style.backgroundColor ="black";
	rect.style.width = "250px";
	rect.style.top = "400px";
	rect.style.left = "500px";
	rect.style.border = "2px solid red";
	rect.style.borderRadius = "1px" ;
	rect.style.position = "absolute";
	rect.style.color ="white";
	rect.style.textAlign = "center";

	rect.classList.add("glow");
	

	document.body.appendChild(rect);	
	
count++
	
});
function createRectangle() {
    const rect = document.createElement("div");
rect.id = "nono";
rect.classList.add("nono");
rect.textContent=("j'ai acquérie des bases en informatiques dans mon lycée, de part le excel éffectuer, mais j'ai également améliorer ses compétences durant mon stage a l'entreprise kusmi tea ou j'ai utilisé notamment canva et enfin j'ai aussi crée ce site internet.\nSi j'ai choisi de mettre cette compétences en avant dans ce potrfolio c'est car je suis actuellement en 2nde Tne et souhaite faire une 1ere CIEL");
return rect;
	}
});






	document.addEventListener("DOMContentLoaded", () => {
const button =document.getElementById("buttonxp");

let count=0;
const maxboxe=1;

button.addEventListener("click", ()=>{
	if(count >= maxboxe) {
	document.getElementById("nonoX").remove();
	setTimeout(() =>{

	},1000);
	count=0;
	return;
}
	const rect=createRectangle();

	
	rect.style.height ="250px";
	rect.style.backgroundColor ="black";
	rect.style.width = "250px";
	rect.style.top = "400px";
	rect.style.left = "500px";
	rect.style.border = "2px solid red";
	rect.style.borderRadius = "1px" ;
	rect.style.position = "absolute";
	rect.style.color ="white";
	rect.style.textAlign = "center";

	rect.classList.add("glow");
	

	document.body.appendChild(rect);	
	
count++
	
});
function createRectangle() {
    const rect = document.createElement("div");
rect.id = "nonoX";
rect.classList.add("nonoX");
rect.textContent=("j'ai éffecuer mon stage dans l'entreprises kusmi tea durant la période du 1er au 19 Décembre, durant se stae j'ai pu apprendre:\n La gestion d'un évenement (préparation),notamment lors de la collaboration avec meta. \n  j'ai aussi pu apprendre a utiliser avec canva en faisant des benchmark, et diaporama sur si youtube e ttwitch serait utile a l'entreprise.");
return rect;
	}
});

 
