let result;
// const baseUrl = "http://127.0.0.1:8000/"

const getDest = async()=> {

    document.getElementById('price').style.display = 'none';
    document.getElementsByClassName('book').style.display = 'none';

    const fromCity = document.getElementById('from')

    const where = document.getElementById('where')

    let domain = window.location.hostname;

    const destUrl = `https://${domain}/users/airportDest?dest=${fromCity.value}`;


    const response = await fetch(destUrl)
    result = await response.json()

    where.innerHTML = ''
   
    const op = document.createElement('option')
        op.value = 'none'
        op.innerText = 'Select A City'

        where.appendChild(op)

    for(let i of result.dest)
    {
        const op = document.createElement('option')
        op.value = i.id
        op.innerText = i.to

        where.appendChild(op)
    }

}


const getPrice = async() => {
    const where = document.getElementById('where').value;

    for(let i of result.dest )
    {
        if(i.id === where)
        {
            document.getElementById('price').style.display = 'flex';
            document.getElementById('price').style.justifyContent = 'space-between'
            document.getElementById('night').value = `£ ${i.nightRate}`;
            document.getElementById('day').value = `£ ${i.dayRate}`;
            document.getElementsByClassName('book').style.display = 'block';
        }
        
    }
}