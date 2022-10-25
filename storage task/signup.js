function setValue(event)
{
    let yourName = document.getElementById('name').value;
    let emailId = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    
    localStorage.setItem("YourName", yourName);
    localStorage.setItem("Email", emailId);
    localStorage.setItem("Password",password);

    alert('Details Saved');
}

function removeValue(event)
{
    localStorage.removeItem("YourName");
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");

    alert('Details Deleted');
}

var submit = document.getElementById('sub');
submit.addEventListener('click',setValue);

var logout = document.getElementById('log');
logout.addEventListener('click',removeValue);

if(localStorage.getItem("YourName")===null)
{
    alert('You are logout');
}
else
{
    alert('You are already login');
}

