class Excel {
    Excel
    constructor() {
        this.Excel = document.querySelector("#TableToExport");
        let sheet;
        for (let j = 1; j <= 1000; j++) {
            sheet = document.createElement('TR');
            sheet.classname = j;
            for (let i = 1; i < 27; i++) {
                let now = document.createElement('TD');
                let now1 = document.createElement('span')
                now1.className = String.fromCharCode(Number(64) + Number(i)) + j;
                now1.textContent = String.fromCharCode(Number(64) + Number(i)) + j;
                now.appendChild(now1);
                now.classname = String.fromCharCode(Number(64) + Number(i)) + j;
                
                sheet.appendChild(now);
            }
            this.Excel.appendChild(sheet);
        }
    }
}