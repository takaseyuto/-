
function nibunta(i,c){
    var tableEle = document.getElementById('nibuntable');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = i;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML = c;
    tr.appendChild(td);
    tableEle.appendChild(tr); 
}

function nibuntaclear(i){
    var tableEle = document.getElementById('nibuntable');
    for(let n=0;n<i;n++){
        tableEle.deleteRow(-1);
    }
}

function newtonta(v,b){
    var tableEle = document.getElementById('newtontable');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = v;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerHTML = b;
    tr.appendChild(td);
    tableEle.appendChild(tr);
}

function newtontaclear(v){
    var tableEle = document.getElementById('newtontable');
    for(let n=0;n<v;n++){
        tableEle.deleteRow(-1);
    }
}