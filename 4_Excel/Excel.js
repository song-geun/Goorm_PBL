class Excel {
    Excel
    constructor() {
        this.Excel = document.querySelector("#TableToExport");
        let sheet;
        sheet = document.createElement('TR');
        sheet.classname = 0;
        for (let i = 0; i < 27; i++) {
            let now = document.createElement('TD');
            now.classname = String.fromCharCode(Number(64) + Number(i));
            now.textContent = String.fromCharCode(Number(64) + Number(i));
            sheet.appendChild(now);
        }
        this.Excel.appendChild(sheet);
        for (let j = 1; j <= 1000; j++) {
            sheet = document.createElement('tr');
            sheet.classname = j;
            for (let i = 0; i < 27; i++) {
                let now = document.createElement('TD');
                now.classname = String.fromCharCode(Number(64) + Number(i)) + j;
                now.textContent = String.fromCharCode(Number(64) + Number(i)) + j;
                sheet.appendChild(now);
            }
            this.Excel.appendChild(sheet);
        }
    }
}