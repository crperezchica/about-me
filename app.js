'use strict';

alert('Welcome! Get ready to play a game to learn more About Me.');

const username = prompt('But first what\s your name?');
console.log('user said their name was:' + username);
alert('Hi! ' + username + '. Get ready to start playing. Have fun!');

//Question 1: prompt('Do I like rainbows?')= true
const rainbows = prompt( username + ', do I like rainbows?').toLowerCase();
console.log('user said response to rainbows:' + rainbows);
if (rainbows === 'yes' || rainbows === 'y' ){
    alert('Nicely done! I do like rainbows.');
}
else if (rainbows === 'no' || rainbows === 'n')
    alert('Sorry ' + username + ' Carmen does like rainbows');
 


//Question 2: prompt('Is my hair color blue?') = false
const haircolor = prompt('Is my haircolor blue?').toLowerCase();
console.log('user said response to haircolor:' + haircolor);
if (haircolor === 'yes' || haircolor === 'y'){
    alert('Sorry ' + username + ', my haircolor is not blue. At least not now :-)');
} else if (haircolor === 'no' || haircolor () === 'n')
    alert('Correct. ' + username + ', my haircolor is not blue');


//Questions 3: prompt('Does she like flowers?')

// const flowers=prompt('Does Carmen like flowers?');
// console.log('user said response to flowers was:' + flowers);
// if (flowers.toLowerCase () === 'yes' || flowers.toLowerCase () === 'y'){
//     alert('You got it! ' + username + ' Carmen does like flowers');
// } else if (flowers.toLowerCase () === 'no' || flowers.toLowerCase () === 'n')
//     alert(username + ' Who does not like flowers');

//Questions 4: prompt('Does she own a white car?')
// const whiteCar=prompt('Does Carmen own a white car?');
// console.log('user said response to color of car:' + whiteCar);
// if (whiteCar.toLowerCase () === 'yes' || whiteCar.toLowerCase () === 'y'){
//     alert('That\s right ' + username + ' Carmen does own a white car');
// } else if (whiteCar.toLowerCase () === 'no' || whiteCar.toLowerCase () === 'n')
//     alert('Sorry' + username + ' Carmen does drive a white car');

// //Question 5: prompt('Is she a unicorn?')
// const unicorn=prompt('Is Carmen a unicorn?');
// console.log('user response to unicorn question was:' + unicorn);
// if (unicorn.toLowerCase () === 'yes' || unicorn.toLowerCase () === 'y'){
//     alert('Oh ' + username + ' of course she is not a unicorn');
// } else if (unicorn.toLowerCase () === 'no' || unicorn.toLowerCase () === 'n')
//     alert(username + ' You are correct, she is not a unicorn');

//     alert(username + ' Thank you for playing! Have a nice day.')