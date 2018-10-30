

 let app= {
     init: function()
     {
         this.bindEvents();
          this.gamestart= false;
          this.audio = document.createElement('audio');
          this.audio.setAttribute('src', 'sounds/splashS.mp3');
          this.bindEvents();
          this.bloonarray=[];  

     },
     bindEvents:function()
     {
        startbtn.onclick = (evt)=>{
            console.log("this is log");
            this.gamestart= true;
            splashscreen.classList.add("hide");
            gamescreen.classList.remove("hide");   
            gameover.classList.add("hide");
            this.audio.play();


 

        }
        this.startedkey = setInterval(()=>{
            if(this.gamestart){
              var bloon= document.createElement("img");
              bloon.setAttribute("src","images/baloon-"+Math.floor((Math.random()*3))+".png");
              bloon.setAttribute("class","bloon");
                     bloon.style.top= "500px";
                     bloon.style.left=Math.random()*splashscreen.offetwidth +'px';
                   gamescreen.appendChild(bloon);
        
                    let key = setInterval(()=>{
                        let size= parseFloat(bloon.style.top)-1;
                        bloon.style.top= size+'px';




                    })
                  this.  bloonarray.push(key);
                }

               
        })
    

     }


 }


