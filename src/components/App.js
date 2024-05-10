import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestion]=useState([])
  function getData(){
    fetch('http://localhost:4000/questions')
    .then(resp=>resp.json())
    .then(data=>setQuestion(data))
    .catch(err=>console.log(err))
    return 
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm getData={getData} /> : <QuestionList questions={questions} getData={getData} />}
    </main>
  );
}

export default App;