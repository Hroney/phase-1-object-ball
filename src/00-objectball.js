function gameObject() {

    return {
        home: {
            teamName: `Brooklyn Nets`,
            colors: [`Black`, `White`],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: `Charlotte Hornets`,
            colors: [`Turquoise`, `Purple`],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}
const home = Object.keys(gameObject())[0];
const away = Object.keys(gameObject())[1];

function playerNamesArray(homeOrAway) {
    const namesOfPlayers = [];
    if (homeOrAway === home) {
        const objectOfPlayers = gameObject().home.players;
        for (let i = 0; i < Object.keys(objectOfPlayers).length; i++) {
            namesOfPlayers.push(Object.keys(objectOfPlayers)[i]);
        }
        return namesOfPlayers;
    }
    else {
        const objectOfPlayers = gameObject().away.players;
        for (let i = 0; i < Object.keys(objectOfPlayers).length; i++) {
            namesOfPlayers.push(Object.keys(objectOfPlayers)[i]);
        }
        return namesOfPlayers;
    }
}

function numPointsScore(nameOfPlayer) {
    if (gameObject().home.players[nameOfPlayer] === undefined) {
        return gameObject().away.players[nameOfPlayer].points
    }
    else {
        return gameObject().home.players[nameOfPlayer].points
    }
}

function shoeSize(nameOfPlayer) {
    if (gameObject().home.players[nameOfPlayer] === undefined) {
        return gameObject().away.players[nameOfPlayer].shoe
    }
    else {
        return gameObject().home.players[nameOfPlayer].shoe
    }
}

function teamColors(nameOfTeam) {
    if (gameObject().home.teamName === nameOfTeam) {
        return gameObject().home.colors
    }
    else {
        return gameObject().away.colors
    }
}

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(nameOfTeam) {
    const jerseyNums = [];
    if (nameOfTeam === gameObject().home.teamName) {
        for (let i = 0; i < playerNamesArray(home).length; i++) {
            jerseyNums.push(gameObject().home.players[playerNamesArray(home)[i]].number)
        }
    }
    else if (nameOfTeam === gameObject().away.teamName) {
        for (let i = 0; i < playerNamesArray(away).length; i++) {
            jerseyNums.push(gameObject().away.players[playerNamesArray(away)[i]].number)
        }
    }
    return jerseyNums
}


function playerStats(playerName, homeOrAway) {
    if (playerNamesArray(homeOrAway).includes(playerName)) {
        if (homeOrAway === home) {
            let objectToReturn = {};
            for (let i = 0; i < playerNamesArray(home).length; i++) {
                if (playerName === playerNamesArray(home)[i]) {
                    objectToReturn = gameObject().home.players[playerNamesArray(home)[i]]
                }
            }
            return objectToReturn
        }
        else {
            let objectToReturn = {};
            for (let i = 0; i < playerNamesArray(away).length; i++) {
                if (playerName === playerNamesArray(away)[i]) {
                    objectToReturn = gameObject().away.players[playerNamesArray(away)[i]]
                }
            }
            return objectToReturn
        }
    }
}

function bigShoeRebound() {
    let biggestShoeSizeHome = playerStats(playerNamesArray(home)[0], home);
    let biggestShoeSizeAway = playerStats(playerNamesArray(away)[0], away);
    for (let i = 0; i < playerNamesArray(home).length; i++) {
        if (playerStats(playerNamesArray(home)[i], home).shoe > biggestShoeSizeHome.shoe) {
            biggestShoeSizeHome = playerStats(playerNamesArray(home)[i], home);
        }
        if (playerStats(playerNamesArray(away)[i], away).shoe > biggestShoeSizeAway.shoe) {
            biggestShoeSizeHome = playerStats(playerNamesArray(away)[i], away);
        }
    }
    let biggestShoeSize = (biggestShoeSizeAway.shoe > biggestShoeSizeHome.shoe) ? biggestShoeSizeAway : biggestShoeSizeHome;
    return biggestShoeSize.rebounds
}

function mostPoints() {
    let mostPointsHome = playerStats(playerNamesArray(home)[0], home);
    let mostPointsAway = playerStats(playerNamesArray(away)[0], away);
    for (let i = 0; i < playerNamesArray(home).length; i++) {
        if (playerStats(playerNamesArray(home)[i], home).points > mostPointsHome.points) {
            mostPointsHome = playerStats(playerNamesArray(home)[i], home);
        }
        if (playerStats(playerNamesArray(away)[i], away).points > mostPointsAway.points) {
            mostPointsAway = playerStats(playerNamesArray(away)[i], away);
        }
    }
    let mostPointsReturn = (mostPointsAway.points > mostPointsHome.points) ? mostPointsAway : mostPointsHome;
    return mostPointsReturn.points
}

function winningTeam() {
    let mostPointsHome = 0;
    let mostPointsAway = 0;
    for (let i = 0; i < playerNamesArray(home).length; i++) {
        mostPointsHome += playerStats(playerNamesArray(home)[i], home).points;
        mostPointsAway += playerStats(playerNamesArray(away)[0], away).points;
    }
    let mostPointsReturn = (mostPointsAway > mostPointsHome) ? mostPointsAway : mostPointsHome;
    let winningName = (mostPointsAway > mostPointsHome) ? teamNames()[1] : teamNames()[0]
    return winningName
}

function playerWithLongestName() {
    let longestNameHome = playerNamesArray(home)[0];
    let longestNameAway = playerNamesArray(away)[0];
    for (let i = 0; i < playerNamesArray(home).length; i++) {
        if (playerNamesArray(home)[i].length > longestNameHome.length) {
            longestNameHome = playerNamesArray(home)[i];
        }
        if (playerNamesArray(away)[i].length > longestNameAway.length) {
            longestNameAway = playerNamesArray(away)[i];
        }
    }
    let longestName = (longestNameAway.length > longestNameHome.length) ? longestNameAway : longestNameHome;
    return longestName
}

function doesLongNameStealATon() {
    let mostStealsHome = playerStats(playerNamesArray(home)[0], home);
    let mostStealsAway = playerStats(playerNamesArray(away)[0], away);
    for (let i = 0; i < playerNamesArray(home).length; i++) {
        if (playerStats(playerNamesArray(home)[i], home).steals > mostStealsHome.steals) {
            mostStealsHome = playerStats(playerNamesArray(home)[i], home);
        }
        if (playerStats(playerNamesArray(away)[i], away).steals > mostStealsAway.steals) {
            mostStealsAway = playerStats(playerNamesArray(away)[i], away);
        }
    }
    let mostStealsReturn = (mostStealsAway.steals > mostStealsHome.steals) ? mostStealsAway : mostStealsHome;
    let longestPlayersSteals = 0;
    if (playerNamesArray(away).includes(playerWithLongestName())) {
        for (let i = 0; i < playerNamesArray(away).length; i++) {
            if (playerNamesArray(away)[i] === playerWithLongestName()) {
                longestPlayersSteals = playerStats(playerNamesArray(away)[i], away).steals;
            }
        }
    }
    else {
        for (let i = 0; i < playerNamesArray(home).length; i++) {
            if (playerNamesArray(home)[i] === playerWithLongestName()) {
                longestPlayersSteals = playerStats(playerNamesArray(home)[i], home).steals;
            }
        }
    }
    mostStealsReturn = (longestPlayersSteals === mostStealsReturn.steals) ? true : false;
    return mostStealsReturn

}