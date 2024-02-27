let box=document.querySelectorAll(".tictoc");
let resetBox=document.querySelector(".reset");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let player1=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
    const resetGame=() => {
        player1=true;
        enableBox();
        msgContainer.classList.add("hide");
    }

    const  enableBox=() => {
        for (let dabba of box){
             dabba.disabled=false;
             dabba.innerText="";
        }
    }
    const  disableBox=() => {
        for (let dabba of box){
            dabba.disabled=true;
        }
    };
    const showWinner = (winner) => {
        msg.innerText = `Congratulations Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBox();
    };
    box.forEach((dabba) => {
        dabba.addEventListener("mousedown", () => {
            if(player1) {
                dabba.innerText = "O";
                player1=false;
            }
            else {
                dabba.innerText = "X";
                player1=true;
            }
            dabba.disabled=true;
            checkwin();
        
         })
    })

    const checkwin = () => {
        for (let pattern of winpattern) {
            let valueAtPos1 = box[pattern[0]].innerText;
            let valueAtPos2 = box[pattern[1]].innerText;
            let valueAtPos3 = box[pattern[2]].innerText;
    
            if (valueAtPos1 !== "" && valueAtPos2 !== "" && valueAtPos3 !== "") {
                if (valueAtPos1 === valueAtPos2 && valueAtPos2 === valueAtPos3) {
                    console.log("Winner:", valueAtPos1);
                    showWinner(valueAtPos1);
                }
            }
        }
    }

   resetBox.addEventListener( "click", resetGame);
    
