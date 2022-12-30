//MarkTwo: CLI app Quiz on Shaktiman

//Install dependencies
var readlineSync=require('readline-sync');


//variables
var score=0;
var highScores=
[
  {
    name:'Rohit',
    score:'6'
  },
    {
    name:'Loukik',
    score:'5'
  },
  {
    name:'Ajit',
    score:'4'
  }
]

//function to draw separater line
function line(){
  console.log('------------------------');
}

//Defining play function

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if (userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log('Right Answer.');
    score = score+1;
  }
  else
  {
    console.log('Wrong Answer.');
  }
  console.log('Current score is '+score);
  line();
}


//Get user's name and welcome 
var userName=readlineSync.question("May I know your name? ");

console.log('Welcome '+userName+' to Shaktimaan quiz');
line()

//Question object
var questions=
[
  {
    question:"1. What is the name of the alter ego of Shaktimaan?\nA.	Pandit Gangadhar Vidhyadhar Mayadhar Omkarnath Shastri\nB.	Gangadhar Pandit\nC.	Gangadhar Mayadhar Shastri\nD.	Gangadhar Mayadhar Vidhyadhar Omkarnath Shastri\n",
    answer:'A'
  },
  {
    question:"How does Shaktimaan become a superhuman?\nA.	By meditation\nB.	By five elements of nature\nC.	By meditation and five elements of nature\nD.	By magic\n",
    answer:'C'
  },
  {
    question:"What is the profession of Shaktimaan’s alter ego?\nA.	Photographer\nB.	Nature Photographer\nC.	Wildlife photographer\nD.	Newspaper Photographer\n",
    answer:'D'
  },
  {
    question:"What is the name of the reporter who loves Shaktimaan?\nA.	Geeta Vishwas\nB.	Sunita Vishwas\nC.	Geeta Kumari\nD.	Sunita Geeta\n",
    answer:'A'
  },
  {
    question:"What is the pledge of Shaktimaan?\nA.	To eradicate corruption from society\nB.	To help the people of society\nC.	To fight the evil\nD.	To finish corruption and injustice in society \n",
    answer:'D'
  },
  {
    question:"What is the name of Shaktimaan’s enemy?\nA.	Gangadhar\nB.	Vishwas\nC.	Tamraj Kilvish\nD.	Geeta Vishwas\n",
    answer:'C'
  },
  {
    question:"Which values does Shaktimaan follow?\nA.	Morals and ethical values of truth\nB.	Non-Violence\nC.	Values mentioned in Holy book of Bhagavad Gita\nD.	All of the above\n",
    answer:'D'
  },
  {
    question:"Who gives Shaktimaan his heroic name?\nA.	Pandit Gangadhar\nB.	Mahaguru\nC.	Geeta Vishwas\nD.	Dr.Jaikaal\n",
    answer:'C'
  },
  {
    question:"Who is Shaktimaan?\nA.	Reincarnation of Lord Shiva\nB.	Reincarnation of Lord Vishnu’\nC.	Reincarnation of Shri Satya\nD.	Reincarnation of Lord Ganesh\n",
    answer:'C'
  },
  {
    question:"How does Shaktimaan transport himself from one place to another?\nA.	By swirling with his one hand up in the air\nB.	By running and flying in the air\nC.	By flying in the air\nD.	By disappearing magically\n",
    answer:'C'
  }
]

//calling play() function

for (i=0; i<questions.length;i++)
{
  currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

//Final score 
console.log('Yay, You finished the game.');
console.log('Your score is '+score);
line();

//Display High scorers 
console.log('High scorers')
for(i=0;i<highScores.length;i++)
{
  currentHighScorer=highScores[i];
  console.log(currentHighScorer.name+':'+currentHighScorer.score);
}
line();

//check wheather user has beaten high score
for (i=0;i<highScores.length;i++)
{
  currentHighScorer=highScores[i];

  if(score>currentHighScorer.score)
  {
    console.log('Congratualations!, You have beaten '+currentHighScorer.name);
    console.log('Please send me screenshot of this to add your name to High Scorers');
    break;
  }
}
