function reqData (url) {
    fetch(url, { method: "GET" })
    .then(responce => responce.json())
    .then((data) => adder(data))
    .catch((error) => {
        console.log(error);
    })
}

function adder(data){
    console.log(data);
    let anHTML = `<table id="table1"><tr><th>Title</th>
            <th>Type</th><th>Date</th></tr>`
    data.forEach(ele => {
        console.log(ele);
        anHTML += "<tr><td>" +
            ele.title + "</td><td>" +
            ele.type + "</td><td>" +
            ele.date + "</td></tr>";      
    })
    anHTML += "</table>";
    document.getElementById("data-output").innerHTML = anHTML;


}