const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const inputText = document.getElementById("input1");
document.getElementById("btn1").addEventListener("click", OnClick_Btn1);
let width = 800;
let height = 800;

canvas.height = height;
canvas.width = width;

let wca = new WCA(width, height);

Start();
//GameLoop();

function Start(){

    wca.ComputeAllGen();
    wca.Show(ctx);
}

function GameLoop(){

    ctx.fillStyle = 'rgb(0 ,0 ,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    

    requestAnimationFrame(GameLoop);
}

function OnClick_Btn1(){

    let input = parseInt(inputText.value);
    if(input < 0 || input > 255 || isNaN(input))
        return;
        
    let ruleString = input.toString(2);
    let lengthDifference = 8 - ruleString.length;
    let ruleString8Bit = [];
    for(let i = 0; i< lengthDifference;i++){

        ruleString8Bit[i] = 0;
    }
    for(let i = lengthDifference;i<8;i++){

        ruleString8Bit[i] = parseInt(ruleString[i - lengthDifference]);
    }

    wca.ResetWithRule(ruleString8Bit);
    wca.ComputeAllGen();
    wca.Show(ctx);
}