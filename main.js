// Finish Responses And possibel Inputs



const header = document.querySelector('header');
const nav = document.querySelector('nav');
const chatIcon = document.querySelector('.chatIcon');
const chatBox = document.querySelector('.chatBot');
const chatContent = document.querySelector('.chatContent');



//Toggle Function
const toggleFunc = (trigger, eventType, item, classAdd, delay) => {
    trigger.addEventListener(eventType, () => {
        setTimeout(() => {
            item.classList.toggle(classAdd);
        }, delay);
    });
}

toggleFunc(chatIcon, 'click', chatBox, 'openChat', 200);



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
    let greeting1 = /ello/i;
    let greeting2 = /hey/i;
    let greeting3 = /hi/i;
    let time = /time/i;
    let weather = /weather/i;
    let food = /food/i;
    let restaurant = /restaurant/i;
    let help = /help/i;
    let todayDate = /date/i;
    // let nearMeLink = ''
    // let nearestGasStation
    // let timeStoreCloses
    // let measurements
    // let currencyCovert
    // let recipe
    // let prices



    //Fucntion for number equals Day of week name
    const theDate = () => {
        if(dayOfWeek == 1){

        }
    }



    const botRespond = (regex, botsResponse) => {
        if (regex.test(userInput)) {
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">${botsResponse}</p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        } else {
            chatContent.innerHTML += '';
        }

    }



    botRespond(greeting1, 'Hello, please ask a question');
    botRespond(greeting2, 'Hello, please ask a question');
    botRespond(greeting3, 'Hello, please ask a question');
    botRespond(time, `The time is: ${curTime}`);
    botRespond(weather, `You can check your cities weather here:<br> <a href="https://weather.com/weather/today/" target="_blank">Check Weather</a>`);
    botRespond(food, `Here are some places to eat near you:<br> <a href="https://www.bing.com/search?q=food+near+me&go=Search&qs=n&form=QBRE&sp=-1&pq=food+near+me&sc=8-6&sk=&cvid=10DF67413BA348CFB1A9D85B3D909AC2" target="_blank">Food</a>`);
    botRespond(restaurant, `Here are some places to eat near you:<br> <a href="https://www.bing.com/search?q=food+near+me&go=Search&qs=n&form=QBRE&sp=-1&pq=food+near+me&sc=8-6&sk=&cvid=10DF67413BA348CFB1A9D85B3D909AC2" target="_blank">Food</a>`);
    botRespond(help, 'Maybe, it depends on what you need help with');
    botRespond(todayDate, `Todays date is ${dayOfWeek}`);


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



//User Online or Offline




//Access Camera