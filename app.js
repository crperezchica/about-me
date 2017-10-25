'use strict'

alert('Welcome! Get ready to play a game to learn more about Carmen.');

const username = prompt('But first what\s your name?');
console.log('user said their name was:' + username);
alert('Hi ' + username + ' Get ready to start playing. Have fun!')

//prompt('Does Carmen like rainbows?');
const rainbows=prompt('Does Carmen like rainbows?');
console.log('user said response to rainbows:' + rainbows);
if (rainbows.toLowerCase() === 'yes'|| rainbows.toLowerCase()=== 'YES' || rainbows.toLowerCase()=== 'Y' || rainbows.toLowerCase() ==='y'){
    alert('Nicely done ' + username + ' Carmen does like rainbows');
}
 else if (rainbows.toLowerCase() === 'no' || rainbows.toLowerCase()=== 'NO'|| rainbows.toLowerCase() === 'n' || rainbows.toLowerCase() === 'N')
    alert('Sorry ' + username + ' Carmen does like rainbows');
 


//prompt('Is her natural hair color blue?');
const haircolor=prompt('Is Carmen\s haircolor blue?');
console.log('user said response to haircolor:' + haircolor);
if (haircolor.toLowerCase () === 'yes' || haircolor.toLowerCase () === 'y'){
    alert('Sorry ' + username + ' Carmen\s haircolor is not blue right now');
} else if (haircolor.toLowerCase () === 'no' || haircolor.toLowerCase () === 'n')
    alert('You\re correct ' + username + ' Carmen\s hair is not blue');


//prompt('Does she like flowers?')

const flowers=prompt('Does Carmen like flowers?');
console.log('user said response to flowers was:' + flowers);
if (flowers.toLowerCase () === 'yes' || flowers.toLowerCase () === 'y'){
    alert('You got it ' + username + ' Carmen does like flowers');
} else if (flowers.toLowerCase () === 'no' || flowers.toLowerCase () === 'n')
    alert(username + ' Who doesn\t like flowers');

//prompt('Does she own a white car?')
//prompt('Is she a unicorn?')