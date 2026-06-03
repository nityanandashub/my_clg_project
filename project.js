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

//Function To check Win

const checkwin =()=>{
	let boxtexts=document.getElementsByClassName("boxtext");
	let win=[[0,1,2],
				[3,4,5],[6,7,8],[2,5,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6]];
	win.forEach(e=>
	{
		if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !==''))
			{document.getElementsByClassName("info")[0].innerText=boxtexts[e[0]].innerText+" won";
		isgameover=true;
		img.src="excited.gif";
		img.style.width = "200px";
		img.style.display = "block";
		img.style.transition = "width 0.5s ease-and-out";
		g_music();
		}
																											// boxtexts[e[0]].innerText means: “Get the text of the box at position e[0]".
																											//	boxtexts[e[0]] is same as boxexts[0]
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
	
})								
