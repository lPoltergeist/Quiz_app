import React from 'react';

<link rel="stylesheet" type="text/css" href="index.css"/>;

const Questionaire = ( { showAnswer, handleAnswer, handleNextQuestion, data: {question, correct_answer, answer}, }) => {

 
   


return(

<div >
<div class="bg-white  text-red-600 p-10 rounded-lg shadow-md">
<h2 className='text-2xl font-serif font-semibold' dangerouslySetInnerHTML={{__html: question }}/>

</div>
<div className='flex mt-4 space-x-4'>   
{answer.map((answer, idx) => {
  const textColor = showAnswer ? answer === correct_answer ? 'text-green-600' : 'text-red-700' : 'text-red-500';

  

return( 
<button id='anwser' className={`${textColor}  w-1/2 text-2xl font-serif font-semibold  p-4 bg-white rounded  shadow-2xl `} onClick={() => 
handleAnswer(answer)} 
dangerouslySetInnerHTML={{ __html: answer }} 
/>
  );
})}
</div>
{showAnswer && ( <button onClick={handleNextQuestion} className=' flex flex-col w-1/6 font-serif bg-red-700 text-white p-4 font-semibold rounded shadow mt-6'> Next </button>)}

</div> 
);

};



export default Questionaire;
