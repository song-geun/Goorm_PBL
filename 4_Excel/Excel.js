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
                now.id = String.fromCharCode(Number(64) + Number(i)) + j;
                now.textContent = String.fromCharCode(Number(64) + Number(i)) + j;
                now.classname = "TD1";
                
                sheet[j].appendChild(now);
            }
            this.Excel.appendChild(sheet[j]);
        }
    }
}