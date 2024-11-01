const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const details = document.querySelectorAll('.details');
for (let i=0; i<plus.length; i++){
    plus[i].addEventListener('click', function(){
        plus[i].style.display='none';
        minus[i].style.display='flex';
        details[i].style.display='flex'
    })
};
for (let i=0; i<minus.length; i++){    
    minus[i].addEventListener('click', function(){
        plus[i].style.display='flex';
        minus[i].style.display='none';
        details[i].style.display='none'
    });
};


