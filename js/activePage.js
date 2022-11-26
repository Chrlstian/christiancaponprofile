const btnContainer = document.getElementById('navbar');
const btns = btnContainer.getElementsByClassName('btn');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active');
        this.className += ' active';
    })

}