
const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const labels = document.querySelectorAll('.form-control label')

    labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
    })

function signup (e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Registered Successfully")
}

