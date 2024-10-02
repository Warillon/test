function findCoordinates() {
    const number = document.getElementById('numberInput').value;
    
    fetch(`http://ton-backend-url/find/${number}`)
        .then(response => response.json())
        .then(data => {
            const { before, match, after } = data;
            document.getElementById('result').innerHTML = `
                ${before}<span class="highlight">${match}</span>${after}
            `;
        })
        .catch(error => console.error('Error:', error));
}
