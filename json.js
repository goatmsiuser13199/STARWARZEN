
function dial_12(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X12;
    })
    .catch(err => console.error(err));
}

function dial_22(){
    fetch('/narration/contexte.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("dial").innerHTML = data.X22;
    })
    .catch(err => console.error(err));
}


