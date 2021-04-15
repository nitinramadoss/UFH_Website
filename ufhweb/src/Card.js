import React from 'react'

export default function Card() {
    var cardObjects = [{name: "Gabe Escano", mlh_points: 100, wins: 5}, {name: "Joe Wilson", mlh_points: 100, wins: 4}, {name: "Zeke Kauffman", mlh_points: 100, wins: 3}, {name: "Sohil", mlh_points: 30, wins: 1}, {name: "Nitin Ramadoss", mlh_points: 300, wins: 10}]
    cardObjects.sort((a, b) => (a.mlh_points < b.mlh_points) ? 1: (a.mlh_points === b.mlh_points) ? ((a.wins < b.wins) ? 1: -1) : -1)
    return (
    <>
        Hackathon Leaderboard
        <div class="container">
            <table>
                <thead>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Wins</th>
                    <th>MLH Points</th>
                </thead>
                <tbody>
                    <tr>
                        <td>#1</td>
                        <td>{cardObjects[0].name}</td>
                        <td>{cardObjects[0].wins}</td>
                        <td>{cardObjects[0].mlh_points}</td>
                    </tr>
                    <tr>
                        <td>#2</td>
                        <td>{cardObjects[1].name}</td>
                        <td>{cardObjects[1].wins}</td>
                        <td>{cardObjects[1].mlh_points}</td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>{cardObjects[2].name}</td>
                        <td>{cardObjects[2].wins}</td>
                        <td>{cardObjects[2].mlh_points}</td>
                    </tr>
                    <tr>
                        <td>#4</td>
                        <td>{cardObjects[3].name}</td>
                        <td>{cardObjects[3].wins}</td>
                        <td>{cardObjects[3].mlh_points}</td>
                    </tr>
                    <tr>
                        <td>#5</td>
                        <td>{cardObjects[4].name}</td>
                        <td>{cardObjects[4].wins}</td>
                        <td>{cardObjects[4].mlh_points}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
}
