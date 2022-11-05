fetch('/api/')
    .then(async function(res) {
        var data = await res.json();
        document.getElementById('unix').innerText = data.unix;
        document.getElementById('utc').innerText = data.utc;
    })
    .catch(function () {
        document.getElementById('now').remove();
    });
