function reqData2 (url) {
    fetch(url, { method: "GET" })
    .then(responce => responce.json())
    .then((data) => adder2(data))
    .catch((error) => {
        console.log(error);
    })
}

function adder2(data){
    console.log(data);
    let anHTML = `<table id="table1"><tr><th>Links</th></tr>`
    data.forEach(ele => {
        console.log(ele);
        anHTML += "<tr><td>" +
            "<a href='" + ele.Link + "' target='_blank'>" + ele.Link + "<"
             + "</td></tr>";      
    })
    anHTML += "</table>";
    document.getElementById("data-output").innerHTML = anHTML;
}