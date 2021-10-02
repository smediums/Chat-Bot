// Finish Responses And possibel Inputs



const header = document.querySelector('header');
const nav = document.querySelector('nav');
const chatIcon = document.querySelector('.chatIcon');
const chatBox = document.querySelector('.chatBot');
const chatContent = document.querySelector('.chatContent');
const settings = document.querySelector('.fa-cog');



//Toggle Function
const toggleFunc = (trigger, eventType, item, classAdd, delay) => {
    trigger.addEventListener(eventType, () => {
        setTimeout(() => {
            item.classList.toggle(classAdd);
        }, delay);
    });
}

toggleFunc(chatIcon, 'click', chatBox, 'openChat', 80);
toggleFunc(settings, 'click', settings, 'settings', 0);


// All Chat Icon & Chat Box events 

const shrink = () => {
    const closeChat = document.querySelector('.fa-times');
    const minimize = document.querySelector('.fa-minus');
    const minimizeDots = document.querySelector('.dots');
    const dots = document.querySelectorAll('.dot');
    const close2ndOptn = document.querySelector('.fa-undo');


    //Chat Icon Switch Animation
    chatIcon.addEventListener('click', () => {
        chatIcon.classList.add('openChat');
        setTimeout(() => {
            close2ndOptn.classList.add('openChat');
        }, 300);
        minimizeDots.classList.remove('minimize');

        //Close Chat Box With no Prompt
        close2ndOptn.addEventListener('click', () => {
            close2ndOptn.classList.remove('openChat');
            setTimeout(() => {
                chatIcon.classList.remove('openChat');
            }, 300);
            chatBox.classList.remove('openChat');
            setTimeout(() => {
                chatBox.classList.remove('minimize');
            }, 200);

            chatBox.lastElementChild.style.display = 'block';
        })
    });




    //Close Chat Box
    closeChat.addEventListener('click', () => {
        if (confirm('Click OK to close the chat. Click Cancel to  cancel')) {
            chatBox.classList.remove('openChat');
            setTimeout(() => {
                chatIcon.classList.remove('openChat');
            }, 300);
            close2ndOptn.classList.remove('openChat');
            chatContent.innerHTML = '';
        }
    });


    //Minimize Chat Box
    minimize.addEventListener('click', () => {
        chatBox.lastElementChild.style.display = 'none';
        chatBox.classList.add('minimize');
        setTimeout(() => {
            minimizeDots.classList.add('minimize')
        }, 300);

        dots.forEach(dot => {
            dot.classList.add('minimize');
        });
    });

    //Chat Box Minimize animation
    minimizeDots.addEventListener('click', () => {
        chatBox.lastElementChild.style.display = 'block';

        setTimeout(() => {
            chatBox.classList.remove('minimize')
        }, 100);

        setTimeout(() => {
            minimizeDots.classList.remove('minimize')
        }, 0);

        dots.forEach(dot => {
            dot.classList.remove('minimize');
        });

    })


}

shrink();


//Computer Responses and Response Triggers

const botReponses = () => {

    let userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';
    const today = new Date();
    const todayHours = today.getHours();
    const todayMins = today.getMinutes();
    const minDisplay = todayMins < 10 ? `0${todayMins}` : todayMins;
    const dayOfWeek = today.getDay();
    const convertHour = (todayHours % 12 || 12);
    const amOrPm = todayHours < 12 ? 'am' : 'pm';
    const curTime = `${convertHour}:${minDisplay}${amOrPm}`;

    //Regex to check for
    let greeting1 = /ello/i.test(userInput);
    let greeting2 = /hey/i.test(userInput);
    let greeting3 = /hi/i.test(userInput);
    let weather = /weather/i.test(userInput);;
    let food = /food/i.test(userInput);
    let restaurant = /restaurant/i.test(userInput);
    let time = /time/i.test(userInput);
    let todayDate = /date/i.test(userInput);



    //Fucntion for number equals Day of week name
    const theDate = () => {
        if(dayOfWeek == 1){

        }
    }

    const botRespond = () => {

        if(greeting1 || greeting2 || greeting3){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">Hello, please ask a question.</p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        }
        if(weather){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">You can check your cities weather here:<br> <a href="https://weather.com/weather/today/" target="_blank">Check Weather</a></p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        }
        if(time){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">The time is: ${curTime}</p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        }
        if(todayDate){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">Hello, please ask a question.</p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        }
        if(food || restaurant){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            chatContent.innerHTML += `<div class="botResponse"><p class="reponse">Here are some places to eat near you:<br> <a href="https://www.bing.com/search?q=food+near+me&go=Search&qs=n&form=QBRE&sp=-1&pq=food+near+me&sc=8-6&sk=&cvid=10DF67413BA348CFB1A9D85B3D909AC2" target="_blank">Food</a></p>${curTime}</div>`;
        }
        if(userInput == '' || userInput == ' '){
            chatContent.innerHTML += '';
        };

    }


    botRespond();
}


let userInput = document.getElementById('userInput');
userInput.addEventListener('keydown', (event) => {

    if (event.keyCode == 13) {
        botReponses();

        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing';
        typingDiv.innerHTML = `<div class="typing"><p><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></p>Typing...</div>`;
        chatContent.appendChild(typingDiv);
        setTimeout(() => {
            chatContent.removeChild(typingDiv);
        }, 445);
        chatContent.lastElementChild.scrollIntoView(false);
    };
});

document.querySelector('.fa-arrow-up').addEventListener('click', () => {
    botReponses();

    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing';
    typingDiv.innerHTML = `<div class="typing"><p><i class="fas fa-circle"></i><i class="fas fa-circle"></i><i class="fas fa-circle"></i></p>Typing...</div>`;
    chatContent.appendChild(typingDiv);
    setTimeout(() => {
        chatContent.removeChild(typingDiv);
    }, 445);
    chatContent.lastElementChild.scrollIntoView(false);

})
