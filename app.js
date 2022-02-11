document.getElementById('btn').addEventListener('click', function(){
    const body = document.getElementById('body');
    let min = 100000;
    let max = 999999;
    let random_number = Math.floor(Math.random() * (max-min) + min);
    body.style.backgroundColor = `#${random_number}`;
});