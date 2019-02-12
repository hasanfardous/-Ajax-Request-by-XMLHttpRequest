var input = document.getElementById('name'),
    elmnt = document.getElementById('output');

input.onkeyup = function(){
    var xmlHttp = new XMLHttpRequest();
    var data = document.getElementById('name').value;
    var serverPage = 'response.php?data=' + data;
    xmlHttp.open('GET', serverPage);
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            elmnt.innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.send(null);
}
