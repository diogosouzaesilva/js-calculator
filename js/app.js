function insert(num){
   var number = document.getElementById('res').innerHTML;
   document.getElementById('res').innerHTML = number + num;
}

function clean(){
    document.getElementById('res').innerHTML = '';
}

function del(){
    var res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1);
}

function calculate(){
    var result = document.getElementById('res').innerHTML;
    if(res){
        document.getElementById('res').innerHTML = eval(result)
    }
    else{
        document.getElementById('res').innerHTML = "enter an operation";
    }
}