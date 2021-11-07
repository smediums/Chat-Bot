const header = document.querySelector('header');
const nav = document.querySelector('nav');
const chatBox = document.querySelector('.chatBot');
const chatContent = document.querySelector('.chatContent');


//Time variables
const today = new Date();
const todayHours = today.getHours();
const todayMins = today.getMinutes();
const minDisplay = todayMins < 10 ? `0${todayMins}` : todayMins;
const convertHour = (todayHours % 12 || 12);
const amOrPm = todayHours < 12 ? 'am' : 'pm';
const curTime = `${convertHour}:${minDisplay}${amOrPm}`;

    let dayOfWeek = today.getDay();
    const month = today.getMonth()
    const year = today.getFullYear()
    let dayNum = today.getDate()


//Initial greeting
document.querySelector('.theTime').textContent = curTime;



//Computer Responses and Response Triggers

const botReponses = () => {

    let userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';

    
    //Date
    const theDate = () => {
        let theDay;
        let theMonth;
        let todayDate;

        //Day of week name
        switch(dayOfWeek){
            case 1:
                theDay = 'Mon'
                break;
            case 2:
                theDay = 'Tues'
                break;
            case 3:
                theDay = 'Wed'
                break;
            case 4:
                theDay = 'Thur'
                break;
            case 5:
                theDay = 'Fri'
                break;
            case 6:
                theDay = 'Sat'
                break;
            default:
                theDay = 'Sun'
                break;
        }

        //month name
        switch(month){
            case 1:
                theMonth = 'Feb'
                break;
            case 2:
                theMonth = 'Mar'
                break;
            case 3:
                theMonth = 'Apr'
                break;
            case 4:
                theMonth = 'May'
                break;
            case 5:
                theMonth = 'Jun'
                break;
            case 6:
                theMonth = 'Jul'
                break;
            case 7:
                theMonth = 'Aug'
                break;
            case 8:
                theMonth = 'Sep'
                break;
            case 9:
                theMonth = 'Oct'
                break;
            case 10:
                theMonth = 'Nov'
                break;
            case 11:
                theMonth = 'Dec'
                break;
            default:
                theMonth = 'Jan'
                break;
        }

        //return date in this format
        todayDate = `${theDay}, ${theMonth} ${dayNum}, ${year}`
        return todayDate;
    }

    //Regex to check user input
    let greeting1 = /ello/i.test(userInput);
    let greeting2 = /hey/i.test(userInput);
    let greeting3 = /hi/i.test(userInput);
    let weather = /weather/i.test(userInput);;
    let food = /food/i.test(userInput);
    let eat = /eat/i.test(userInput);
    let restaurant = /restaurant/i.test(userInput);
    let time = /time/i.test(userInput);
    let todayDate = /date/i.test(userInput);


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
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">${theDate()}</p>${curTime}</div>`;
                chatContent.lastElementChild.scrollIntoView(false);
            }, 550);
            chatContent.lastElementChild.scrollIntoView(false);
        }
        if(food || restaurant || eat){
            chatContent.innerHTML += `<div class="userText"><i class="fas fa-user-circle"></i><p>${userInput}</p>${curTime}</div>`;
            setTimeout(() => {
                chatContent.innerHTML += `<div class="botResponse"><p class="reponse">Here are some places to eat near you:<br> <a href="https://www.bing.com/search?q=food+near+me&go=Search&qs=n&form=QBRE&sp=-1&pq=food+near+me&sc=8-6&sk=&cvid=10DF67413BA348CFB1A9D85B3D909AC2" target="_blank">Food</a></p>${curTime}</div>`;
            }, 550);
            
        }
        if(userInput == '' || userInput == ' '){
            chatContent.innerHTML += '';
        };

    }

    botRespond();
}


let userInput = document.getElementById('userInput');
userInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
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
