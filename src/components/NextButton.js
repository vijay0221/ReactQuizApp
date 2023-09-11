function NextButton({dispatch,answer,index,numQuestions,status}) {
  if(answer===null) return null;

 if(index<numQuestions-1) return (
    <button className="btn btn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
  )

  if(index===numQuestions-1){
    return <button className="btn btn-ui" onClick={()=>dispatch({type:"finish"})}>Next</button>
    
  }

 
}

export default NextButton
