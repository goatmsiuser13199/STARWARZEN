
function choiceArmoury(){
    var myButton1 = document.getElementById("myButton1");
    if (myButton1 === true){
      rightLane()
    }else{
      leftLane()
    }
}

function recupChoice(path){
  return fetch(path)
    .then((reponse) => reponse.json())
    .then((data) =>{return data})
    .catch(console.error)
}
document.getElementById('myButton').addEventListener('click',() => {
  leftLane()
})
const TextPro = recupChoice('./narration/contexte.json')
let Text = 0
TextPro.then((value) => {Text = value})


function spaceJump(){
  let changeDialog = 0;
  document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
     changeDialog++ ;
    }
    const nextDialog = document.querySelector(`.dialog${changeDialogDialog}`);
    if (nextDialog) {
      const changeDialogElement = document.querySelector(`.dialog${changeDialog - 1}`);
      changeDialogElement.style.display = 'none';
      nextDialog.style.display = 'block';
    } else {
      document.removeEventListener('keydown', arguments.callee);
    }
  });

}

function leftLane(){
  for(let index = 0 ; index < 2 ; index++) {
    console.log(Text.dialog1.banos[index])
    spaceJump()
    console.log(Text.dialog1.gurvan[index])
  }

}

function rightLane(){
  for(let index = 0 ; index < 2 ; index++) {
    console.log(Obj.dialog3.Array1[index])
    spaceJump()
    console.log(Obj.dialog3.Array2[index])
  }
}

/*function choiceCockpit(){
  var myButton1 = document.getElementById("myButton1");
  if (myButton1 === true){
      closeSas()
  }else{
    doNothing()
  }
}*/
