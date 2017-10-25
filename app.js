'use strict'

alert('Welcome! Get ready to play a game to learn more about Carmen.');

const username = prompt('But first what\s your name?');
console.log('user said their name was:' + username);
alert('Hi ' + username + ' Get ready to start playing. Have fun!')

//Question 1: prompt('Does Carmen like rainbows?');
const rainbows=prompt('Does Carmen like rainbows?');
console.log('user said response to rainbows:' + rainbows);
if (rainbows.toLowerCase() === 'yes'|| rainbows.toLowerCase()=== 'YES' || rainbows.toLowerCase()=== 'Y' || rainbows.toLowerCase() ==='y'){
    alert('Nicely done ' + username + ' Carmen does like rainbows');
}
 else if (rainbows.toLowerCase() === 'no' || rainbows.toLowerCase()=== 'NO'|| rainbows.toLowerCase() === 'n' || rainbows.toLowerCase() === 'N')
    alert('Sorry ' + username + ' Carmen does like rainbows');
 


//Question 2: prompt('Is her natural hair color blue?');
const haircolor=prompt('Is Carmen\s haircolor blue?');
console.log('user said response to haircolor:' + haircolor);
if (haircolor.toLowerCase () === 'yes' || haircolor.toLowerCase () === 'y'){
    alert('Sorry ' + username + ' Carmen\s haircolor is not blue right now');
} else if (haircolor.toLowerCase () === 'no' || haircolor.toLowerCase () === 'n')
    alert('Correct ' + username + '. Carmen\s hair is not blue');


//Questions 3: prompt('Does she like flowers?')

const flowers=prompt('Does Carmen like flowers?');
console.log('user said response to flowers was:' + flowers);
if (flowers.toLowerCase () === 'yes' || flowers.toLowerCase () === 'y'){
    alert('You got it! ' + username + ' Carmen does like flowers');
} else if (flowers.toLowerCase () === 'no' || flowers.toLowerCase () === 'n')
    alert(username + ' Who doesn\t like flowers');

//Questions 4: prompt('Does she own a white car?')
const whiteCar=prompt('Does Carmen own a white car?');
console.log('user said response to color of car:' + whiteCar);
if (whiteCar.toLowerCase () === 'yes' || whiteCar.toLowerCase () === 'y'){
    alert('That\s right ' + username + ' Carmen does own a white car');
} else if (whiteCar.toLowerCase () === 'no' || whiteCar.toLowerCase () === 'n')
    alert('Sorry' + username + ' Carmen does drive a white car');

//Question 5: prompt('Is she a unicorn?')
const unicorn=prompt('Is Carmen a unicorn?');
console.log('user response to unicorn question was:' + unicorn);
if (unicorn.toLowerCase () === 'yes' || unicorn.toLowerCase () === 'y'){
    alert('Oh ' + username + ' of course she is not a unicorn');
} else if (unicorn.toLowerCase () === 'no' || unicorn.toLowerCase () === 'n')
    alert(username + ' You are correct, she is not a unicorn');

    alert(username + ' Thank you for playing! Have a nice day.')