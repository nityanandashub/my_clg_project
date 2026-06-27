console.log("Welcome to Tic Tak Toe");
let music= new Audio("");
let audioturn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X";
let isgameover=false;
let img=document.querySelector(".imgbox img");

function g_music()
{
	//gameover.currentTime=0;
	gameover.play();
}
//function to check the turn

const changeturn=()=>{
	return turn ==="X"?"0": "X";
}

//function to check draw

const checkdraw = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let draw = true;

    Array.from(boxtexts).forEach(box => {
        if (box.innerText === "") {
            draw = false;
        }
    });

    if (draw && !isgameover) {
        document.querySelector(".info").innerText = "Match Draw!";
        isgameover = true;

       // img.style.display = "block";
        //img.src = "draw.gif"; // Optional draw animation
    }
}

//Function To check Win

const checkwin = () => {

    let boxtexts = document.getElementsByClassName("boxtext");

    let win = [
        [0,1,2,-1,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],

        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],

        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ];

    win.forEach(e => {

        if(
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
            boxtexts[e[0]].innerText !== ""
        ){

            document.querySelector(".info").innerText =
            boxtexts[e[0]].innerText + " Won!";

            isgameover = true;

            img.style.width = "200px";
            img.style.display = "block";

            document.querySelector(".line").style.width = "30vw";

            document.querySelector(".line").style.transform =
            `translate(${e[3]}vw, ${e[4]}vw)
             rotate(${e[5]}deg)`;

            g_music();
        }

    });
}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{						// Array.from(boxes) convert boxes element into array
	let boxtext=element.querySelector('.boxtext');
	element.addEventListener("click" ,()=>{
		if(boxtext.innerText==='')
		{
			boxtext.innerText=turn;
			turn=changeturn();
			audioturn.currentTime = 0;
			audioturn.play();
			checkwin();
			checkdraw();
			if(!isgameover)
			{document.getElementsByClassName("info")[0].innerText="Turn for "+turn;}
		}
	})
})

//Reset game
reset.addEventListener('click',()=>{
	let boxtext=document.querySelectorAll('.boxtext');
	Array.from(boxtext).forEach(element =>{
		element.innerText='';
	});
	turn='X';
	isgameover=false;
	document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
	img.style.display='none'
	document.querySelector(".line").style.width = "0";
})								