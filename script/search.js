// function myFunction(){
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("input");
//     filter = document.getElementById("input").value.toUpperCase();
//     table = document.getElementById("table-penjualan");
//     tr = table.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if(td){
//             txtValue = td.textContent || td.innerText;
//             if(txtValue.toUpperCase().indexOf(filter) > -1){
//                 tr[i].style.display = "";
//             }else{
//                 tr[i].display = "none";
//             }
//         }
        
//     }
// }

let trs;
document.addEventListener("DOMContentLoaded", () =>
{
    let tbl_products = document.getElementById('table-penjualan');
    let tbl_products_tbody_trs = tbl_products.querySelectorAll('tbody > tr');
    trs = [...tbl_products_tbody_trs];        

});      

document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById('search').addEventListener('input', (e) =>
    {
        let search = e.target.value;

        trs.forEach(tr =>
        {
            let found = false;

            [...tr.children].forEach(child =>
            {
                if (child.localName == 'th') return;
                let cell = child.innerHTML.trim();

                if (cell.toLowerCase().includes(search.toLowerCase()))
                {
                    found = true;
                    return;
                }
            });

            tr.style.display = found ? 'table-row' : 'none';

        });
    });
});
