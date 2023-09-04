class Excel {
    Excel
    constructor() {
        this.Excel = document.querySelector("#TableToExport");
        
    }
    async init()
    {
        let sheet=[];
        for (let j = 1; j <= 100; j++) {
            sheet[j] = document.createElement('tr');
            sheet[j].classname = 'a1'+j;
            for (let i = 1; i < 27; i++) {
                let now = document.createElement('td');
                let now1 = document.createElement('span');
                now.id = String.fromCharCode(Number(64) + Number(i)) + j;
                now1.id = String.fromCharCode(Number(64) + Number(i)) + j;
                now.classname = "TD1";
                now1.className = String.fromCharCode(Number(64) + Number(i)) + j;
                now1.textContent = "";
                now.appendChild(now1);
                sheet[j].appendChild(now);
            }
            this.Excel.appendChild(sheet[j]);
        }
    }
}