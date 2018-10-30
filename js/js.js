let app = {
    init: function () {
        this.bindEvents();
        this.gameStarted = false;
        this.audio = document.createElement('audio');
        this.audio.setAttribute('src','sounds/splashS.mp3');
        this.bindEvents();
        this.baloonInterval =[];
    },
    bindEvents: function () {
        pic_container.onclick = (evt) => {
            splash_screen.classList.add('hide');
            game_over_screen.classList.remove('hide');
            game_screen.classList.remove('hide');
            this.audio.play();
            this.gameStarted = true;
        }
        this.startkey  = setInterval( ()=>{
            if (this.gameStarted){
            var baloon = document.createElement('img');
            baloon.setAttribute('src', 'images/baloon-' +(1+Math.floor(Math.random()*3))+ '.png');
            baloon.setAttribute('class','baloon');
            baloon.style.top = '500px';
            baloon.style.left = (Math.random()* app_container.offsetWidth) + 'px';
            game_screen.appendChild(baloon);
            baloon.onclick=function(){
            baloon.remove();
           var burst= document.createElement('audio');
                burst.setAttribute('src','sounds/sound.mp3');
                burst.play();
            }
            
            // var burst = .onclick(){
            //     baloon.clear();
            // }

                let key = setInterval(()=>{
                    let size =parseFloat(baloon.style.top)-1;
                    baloon.style.top = size + 'px';
                   },10+Math.random()*20 )
                   this.baloonInterval.push(key);
                }        
    },1000+Math.random()*2000)
    }
}   