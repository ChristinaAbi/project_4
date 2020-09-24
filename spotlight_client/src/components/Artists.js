import React , {useState, useEffect } from 'react';

export default function Artists (props) {
    const [artists, setArtists] = useState([])
    const getArtists = async () => {
        try {
            const response = await fetch('http://localhost:3000/artists');
            const data = await response.json();
            console.log(data)
            setArtists(data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        (
            async function (){
                await getArtists()
            }
        )()
    }, []);
    return (
         <div>
            {artists.map( artist => {
                return (
                    <div key={artist.id} className="artist">
                        <h2>
                            {artist.name}
                        </h2>
                        <p>
                            Biography: {artist.biography}
                        </p>
                        <p>
                            Age: {artist.age}
                        </p>
                        <p>
                            Location: {artist.location}
                        </p>
                    </div>
                )
            })}
         </div>
    )
}