document.getElementById('studentForm').addEventListener('submit',function(e){
    e.preventDefault();

    const clearErrors=()=>{
        document.querySelectorAll('.error').forEach(span=>span.textContent='');
        document.querySelectorAll('input, select').forEach(el=>el.classList.remove('invalid'));
    };

    clearErrors();

    const name=document.getElementById('name').value.trim();
    const address=document.getElementById('address').value.trim();
    const city=document.getElementById('city').value.trim();
    const pincode=document.getElementById('pincode').value.trim();
    const state=document.getElementById('state').value;
    const gender=document.getElementById('gender').value;
    const mobile=document.getElementById('mobile').value.trim();
    const email=document.getElementById('email').value.trim();

    let isValid=true;

    if(!name||!/^[A-Za-z\s]+$/.test(name)){
        document.getElementById('nameError').textContent="Please enter a valid name.";
        document.getElementById('name').classList.add('invalid');
        isValid=false;
    }

    if(!address){
        document.getElementById('addressError').textContent="Address cannot be empty.";
        document.getElementById('address').classList.add('invalid');
        isValid=false;
    }

    if(!city||!/^[A-Za-z\s]+$/.test(city)){
        document.getElementById('cityError').textContent="Please enter a valid city.";
        document.getElementById('city').classList.add('invalid');
        isValid=false;
    }

    if(!pincode||!/^\d{6}$/.test(pincode)) {
        document.getElementById('pincodeError').textContent="Please enter a valid 6-digit pin code.";
        document.getElementById('pincode').classList.add('invalid');
        isValid=false;
    }

    if(!state){
        document.getElementById('stateError').textContent="Please select a state.";
        document.getElementById('state').classList.add('invalid');
        isValid=false;
    }

    if(!gender){
        document.getElementById('genderError').textContent="Please select a gender.";
        document.getElementById('gender').classList.add('invalid');
        isValid=false;
    }

    if(!mobile||!/^[6-9]\d{9}$/.test(mobile)){
        document.getElementById('mobileError').textContent="Enter a valid 10-digit mobile number.";
        document.getElementById('mobile').classList.add('invalid');
        isValid=false;
    }

    if(!email||!/^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.com$/.test(email)){
        document.getElementById('emailError').textContent="Please check your email";
        document.getElementById('email').classList.add('invalid');
        isValid=false;
    }

    if(isValid){
        const firstName=name.split(' ')[0];
        localStorage.setItem('studentName',firstName);
        window.location.href='success.html';
    }
});