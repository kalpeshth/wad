let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userData = { name, email };

    // Add user to array
    users.push(userData);

    // Save updated array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Simulate AJAX POST request using fetch (for assignment)
    fetch('https://jsonplaceholder.typicode.com/posts', {  // dummy test API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('%cPOST Request Sent (Simulated):', 'color: green; font-weight: bold;', data);
        alert('User registered successfully!');
        window.location.href = 'users.html';
    })
    .catch(error => {
        console.error('POST Error:', error);
        alert('Failed to send data.');
    });
});