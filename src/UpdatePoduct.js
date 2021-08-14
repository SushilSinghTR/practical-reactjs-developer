import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

const UpdateProduct = (props) => {

    const [data, setData] = useState([])//data hold result of fetched api

    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    useEffect(async () => {
        let result = await fetch("http://localhost:3000/students/" + props.match.params.id)
        result = await result.json()
        setData(result)
        setName(result.name)
        setDob(result.dob)
        setAge(result.age)//all 4 state will appearon  the page  after page will load completely
        setGender(result.gender)//all 4 state will appearon  the page  after page will load completely
    }, [])

    async function editProduct(id) {
        alert("Data updated in the list")

        let item = { name, dob, age, gender }
        let result = await fetch("http://localhost:3000/students/" + id, {
            method: "PUT",//using post method  here  to push the code
            headers: {//meta daata setup for pushing data to api
                "Content-Type": "application/json",
                "Accept": "application/json"

            },

            body: JSON.stringify(item)// item is the form data the we push in api body

        })
        result = await result.json();
        console.warn("result", result)
        // localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/add")
    }


    return (
        <div className="form-control ">

            <h2 className="bg-primary text-white text-center ">Update Student details</h2>
            Name <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={data.name} /><br /><br />
            DOB <input type="text" onChange={(e) => setDob(e.target.value)} defaultValue={data.dob} />
            <span><input type="date" onChange={(e) => setDob(e.target.value)} /></span><br /><br />
            Age<input type="text" onChange={(e) => setAge(e.target.value)} defaultValue={data.age} /><br /><br />
            Gender <input  onChange={(e) => setGender(e.target.value)} defaultValue={data.gender} /><br /><br />
            <input type="radio" name="gender" onChange={(e) => setAge(e.target.value)} value="male"/> Male<br/>
                <input type="radio" name="gender"onChange={(e) => setAge(e.target.value)} value="female"/> Female<br/>
                    <input type="radio" name="gender" onChange={(e) => setAge(e.target.value)} value="other"/> Other<br/>

                        <button className="btn btn-success " onClick={() => editProduct(data.id)} >Update</button>

        </div>
                    )
}

                    export default withRouter(UpdateProduct)
