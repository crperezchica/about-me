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
console.log('user said response to haircolor was:' + haircolor);
if (haircolor === 'yes' || haircolor === 'y'){
    alert(username + ', my haircolor is not blue today.');
} else if (haircolor === 'no' || haircolor === 'n')
    alert(username + ', you are right. My haircolor is not blue');


//Questions 3: prompt('Do I like to travel?') = true

const travel = prompt(username + ', here goes another question. Do I like to travel?').toLowerCase();
console.log('user said response to travels was:' + travel);
if (travel === 'yes' || travel === 'y'){
    alert('You are right. I enjoy traveling.');
} else if (travel === 'no' || travel === 'n')
    alert('Who does not like to travel.');

//Questions 4: prompt('Do I have children?') = True
const children = prompt(username + ', do you think I have children?').toLowerCase();
console.log('user said response to children was:' + children);
if (children === 'yes' || children === 'y'){
    alert('Yes. I have two beautiful supergirls/princesses. It depends on the day you ask.');
} else if (children === 'no' || children === 'n')
    alert('Actually, I do have two amazing little supergirls/princesses.');

//Question 5: prompt('Am I a unicorn') = no need to answer
const unicorn = prompt(username + ', am I a unicorn?').toLowerCase();
console.log('user response to unicorn question was:' + unicorn);
if (unicorn === 'yes' || unicorn === 'y'){
    alert('Oh ' + username + ', of course I am not a unicorn.');
} else if ('Nope. Not a unicorn today.');

//Question 6: of How many siblings do I have? will require prompt, for loop and alert



alert(username + ', Thank you for playing! Have a nice day.');