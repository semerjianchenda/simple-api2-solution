document.querySelector('button').addEventListener('click', getDadJokes)


function getDadJokes() {

    let url = `https://api.api-ninjas.com/v1/dadjokes`

    fetch(url, {
        headers: { 'X-Api-Key': 'ucVcTbal/xblIx1vNSUiog==ld81DXmEhEp7qy5i' },
        contentType: 'application/json'
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data[0].joke

        }

        )
}

