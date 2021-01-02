var timer = 60;
var t = document.querySelector('#timer');
var bpnl = document.querySelector('#bpnl');
var hit = document.querySelector('#hit');
var s = document.querySelector('#score');
var guessNum;
var score = 0;
setInterval(function(){
    if(timer>0){
        t.textContent = --timer;
    }
    else{
        bpnl.innerHTML = '<h1 id="centre">Game Over</h1>'
    }
},1000);

function makeBubbles(){
    for(var i=0; i<104; i++){
        var randomnum = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomnum}</div>`;
        bpnl.innerHTML += template;
    }
}

function getNewGuess(){
    //get a random number
    guessNum = Math.floor(Math.random()*10);
    //place it in the hit box
    hit.textContent = guessNum;
}

bpnl.addEventListener('click',function(details){
    var clickedBblValue = details.target.textContent;
    if(clickedBblValue == guessNum){
        score = score + 10;
        s.textContent = score;
        getNewGuess();
        bpnl.innerHTML = '';
        makeBubbles();
    }
    else{
        console.log('wrong');
    }
})

getNewGuess();
makeBubbles();