import React from 'react'

export default function Card(data) {  
    var cardObjects = data;
    //cardObjects.sort((a, b) => (a.mlh_points < b.mlh_points) ? 1: (a.mlh_points === b.mlh_points) ? ((a.wins < b.wins) ? 1: -1) : -1)

    return (
    <>
        <div class="container">
            <table className = "leaderboard">            
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>MLH Points</th>
                    </tr>

                {cardObjects.data.memberData.map(function(obj, i) {
                    return <tr> 
                        <td > {i+1} </td> 
                        <td> {obj.name}</td> 
                        <td> {obj.wins}</td> 
                        <td> {obj.mlh_points}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    </>
    )
}
