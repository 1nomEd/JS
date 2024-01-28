const game = {
    team1: 'Bayern Mucnich',
    team2: 'Real Madrid',

    players: [
        [
            'Neuer',
            'Pavard',
            'Coman',
            'Alaba',
            'Kimich',
            'Goretzka',
            'Muller',
            'Gnarby',
            'Lewandowski',
            'Davies',
            'Martinez',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }   
};

//loop
//for of
// const [team1,team2] = game.players;
// for(let player of team1){
//     console.log(player);
// }

//for in
const [team1,team2] = game.players;
for(let player in team1){
    console.log(player);
}