import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const StudentList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {//note:-agar useEffect k andar ham api call krne pe =>onpage koi operation like delete/edit pe api update ni hogi and deleted/update item show hota rehega

        getData()
    }, [])


    async function deleteOperation(id) {
        alert("This item will be deleted")
        let result = await fetch("http://localhost:3000/students/" + id, {
            method: "DELETE"
        })
        result= await result.json()
        console.warn(result)
        getData()
    }

    async function getData() {
        let result = await fetch("http://localhost:3000/students/")
        result = await result.json();
        setData(result)
        console.warn("data", data)
    }
 return (
        <div>
            <h1 className="bg-info display-6 text-center">Student management </h1>
            <div className="  " >
                {/* buttom to add new student */}
            <Link   to="/add" className="btn btn-primary mx-3 " >Add new student </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>S.No</th>
                        <th>Name </th>
                        <th>Date of birth</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td id="red" >{item.age}</td>
                                <td>{item.gender}</td>
                                <td>   <span type="button" className="btn btn-danger" onClick={() => deleteOperation(item.id)}>Delete</span>
                                <Link to={"updateproduct/"+item.id }><span type="button" className="btn btn-primary mx-3">Edit</span> </Link></td>
                            </tr>)
                    }

                </tbody>
            </Table>
            
        </div>
    )
}

export default StudentList
