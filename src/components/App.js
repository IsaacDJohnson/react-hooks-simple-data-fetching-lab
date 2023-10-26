// create your App component here
// create your App component here
import React, {useEffect, useState} from 'react'

function App(){

    const [dogs, setDogs] = useState(<p>Loading...</p>)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => setDogs(<img src={data.message} alt='A Random Dog'/>))
    }, [])

    return (
        <div>
            {dogs}
        </div>
    )
}

export default App;