excel = new Excel();
excel.init();
document.getElementById("sheetjsexport").addEventListener('click', function () {
    var wb = XLSX.utils.table_to_book(document.getElementById("TableToExport"));
    XLSX.writeFile(wb, "SheetJSTable.xlsx");
});

document.querySelector('#TableToExport').addEventListener('click',
    (e) => {
        let now = e.target.id;
        let input1 = document.querySelector('.' + now);
        input1.className = "readwrite";
        input1.addEventListener('keyup', (e) => {
            if (e.key !== 'Enter') return;
        
            input1.className = input1.id;
        });
    });


