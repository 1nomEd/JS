
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
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [ ... players1, ... players2];
console.log(allPlayers);

const players1Final = [ ...players1, 'Thiago', 'Coutinho', 'Periscic' ];

const {
    oods: {team1, x: draw, team2},
} = game;
console.log(team1, draw, team2);

const printGoal = function( ...players){
    console.log(players);
    console.log('${players.length} Vào vào và đó là Lê Văn Đỗ Kim');
};

//printGoal('Lê', 'Văn', 'Đ��', 'Kim');
printGoal( ...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win'); 
team1 > team2 && console.log('Team 2 is more likely to win'); 


//có 3 các khai báo hàm
// 1. Hàm khai báo - Declaration function
// function getTeamMenber(){

// }

// // 2. Hàm biểu thức - Expressopm function
// const getTeamMenber = function(){

// }

// // 3. Arrow function (gần giống cái 2)
// const getTeamMenber = () => {

// }
//Concept
// 1. First class function
// Gán 1 hàm vào giá trị của 1 biến

// 2. Higher order function
const reserve = ["Coutinho","Perisic" ]
const getTeamMember = function (team){
    if(team =="team1"){
        return team1
    }else {
        return team2
    }
 }
 function getAllTeamMembers(teamMembers, reserve){
    return [teamMembers, ...reserve]

}
getAllTeamMembers(getTeamMembers(team1), ["Countinho","Pavard"])