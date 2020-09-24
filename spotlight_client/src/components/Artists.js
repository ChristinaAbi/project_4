import React from 'react';

export default function Artists (props) {
    return (
         <div>
            {props.artists.map( artist => {
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