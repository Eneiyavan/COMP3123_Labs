/*
Define the App component for the top level of the ReactDOM render
*/

import { useState} from "react";
import Student from "./Student";
// TODO: Import the functional and class componets to render within APP

function App(){
    const [showStudent, setShowStudent] = useState(true)

return (
        <section>
            <h1>Lab Exercise 8 - Week 10: React Lifecycle</h1>
            <button onClick={() => setShowStudent(!showStudent)}>
              {showStudent? "Hide" : "Show"}  Student
            </button>
            {showStudent && <Student studentNumber="111111111"/>}
        </section>
    )
}
export default App