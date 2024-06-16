import React from 'react';
const Login = () =>{
    return(
        <form class="register">
            <h1>Log In</h1>
            <p>Username or email address </p><p> <input type="text"/></p>
            <p>Password </p><p> <input type="text" id="password"/></p>
            <div class="checkbox1"><input type="checkbox" class="checkbox"/><p>Remember me</p></div>
            <p><button class="enregistrer">Log In </button>
            <a href="">Lost your password?</a></p>
	</form>
    )
}
export default Login;