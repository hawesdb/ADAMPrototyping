function changeLogin()
{
	const emailFields = document.getElementById('email_pass');
		
	if(document.getElementById('selectLogin').value == "email_pass")
	{
		emailFields.style.visibility = "visible";
	}
	else
	{
		emailFields.style.visibility = "hidden";
	}
}	

function loginEvent()
{
	if(document.getElementById('selectLogin').value == 'email_pass')
	{
		const email = document.getElementById('txtEmail');
		const pass = document.getElementById('txtPassword');
			
		firebase.auth().signInWithEmailAndPassword(email.value, pass.value).then(function(result) {
			var user = result.user;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
		});
	}
	else if(document.getElementById('selectLogin').value == 'facebook')
	{
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().useDeviceLanguage();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			var token = result.credential.accessToken;
			var user = result.user;
			}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
		});
	}
	else if(document.getElementById('selectLogin').value == 'google')
	{
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			var token = result.credential.accessToken;
			var user = result.user;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
		});
	}
	else if(document.getElementById('selectLogin').value == 'twitter')
	{
		var provider = new firebase.auth.TwitterAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			var token = result.credential.accessToken;
			var secret = result.credential.secret;
			var user = result.user;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
		});
	}
	else if(document.getElementById('selectLogin').value == 'github')
	{
		var provider = new firebase.auth.GithubAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			var token = result.credential.accessToken;
			var user = result.user;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
		});
	}
	
}

function signupEvent()
{
	if(document.getElementById('selectLogin').value == "email_pass")
	{
		const email = document.getElementById('txtEmail');
		const pass = document.getElementById('txtPassword');
		
		firebase.auth().createUserWithEmailAndPassword(email.value, pass.value).then(function(result) {
			var user = result.user;
			user.displayName = email.value;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
		});
	}
}

function signoutEvent()
{
	firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		});
}