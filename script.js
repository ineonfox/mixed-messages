const prompt = require('prompt-sync')();

const minChanceForLastMsg = 0.7;
const maxBadCounter = 3;
const printGoodMsgsAmount = 10;
const standardConsoleColor = "\x1b[33m";
const computerMessageConsoleColor = "\x1b[36m";

const getRandomElementFromArray = arr => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};

const makeSentence = arr => {
    let sentence = '';
    for (let i = 0; i < arr.length - 1; i++) {
        sentence += getRandomElementFromArray(arr[i]);
    }

    let chance = Math.random();
    if (chance > minChanceForLastMsg) {
        sentence += getRandomElementFromArray(arr[arr.length - 1]);
    }
    return sentence;
};

const printSentence = (arr, colorCode) => {
    let sentence = userName + makeSentence(arr);
    console.log(colorCode, sentence);
    backToStandardConsoleColor();
};

const printHelp = () => {
    console.log('Доступные команды: "im gay", "ya pidor", "quit" а ещо есть пасхалки ищите');
};

const backToStandardConsoleColor = () => {
    console.log(standardConsoleColor);
}

const goodMsgParts = [[
    'ты крутой гей',
    'ты лучший',
    'ты наш шарк',
    'ты краш',
    'ты крутыш',
    'ты солнышко дада',
    'ты такой краш, как для мико феликс!!11!',
    'ты прекрасный сударь',
    'ты секс',
    'ты флекс',
    'ты токи',
    'ты эш',
    'ты ларри',
    'ты баттерс',
    'ты кенни',
    'ты хороший пидорасик',
    'ты нагето комаеда',
    'ты зизя народный артист',
    'ты вилбур',
    'ты россия',
    'ты иисус',
    'ты квакити',
    'ты смешной'
], [
    ' пушта ты мико',
    ' потомушт ты анкоша-госпожа',
    ' бо ти флурік',
    ' потомушта ты просто миша',
    ' потомушт ты гейчк',
    ' потомушто ты крутая поля',
    ' потомушта ты сьев сыр',
    ' потомушт ты спел гимн вместе с булкой',
    ' потомушта ты русский или украинец пофк',
    ' бо ти супер',
    ' пушта ты сьев батончик дзизя'
], [
    ' и я люблю тебя ЗКЫЩКЩЩ я знаю шо по гейски но мне пофек ну люблю тебя как крутого друга вот!!1!!!',
    ' и ты мой лучшй друк',
    ' и я хачю тебя обняттт',
    ' и ты ряльна очень крутой!!1!!',
    ' и ты гейййй лучший',
    ' и кароче ну тут нет слов все уже должны знать шо ты итак крутой',
    ' кто согласен шарк кто нет кринж'
]];

const badMsgParts = [[
    'ты пидорас',
    'ты извращенец',
    'ты маньяк',
    'ты педофил',
    'ты нигр',
    'ты клоун',
    'ты лиса башка',
    'ты кам',
    'ты молокосос',
    'ты писькогриз',
    'ты позер'
], [
    ' потомушта ты любиш трогать маленьких мальчиков',
    ' потомушто ты олень'
], [
    ' и вапше иди нахуй',
    ' и пошел в пизду',
    ' и иди в жопу',
    ' и ты... ладно вы замахали обзыватс не хочу'
]];

console.log(standardConsoleColor);
printHelp();

let userName = prompt('как тебя звати гей: ');
userName += ', ';
let userInput = prompt('Введите команду: ');
let badCounter = 0;

while (userInput !== 'quit') {

    switch (userInput) {
        case 'im gay':
            printSentence(goodMsgParts, computerMessageConsoleColor);
            badCounter = 0;
            break;
        case 'ya pidor':
            printSentence(badMsgParts, computerMessageConsoleColor);
            badCounter++;
            break;
        case 'fuck you':
            console.log(computerMessageConsoleColor, 'сам иди нахуй(99');
            backToStandardConsoleColor();
            break;
        case 'i love felix':
            console.log(computerMessageConsoleColor, 'феликс краш педофил');
            backToStandardConsoleColor();
            break;
        default:
            console.log(computerMessageConsoleColor, 'чел ты в муте такой команды нема');
            backToStandardConsoleColor();
            break;
    }

    if (badCounter >= maxBadCounter) {
        console.log('ТЫ ШО ГЕЙ СТОКА ПЛОХИХ ИСПОЛЬЗОВАТЬ Я ЗАМАХАВС ОБЗЫВАТС ИДИ В ПИЗДУ И ДЕРЖИ ПАРУ ХОРОШИХ ЖЕЛАНИЙ');
        for (let i = 0; i < printGoodMsgsAmount; i++) {
            printSentence(goodMsgParts, computerMessageConsoleColor);
        }
        badCounter = 0;
    }

    userInput = prompt();
}

console.log("\x1b[37m");