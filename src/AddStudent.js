import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'


const AddStudent = () => {

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const history=useHistory()


   async function getData() {
        let item = { name, dob, age,gender }
        console.log(item)
        //iss code block me kuch modification krke addStudentAddStudent page ko working banana hai

        let result = await fetch("http://localhost:3000/students/", {
            method: "POST",//using post method  here  to push the code
            headers: {//meta daata setup for pushing data to api
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)// item is the form data the we push in api body

        })
        result = await result.json();
        console.warn("result", result)
        localStorage.setItem("addStudentAddStudent", JSON.stringify(result))
        history.push("/add")



    }




    return (
        <div>
            <h1 className="col ml-6 text-primary text-center">Add new student</h1>
            
            <div className="form col-sm-4">

                <input type="text" className="form-control" placeholder="name" onChange={(e) => setName(e.target.value)} /><br />
               
             <input   placeholder="Dae of birth" type="text" className="form-control" onChange={(e) => setDob(e.target.value)} />
              <span><input type="date" onChange={(e) => setDob(e.target.value)} /></span><br /><br />
              
                <input type="text" className="form-control" placeholder="Age  " onChange={(e) => setAge(e.target.value)} /><br></br>
                <input type="text" className="form-control" placeholder="Gender  " onChange={(e) => setGender(e.target.value)} />
                <br></br>
                <button className="btn btn-primary " onClick={getData} >Add product </button>

            </div>
        </div>
    )
}

export default AddStudent
