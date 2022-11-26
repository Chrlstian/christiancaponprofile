let message = document.getElementById("circle");

function firstQuestion(){
    let randomNumbers = Math.floor(Math.random() * 4);

    switch(randomNumbers){
        case 0: 
            message.textContent = "Your future wife will be named Anna!";
            break;
        case 1: 
            message.textContent = "Your future wife will be named Celia!";
            break;
        case 2: 
            message.textContent = "Your future wife will be named Liza Soberano!";
            break; 
        case 3: 
            message.textContent = "Your future wife will be named Christine!";
            break;   
    }
}
function secondQuestion(){
    let randomNumbers = Math.floor(Math.random() * 4);

    switch(randomNumbers){
        case 0: 
            message.textContent = "You are Rich in money but poor in love.";
            break;
        case 1: 
            message.textContent = "Yes! you are rich";
            break;
        case 2: 
            message.textContent = "You are poor in money but Rich in love.";
            break; 
        case 3: 
            message.textContent = "You are just an average person, not poor and not Rich.";
            break;   
    }
}
function thirdQuestion(){
    let randomNumbers = Math.floor(Math.random() * 7);

    switch(randomNumbers){
        case 0: 
            message.textContent = "Police";
            break;
        case 1: 
            message.textContent = "Teacher";
            break;
        case 2: 
            message.textContent = "Doctor";
            break; 
        case 3: 
            message.textContent = "Seaman";
            break;
        case 4: 
            message.textContent = "Freelancer";
            break;     
        case 5: 
            message.textContent = "Software Engineer";
            break;  
        case 6: 
            message.textContent = "Web Developer";
            break;  
    }
}
function fourthQuestion(){
    let randomNumbers = Math.floor(Math.random() * 2);

    switch(randomNumbers){
        case 0: 
            message.textContent = "You are a successful person.";
            break;
        case 1: 
            message.textContent = "Create your own future, advises FortuneOfBall.";
            break;
    }
}

