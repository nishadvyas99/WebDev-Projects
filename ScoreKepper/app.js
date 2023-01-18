const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#maxScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score === p2Score && p1Score=== winningScore-1){
            winningScore+=1;
        }
        if(p1Score === winningScore){
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score+=1;
        if(p1Score === p2Score && p1Score=== winningScore-1){
            
            winningScore+=1;
        }
        if(p2Score === winningScore){
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click', function(){
    resetFunction();
})

winningScoreSelect.addEventListener('change', function(){
    resetFunction();
    //winningScore = parseInt(winningScoreSelect.value);
})

const resetFunction = ()=>{
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    winningScore = parseInt(winningScoreSelect.value);
    p1Display.classList.remove('has-text-success','has-text-danger')
    p2Display.classList.remove('has-text-success','has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}