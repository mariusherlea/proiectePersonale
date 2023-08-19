
let que=[];

function myFunction() {
    var x = document.getElementById("myText").value;
    // document.getElementById("demo").innerHTML = x;
    que.push(x);
    render(que);
    
}

   function add(object){
        
        que.push(object);
        
        // return que;
  };

  function remove(){
    que.pop();
    render(que);
  }

  function render(object){
    document.getElementById("demo").innerHTML = que.toString(object);
  }
// add("person");
// add("anotherperson");

render(que);



render(que);