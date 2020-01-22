
var send = document.getElementById('send');
var content = document.getElementById('content');

send.addEventListener('click',function(e){
    e.preventDefault();
    var str = content.value;
    console.log(str);
    var xhr = new XMLHttpRequest();
    xhr.open('post','/searchAJAX');
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //  content=1234&title=hello
    var data = 'content='+str;
    xhr.send(data);
    xhr.onload = function(){
        console.log(xhr.responseText);
    }
})