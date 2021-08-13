const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const pcode = document.getElementById('pcode');
const pay = document.getElementById('pay');
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
const box = document.getElementById('hidden-box');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const pcodeValue = pcode.value.trim();
    const payValue = pcode.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
    var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
    if(regEx.test(pcodeValue))
    {
        setSuccessFor(pcode);
    }
    else if(pcodeValue === '')
    {
        setErrorFor(pcode, 'Postal code cannot be blank');
    }
    else{
        setErrorFor(pcode, 'Invalid postal code')
    }

    var html = '<div class="form-control hide" id="hide"><label for="pay">Hourly Rate</label><input oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" type="number" placeholder="45" id="pay"/><i class="fas fa-check-circle"></i><i class="fas fa-exclamation-circle"></i><small>Error message</small></div>';
    if (radio3.checked) {
        box.insertAdjacentHTML("beforeend",html);
    }
    else if(radio1.checked || radio2.checked)
    {
        box.remove();
    }

    var regPay = /^[0-9][0-9][0-9]$/
    if(regPay.test(payValue))
    {
        setSuccessFor(pay);
    }
    else if(payValue === '')
    {
        setErrorFor(pay,'Cannot be blank');
    }
    else
    {
        setErrorFor(pay, 'Invalid Value');
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// JS for buttons RESUME and CONTACT

let about = document.querySelector(".about-info");
let cntform = document.querySelector(".container");


