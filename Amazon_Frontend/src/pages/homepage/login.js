import { useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react-dom";
import { useNavigate } from "react-router-dom";




const Login = () => {

    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    const userAdd = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:1400/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                "email": e.target[0].value,
                "password": e.target[1].value
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        // console.log(data)
        if(data.status === "true"){
            localStorage.setItem("authTokens",data.authToken)
            navigate('/');

        }
        else alert(data.msg)
    }

    return (
        <div id="signup" className="container">
            <form onSubmit={userAdd}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={(e) => { setUserEmail(e.target.value) }} required /><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => { setUserPassword(e.target.value) }} required /><br></br>
                <button>Submit</button>
                <Link to="/login"><button>Already a user</button></Link>
            </form>
        </div>
    )
}


export default Login