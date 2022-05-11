function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        console.log(data.length)
        var row = `<tr>
                        <td>${data[i].carid}</td>
                        <td>${data[i].fname}</td>
                        <td>${data[i].lname}</td>
                        <td>${data[i].year}</td>
                        <td>${data[i].make}</td>
                        <td>${data[i].model}</td>
                        <td>${data[i].score}</td>
                  </tr>`
        table.innerHTML += row


    }
}