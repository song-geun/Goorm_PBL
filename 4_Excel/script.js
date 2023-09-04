document.getElementById("sheetjsexport").addEventListener('click', function () {
    var wb = XLSX.utils.table_to_book(document.getElementById("TableToExport"));
    XLSX.writeFile(wb, "SheetJSTable.xlsx");
});

document.querySelector('*').addEventListener('click',
    (e)=> {
        let now = e.target.id;
        console.log(now);
    });

excel = new Excel();