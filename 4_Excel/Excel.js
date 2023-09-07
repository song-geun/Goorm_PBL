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
            let now1 = document.createElement('div');
            now.id = j;
            now1.id = j;
            now.classname = "unsel";
            now1.textContent= now1.id;
            now.appendChild(now1);
            sheet[j].appendChild(now);
            for (let i = 1; i < 27; i++) {
                let now = document.createElement('td');
                let now1 = document.createElement('span');
                now.id = String.fromCharCode(Number(64) + Number(i)) +'-' + j;
                now1.id = String.fromCharCode(Number(64) + Number(i))+'-' + j;
                now.classname = "TD1";
                now1.className = String.fromCharCode(Number(64) + Number(i)) + j;
                now1.textContent = "";
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


excel = new Excel();
excel.init();
