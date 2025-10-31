```css code for project 
html, body {
    height: 100%;
    margin: 0;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    background: linear-gradient(rgba(10,40,80,0.75), rgba(0,0,0,0.75)),
                url('../assets/bg-bank.jpg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
}

/* Container */
.signin-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 30px 25px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255,255,255,0.15);
    width: 100%;
    max-width: 400px;
    text-align: center;
    animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-15px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Logo */
.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}

.logo img {
    width: 160px;
    height: auto;
    margin-bottom: 15px;
}

.logo h4 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 5px;
}

.logo p {
    font-size: 16px;
    color: #dbe2ec;
}

/* Labels and Inputs */
.form-label {
    color: #dbe2ec;
    font-weight: 500;
    text-align: left;
    display: block;
    margin-bottom: 6px;
}

.form-control {
    background: rgba(255,255,255,0.2);
    border: none;
    color: #fff;
    border-radius: 5px;
    height: 45px;
    margin-bottom: 15px;
    width: 100%;
    padding: 0 10px;
}

.form-control:focus {
    background: rgba(255,255,255,0.3);
    box-shadow: 0 0 8px #2196F3;
    outline: none;
}

/* Placeholder */
.form-control::placeholder {
    color: rgba(255,255,255,0.7);
}

/* Button */
.btn-signin {
    width: 100%;
    height: 45px;
    background: linear-gradient(45deg, #1a73e8, #004aad);
    border: none;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.3s;
    margin-top: 10px;
}

.btn-signin:hover {
    background: linear-gradient(45deg, #004aad, #002f6c);
    box-shadow: 0 0 12px rgba(33,150,243,0.6);
}

/* Footer Links */
.footer-links {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-top: 10px;
}

.footer-links a {
    color: #90caf9;
    text-decoration: none;
}

.footer-links a:hover {
    text-decoration: underline;
}

/* Footer */
.footer {
    margin-top: 25px;
    font-size: 13px;
    color: #cfd8dc;
}

/* Dropdown */
select.form-control {
    color: #fff;
    background: rgba(255,255,255,0.2);
}

select.form-control option {
    color: #000;
    background-color: #fff;
}
```
# signin page 
```
<%@ page contentType="text/html;charset=UTF-8" language="java" %> 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bank CBS - Secure Sign In</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="css/LoginStyle.css">
</head>
<body>
<div class="login-container">
    <div class="bank-brand">
        <img src="idsspl_logo.gif" alt="Bank Logo" class="bank-logo">
        <div class="brand-title">MERCHANTS LIBERAL CO-OP BANK LTD, GADAG</div>
        <div class="brand-sub">Core Banking System - Secure Sign In</div>
    </div>

    <form action="SignInServlet" method="post" autocomplete="off">
        
        <label for="branch_code">Branch Code</label>
        <input type="text" id="branch_code" name="branch_code" class="form-control" required>
        
        <label for="branch_name">Branch Name</label>
        <input type="text" id="branch_name" name="branch_name" class="form-control" required>
        
        <label for="username">User ID</label>
        <input type="text" id="username" name="username" class="form-control" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" class="form-control" required>
        
        <label for="confirm_password">Confirm Password</label>
        <input type="confirm_password" id="confirm_password" name="confirm_password" class="form-control" required>

        <button type="submit" class="btn-login">Sign In</button>

        <div class="help-row">
            <a href="#">Forgot Password?</a>
            <a href="login.jsp">Login ?</a>
        </div>
    </form>

    <div class="login-footer">
        © 2025 Merchants Liberal Co-Op Bank Ltd. All rights reserved.
    </div>
</div>
</body>
</html>
```
