
let array=[];

  function addElementToArray() {

    var x = document.getElementById("myText").value;

    array.push(x);
    render(array);
    
  }

  function removeLastFromArray(){
    array.pop();
    render(array);
  }

  function render(object){
    document.getElementById("demo").innerHTML = array.toString(object);
  }


render(array);



