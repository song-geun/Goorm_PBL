class Excel {
    Excel
    sheets
    constructor() {
        this.Excel = document.querySelector("#TableToExport");

    }
    async init() {
        let sheet = [];
        let array = [[]];
        let abc = document.createElement('tr')
        let now = document.createElement('td');
        let now1 = document.createElement('div');
        now.id = String.fromCharCode(Number(64));
        now1.id = String.fromCharCode(Number(64));
        now.classname = "";
        now1.textContent= "";
        now.appendChild(now1);
        abc.appendChild(now);
        for (let i = 1; i < 27; i++) {
            let now = document.createElement('td');
            let now1 = document.createElement('div');
            now.id = String.fromCharCode(Number(64) + Number(i));
            now1.id = String.fromCharCode(Number(64) + Number(i));
            now.classname = "unsel";
            now1.textContent= now1.id;
            now.appendChild(now1);
            abc.appendChild(now);
        }
        this.Excel.appendChild(abc);
        for (let j = 1; j <= 100; j++) {
            sheet[j] = document.createElement('tr');
            sheet[j].classname = 'a1' + j;
            let now = document.createElement('td');
            now.id = j;
            now.classname = "unsel";
            now.textContent = j;
            sheet[j].appendChild(now);
            for (let i = 1; i < 27; i++) {
                let now = document.createElement('td');
                now.id = String.fromCharCode(Number(64) + Number(i)) +'-' + j;
                now.classname = "TD1";
                now.addEventListener("keyup", KeyboardEvents);
                now.addEventListener("click", clickEvents);
                now.appendChild(now1);
                sheet[j].appendChild(now);
                
            }
            this.Excel.appendChild(sheet[j]);
        } 
        this.sheets = sheet;
    }

}


let excel = new Excel();
excel.init();



