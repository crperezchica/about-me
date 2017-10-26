'use strict';

let score = 0;

alert('Welcome! Get ready to answer seven question to learn more about me.');

const username = prompt('But first what\s your name?');
console.log('user said their name was:' + username);
alert('Hi! ' + username + '. Get ready to start playing. Have fun!');

// //Question 1: prompt('Do I like rainbows?')= true
const rainbows = prompt( username + ', do I like rainbows?').toLowerCase();
console.log('user said response to rainbows:' + rainbows);
if (rainbows === 'yes' || rainbows === 'y' ){
    alert('Nicely done! I do like rainbows.');
    score = score + 1;
console.log('user score to question 1 was:' + score);
}
else if (rainbows === 'no' || rainbows === 'n')
    alert('Sorry ' + username + ' Carmen does like rainbows');

// //Question 2: prompt('Is my hair color blue?') = false
const haircolor = prompt('Is my haircolor blue?').toLowerCase();
console.log('user said response to haircolor was:' + haircolor);
if (haircolor === 'yes' || haircolor === 'y'){
    alert(username + ', my haircolor is not blue today.');
} else if (haircolor === 'no' || haircolor === 'n')
    alert(username + ', you are right. My haircolor is not blue');
score = score + 1;
console.log('user score to question 2 was:' + score);


// //Questions 3: prompt('Do I like to travel?') = true

const travel = prompt(username + ', here goes another question. Do I like to travel?').toLowerCase();
console.log('user said response to travels was:' + travel);
if (travel === 'yes' || travel === 'y'){
    alert('You are right. I enjoy traveling.');
    score = score + 1;
    console.log('user score to question 3 was:' + score); 
} else if (travel === 'no' || travel === 'n')
    alert('Who does not like to travel.');

// //Questions 4: prompt('Do I have children?') = True
const children = prompt(username + ', do you think I have children?').toLowerCase();
console.log('user said response to children was:' + children);
if (children === 'yes' || children === 'y'){
    alert('Yes. I have two beautiful supergirls/princesses.');
    score = score + 1;
    console.log('user score to question 4 was:' + score);
} else if (children === 'no' || children === 'n')
    alert('Actually, I do have two amazing little supergirls/princesses.');

// //Question 5: prompt('Am I a unicorn') = no need to answer
const unicorn = prompt(username + ', am I a unicorn?').toLowerCase();
console.log('user response to unicorn question was:' + unicorn);
if (unicorn === 'yes' || unicorn === 'y'){
    alert('Oh ' + username + ', of course I am not a unicorn.');
} else if ('Nope. Not a unicorn today.');
score = score + 1;
console.log('user score to question 6 was:' + score);

//Question 6: of How many siblings do I have? will require prompt, for loop and alert
let siblings;

//let siblings = prompt (username + ', how many sibling(s) do I have?');
for ( let i = 0; i < 4; i++){
    if ( i === 0 ) {
        siblings = prompt (username + ', how many sibling(s) do I have?');
    }
    else {
        if (siblings < 1 ){
            siblings = prompt('Sorry, too low. Try again.');
            if (i === 3){
                alert('Thank you for trying. But, I only have one sibling.');
            }
               
        } else if (siblings === 1) {
            alert (username + ', you are correct. I only have one sibling.');
            score = score + 1;
            console.log('score up to question 6 was:' + score);
            i = 4;
        }
        else if (siblings > 1){
            siblings = prompt('Sorry, too high. Try again.');
            if (i === 3){
                alert('Thank you for trying. But, I only have one sibling.');
            }
        }
    }
}

// //Question 7: Can you guess a state I have visited
const visitedstates = ['Washington', 'California', 'Florida', 'Ohio', 'North Carolina', 'New Jersey', 'Idaho', 'Utah', 'Maryland','Kansas'].toLowerCase;  
let state;

for (let i = 0; i < 6; i++){
    state = prompt(username + ', can you guess what states I have visited?' ).toLowerCase();
    console.log('what mentioned was:' + visitedstates);
    for (let x = 0; x < visitedstates.length; x++){
        if (state === visitedstates[x]){
            alert('Good guess!');
            x = visitedstates.length + 1;
        }
    }
}


console.log('keeping score' + score);

alert(username + ', Thank you for playing! You scored ' + score + '. But the score does not matter, what matters is that you learned more about me.');