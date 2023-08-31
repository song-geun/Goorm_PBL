//const TODOlists = new Map();
let count = 0;
function refresh() {
    if(localStorage.length == 0)
        return ;
    for (let i=0;i<localStorage.length;i++)
    {
        let key = localStorage.key(i);
        if(key == undefined)
            continue;
        let value = localStorage.getItem(key);
        add(value,Number(key));
    }
}

function add(e, count1) {
    $innerdiv = document.createElement('div');
    $innerdiv.className = 'NonClear' ;
    $innerdiv.id = 'list' + count1;
    $input = document.createElement('input');
    $input.setAttribute("type", "checkbox");
    $text = document.createElement('span');
    $text.textContent = e;
    $button = document.createElement('button');
    $button.textContent = 'X';
    $button.id = count1;
    $innerdiv.appendChild($input);
    $innerdiv.appendChild($text);
    $innerdiv.appendChild($button);
    $addTodo.appendChild($innerdiv);
    document.querySelector('.TODOlist').append($addTodolist);
}

const $addTodolist = document.createElement('div');
const $addTodo = document.createElement('div');
$addTodolist.className = 'TODO';
$addTodolist.id = 'top';
$addTodolist.appendChild($addTodo);
refresh();
document.querySelector('#button1').
    addEventListener('keyup', (e) => {
        if (e.key != 'Enter') return;
        localStorage.setItem(count,  String(e.target.value));
        add(e.target.value, count);
        e.target.value = "";
        count++;
    }
    );

document.querySelector('.TODOlist').addEventListener('click', (e) => {
    const $del = document.querySelector('#list' + e.target.id);
    localStorage.removeItem(Number(e.target.id));
    while ($del.firstChild)
        $del.removeChild($del.firstChild);
    $del.remove();
});