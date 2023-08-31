const abc = new github_User();

document.querySelector('#button1').
    addEventListener('keyup', (e) => {
        if (e.key != 'Enter') return;
        abc.rename(e.target.value);
        abc.connect();
        e.target.value = "";
    }
    );






