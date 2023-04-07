
function choiceStory(){
    var myButton1 = document.getElementById("myButton1");
    if (myButton1 === true){
        leftChoice()
    }else{
        rightChoice()
    }
}

function leftChoice(){
    $(document).ready(function() {
        $.ajax({
          url: ".narration/contexte.txt",
          dataType: "text",
          success: function(text) {
            var reader = new FileReader();
            reader.onload = function() {
              console.log(reader.result);
            };
            reader.readAsText(new Blob([text]));
          }
        });
      });
      


}