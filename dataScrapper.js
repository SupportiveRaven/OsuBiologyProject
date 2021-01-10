let historyContainer = document.querySelector("div[data-page-id='historical']").firstChild
let button = historyContainer.querySelectorAll("button")
button = button[button.length-1]

button.click()

let playedList
let playedMaps

let data = {}

let createSongData = function (acc, pp) {
    return {
        "accuracy": acc,
        "pp": pp
    }
}


let lookupTable = {
        "01": "Flashlight (Radio Edit) HOS' Easy",
        "02": "Snake Eyes Standard",
        "03": "bad guy easy",
        "04": "Stronger Than You -Chara Response- EruJazz's Easy",
        "05": "Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) Nelliel's Easy",
        "06": "Make A Move Easy",
        "11": "We are Number One Normal",
        "12": "Holy Virgin (Nightcore Mix) Dark_Ai's Normal",
        "13": "Tower Of Heaven (You Are Slaves) Normal",
        "14": "Red Like Roses (feat. Casey Lee Williams) Red Rose",
        "15": "Stronger Than You -Chara Response- Normal",
        "16": "bad guy shmik's advanced",
        "21": "Hall of the Mountain King III",
        "22": "Make A Move Normal",
        "23": "Beethoven Virus (Full ver.) aesopl's Hard",
        "24": "Mirror Mirror (Featuring Casey Lee Williams) Advanced",
        "25": "Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) Azunyan's Advanced",
        "26": "MEGALOVANIA Irre's Light Hard",
        "31": "Bad Apple!! Hard",
        "32": "Holy Virgin (Nightcore Mix) Hard",
        "33": "Snake Eyes Advanced",
        "34": "Red Like Roses (feat. Casey Lee Williams) Crimson Rose",
        "35": "Tower Of Heaven (You Are Slaves) Hard",
        "36": "Stronger Than You -Chara Response- Gerolade's Advanced",
        "41": "Quo Vadis Hard",
        "42": "Hall of the Mountain King IV",
        "43": "Get Jinxed Gold",
        "44": "Make A Move Hard",
        "45": "Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) Light Insane",
        "46": "MEGALOVANIA Hard",
        "51": "Infinity (Nightcore Mix) Hard",
        "52": "Mirror Mirror (Featuring Casey Lee Williams) Jinxy's Insane",
        "53": "We are Number One No.1",
        "54": "bad guy bully",
        "55": "Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) Cris' Insane",
        "56": "Tower Of Heaven (You Are Slaves) Another",
        "61": "Get Jinxed Platinum",
        "62": "Hall of the Mountain King V",
        "63": "Red Like Roses (feat. Casey Lee Williams) Crescent Rose",
        "64": "Quo Vadis Extreme",
        "65": "Flashlight (Radio Edit) Insane",
        "66": "Make A Move Collab Insane",
        "71": "Tower Of Heaven (You Are Slaves) Extra",
        "72": "Red Like Roses (feat. Casey Lee Williams) Redzero",
        "73": "Stronger Than You -Chara Response- Voli's Extra",
        "74": "Take a Hint feat. Victoria Justice & Elizabeth Gillies (Speed Up Ver.) I Think You Could Use a Mint",
        "75": "Resurrection By Erection Expert",
        "76": "Hall of the Mountain King VI",
        "81": "Get Jinxed Irrelvis' Diamond",
        "82": "MEGALOVANIA Extra",
        "83": "Tower Of Heaven (You Are Slaves) Heaven",
        "84": "Make a Move (Speed Up Ver.) Chromoxx's Extra",
        "85": "Get Jinxed Master",
        "86": "Shelter Alone Together",
        "91": "Hall of the Mountain King VII",
        "92": "Blue Zenith RLC's Extra",
        "93": "MEGALOVANIA Burn",
        "94": "Get Jinxed Mismagius' Challenger",
        "95": "Make a Move (Speed Up Ver.) Endless Fear",
        "96": "Black Rover (TV Size) Extra",
}

let lookup = function(value) {
    return Object.keys(lookupTable).find(key => lookupTable[key] === value);
}

let parseData = function () {
    playedList = historyContainer.querySelector(".play-detail-list")
    playedMaps = [...playedList.children]
    playedMaps = playedMaps.reverse()

    for (let mapContainer of playedMaps) {
        let timeContainer = mapContainer.querySelector(".play-detail__time")
        let timeAgo = timeContainer.firstChild.innerText.split(" ")

        mapContainer.querySelector(".play-detail__title").lastChild.innerText = ""
        let songName = mapContainer.querySelector(".play-detail__title").innerText  
        let songDifficulty = mapContainer.querySelector(".play-detail__beatmap").innerText

        let accuracy = mapContainer.querySelector(".play-detail__accuracy").innerText.replace(",", ".").replace("%", "")

        let pp = mapContainer.querySelector(".play-detail__pp").firstChild.innerText.replace("pp", "").replace("-", "null")

        songName += " " + songDifficulty
        songID = lookup(songName)

        if (data[songID] == undefined) {
            data[songID] = [createSongData(accuracy, pp)]
        } 

        else {
            data[songID].push(createSongData(accuracy, pp))
        }

        console.log(timeAgo)
        console.log(songName)
        console.log(songDifficulty)
        console.log(accuracy)
        console.log(pp)

        console.log(JSON.stringify(data, null, 2))
    }
}

setTimeout(parseData, 2000)

