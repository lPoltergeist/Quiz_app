import React, { useState, useEffect } from 'react';
import { Questionaire }  from './components'
import { NavLink } from 'react-router-dom';
const API_URL =
'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';

function Medium() {
const [question, setQuestions] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [score, setScore] = useState(0);
const [showAnswer, setShowAnswer] = useState(false);

useEffect(() => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const question = data.results.map((question) => 
    ({...question, answer: [question.correct_answer, ...question.incorrect_answers ,].sort(() => Math.random() -0.5),
    }));
    setQuestions(question);
    
  });
}, []);

const handleAnswer = (answer) => {
if(!showAnswer) { // prevê resposta dupla

  if(answer === question[currentIndex].correct_answer) {
    setScore(score +1);
}
}

setShowAnswer(true);

};


const handleNextQuestion = () => {
  setShowAnswer(false);

  setCurrentIndex(currentIndex + 1);
}


  return question.length > 0 ? (
    <div className='container' >
    {currentIndex >= question.length ? (
      
      <h1 className='text-3xl text-white font-bold'> Your score was {score}! </h1> 
    ) : (
<Questionaire 
data={question[currentIndex]}  
 showAnswer={showAnswer}
 handleNextQuestion={handleNextQuestion}
 handleAnswer={handleAnswer} />
 )}
 <NavLink to='/'> <button className=' flex flex-col   bg-red-700 text-white p-4 font-semibold rounded shadow mt-6'>Return to menu</button> </NavLink>
 </div>
  ) : (
<h2 className='text-2xl text-white font-bold'> Loading </h2>
  )
  }
   


export default Medium;
