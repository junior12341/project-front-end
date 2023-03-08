import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState ({
        email: "",
        username: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        setIsLoading(true);

        fetch("https://project-management-backend-wtx2.onrender.com/users/signup",{
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((response)=>{
            if(response.ok){
                response.json().then((data) => {
                    localStorage.setItem("Authorization", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    console.log("User added Successfully")
                    navigate("/login");
                    setIsLoading(false)
                  });
            }else{
                console.log("Error in Signup");
            }
        })
    }
    return (  
        <div className="sign-up-body">
            <div className="show-body">
                <h1>
                    <Link to="/" className="return-home">
                    <i className="fas fa-project-diagram" id="project-logo"></i><span className="logo-name">Project Manager</span>
                    </Link>
                </h1>
                <h2 className="h2-signup">Sign Up With Project Manager</h2>
                <div className="form-div">
                    <form  className="sign-up-form" onSubmit={(e) => handleSignUp(e)}>
                        <div className="signup-entries">
                            <div>
                                <div>
                                    <div className="email-entry">
                                        <label htmlFor="" className="email-label"> Enter email to get started</label>
                                    </div>
                                    <div className="placeholder-email">
                                        <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="email address" 
                                        autoComplete="off" 
                                        className="input-email1"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
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
                                <Link to="/login"></Link>
                                <div className="get-started-submission">Get Started</div>

                            </button>}
                            {isLoading && <button type="submit" className="submit-signup" disabled>
                            {" "}
                                <div className="get-started-submission">Redirecting to Login</div>

                        </button>}
                        </div>

                    </form>

                    <div className="already-signed-up">
                        <p>
                            Already have an account?
                            <a href="/login" className="log-get-started"> Log in</a>
                        </p>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}
 
export default Signup;