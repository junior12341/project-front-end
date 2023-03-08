import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        fetch("https://project-management-backend-wtx2.onrender.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                console.log('Welcome')
                navigate("/landing");
                setIsLoading(false);
              });
            } else {
              console.log("email or password incorrect");
            }
          });

    };
    return ( 
        <div className="login-body">
        <div className="show-body">
            <h1>
                <Link to="/" className="return-home">
                <i className="fas fa-project-diagram" id="project-logo"></i><span className="logo-name">Project Manager</span>
                </Link>
            </h1>
            <h2 className="h2-login">Log in </h2>
            <div className="form-div">
                <form action="" className="login-form" onSubmit={(e) => handleLogin(e)}>

                    
                    <div className="login-entries">
                        <div>
                            <div>
                                <div className="username-entry">
                                    <label htmlFor="" className="username-label"> Enter Username</label>
                                </div>
                                <div className="placeholder-username">
                                    <input 
                                    type="text" 
                                    name="username"
                                    placeholder="username"  
                                    className="input-username"
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>

                                <div className="password-entry">
                                    <label htmlFor="" className="password-label"> Enter Password</label>
                                </div>
                                <div className="placeholder-password">
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password" 
                                    className="input-password"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        {!isLoading &&
                        <button type="submit" className="submit-signup">
                            {" "}
                                <div className="get-started-submission">Continue</div>

                        </button>}
                        {isLoading && <button type="submit" className="submit-signup" disabled>
                            {" "}
                                <div className="get-started-submission">Logging In</div>

                        </button>}
                    </div>
                    

                </form>

                <div className="already-logged-in">
                    <p>
                        Don't have an account?
                        <Link href="/login" className="log-get-started"> Sign up</Link>
                    </p>
                    
                </div>

            </div>

        </div>
    </div>
     );
}
 
export default Login;