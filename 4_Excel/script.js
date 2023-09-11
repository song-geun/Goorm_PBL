
let seleted = undefined;


document.getElementById("sheetjsexport").addEventListener('click', function () {
    var wb = XLSX.utils.table_to_book(document.getElementById("TableToExport"));
    XLSX.writeFile(wb, "SheetJSTable.xlsx");
});

const KeyboardEvents = (e) => {
    if (e.key !== 'Enter') return;
    const [col, row] = seleted.split("-");
    curcol = document.getElementById(col);
    currow = document.getElementById(row);
    e.target.classList.remove("readwrite");
}

const clickEvents = (e) => {
    if (seleted != undefined) {
        const [col, row] = seleted.split("-");
        cur = document.getElementById(seleted);
        curcol = document.getElementById(col);
        currow = document.getElementById(row);
        curcol.classList.remove("sel");
        currow.classList.remove("sel");
        cur.classList.remove("readwrite");

    }
    console.log(e.target.id);
    seleted = e.target.id;
    const [col, row] = seleted.split("-");
    curcol = document.getElementById(col);
    currow = document.getElementById(row);
    curcel = document.getElementById("cellstatus");
    curcel.textContent = col + row;
    curcol.classList.toggle("sel");
    currow.classList.toggle("sel");
    e.target.classList.toggle("readwrite");
}

