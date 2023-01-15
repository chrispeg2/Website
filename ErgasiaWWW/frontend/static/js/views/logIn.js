import AbstractView from "./view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Log-In");
    }

    async getHtml() {
        return `
            <form>
            
                <div class="container">
                <div id="message"></div>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" id="username" required>
            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="password"  required>
                    
                <button id="login" onclick="validate()">Login</button>
                
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
                </div>
            
                <div class="container" style="background-color: #252231">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
            
        `;
    }
}