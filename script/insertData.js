
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    var table = document.getElementById("table-penjualan");
formData["urut"] = table.tBodies[0].rows.length;
    formData["nameId"] = document.getElementById("nameId").value;
    formData["qtyId"] = document.getElementById("quantityId").value;
    formData["dbId"] = document.getElementById("dbId").value;
    formData["tbId"] = document.getElementById("tbId").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("table-penjualan").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.urut+1;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nameId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qtyId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dbId;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.tbId;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nameId").value = "";
    document.getElementById("quantityId").value = "";
    document.getElementById("dbId").value = "";
    document.getElementById("tbId").value = "";
    selectedRow = null;
}

var urutData = "";

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nameId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantityId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dbId").value = selectedRow.cells[3].innerHTML;
    document.getElementById("tbId").value = selectedRow.cells[4].innerHTML;
    urutData = selectedRow.cells[0].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = urutData;
    selectedRow.cells[1].innerHTML = formData.nameId;
    selectedRow.cells[2].innerHTML = formData.qtyId;
    selectedRow.cells[3].innerHTML = formData.dbId;
    selectedRow.cells[4].innerHTML = formData.tbId;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table-penjualan").deleteRow(row.rowIndex);
        resetForm();
    }
}


function validate() {
    isValid = true;
    if (document.getElementById("nameId").value == "" || document.getElementById("quantityId").value == "" || document.getElementById("dbId").value=="" || document.getElementById("tbId").value == "") {
        isValid = false;
        alert("Fill The Form Correctly!")
    } else {
        isValid = true;
        alert('data added successfully!')
    }
    return isValid;
}