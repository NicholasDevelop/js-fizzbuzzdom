const list = document.getElementById('list');

let i;

for(i = 1; i <= 100; i++){
    console.log(i);

    const li = document.createElement('li');
    li.classList.add('general-box')
    console.log(li);
    
    if((i % 3 === 0) && (i % 5 === 0) && (i !== 0)){
        li.innerHTML = 'fizzbuzz';
        li.classList.add('fizzbuzz');
    } else if((i % 5 === 0) && (i !== 0)){
        li.innerHTML = 'buzz';
        li.classList.add('buzz');
    } else if((i % 3 === 0) && (i !== 0)){
        li.innerHTML = 'fizz';
        li.classList.add('fizz');
    }


}

    