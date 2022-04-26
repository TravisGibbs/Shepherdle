var guesses = 1

const data = {
    "Meredith Grey": {
        "special": "General",
        "related": ["George O'Malley", "Derek Shepherd", "Nathan Riggs", "Andrew DeLuca", "Atticus Lincoln"],
        "family": ["Lexie Grey", "Maggie Pierce", "Ellis Grey"],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    "Cristina Yang": {
        "special": "Cardio",
        "related": ["Preston Burke", "Owen Hunt", "Shane Ross"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10]
    },
    "Izzie Stevens": {
        "special": "Intern",
        "related": ["Alex Karev", "George O'Malley"],
        "family": [""],
        "seasons":[1,2,3,4,5,6]
    },
    "George O'Malley": {
        "special": "Intern",
        "related": ["Izzie Stevens", "Meredith Grey", "Callie Torres"],
        "family": [""],
        "seasons":[1,2,3,4,5]
    },
    "Miranda Bailey": {
        "special": "General",
        "related": ["Benjamin Warren"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    "Richard Webber": {
        "special": "General",
        "related": ["Catherine Fox", "Ellis Grey"],
        "family": ["Maggie Pierce"],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    "Alex Karev": {
        "special": "Peds",
        "related": ["Izzie Stevens", "Jo Wilson", "Lexie Grey", "Addison Montgomery"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    "Preston Burke": {
        "special": "Cardio",
        "related": ["Cristina Yang"],
        "family": [""],
        "seasons":[1,2,3]
    },
    "Derek Shepherd": {
        "special": "Nuero",
        "related": ["Addison Montgomery", "Meredith Grey"],
        "family": ["Amelia Shepherd"],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11]
    },
    "Addison Montgomery": {
        "special": "OB",
        "related": ["Derek Shepherd", "Mark Sloan", "Alex Karev"],
        "family": [""],
        "seasons":[1,2,3]
    },
    "Callie Torres": {
        "special": "Ortho",
        "related": ["George O'Malley", "Arizona Robbins", "Penny Blake", "Erica Hahn"],
        "family": [""],
        "seasons":[3,4,5,6,7,8,9,10,11,12]
    },
    "Mark Sloan": {
        "special": "Plastics",
        "related": ["Lexie Grey", "Addison Montgomery", "Callie Torres", "Teddy Altman"],
        "family": [""],
        "seasons":[3,4,5,6,7,8,9]
    },
    "Lexie Grey": {
        "special": "Intern",
        "related": ["Lexie Grey", "Addison Montgomery", "Callie Torres", "Jackson Avery"],
        "family": ["Lexie Grey", "Maggie Pierce", "Ellis Grey"],
        "seasons":[3,4,5,6,7,8,9]
    },
    "Erica Hahn": {
        "special": "Cardio",
        "related": ["Callie Torres"],
        "family": [""],
        "seasons":[3,4,5]
    },
    "Owen Hunt": {
        "special": "Trauma",
        "related": ["Cristina Yang", "Amelia Shepherd", "Teddy Altman", "Carina DeLuca"],
        "family": [""],
        "seasons":[5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    },
    "Arizona Robbins": {
        "special": "OB",
        "related": ["Callie Torres", "Leah Murphy", "Eliza Minnick", "Carina DeLuca"],
        "family": [""],
        "seasons":[6,7,8,9,10,11,12,13,14]
    },
    "Teddy Altman": {
        "special": "Cardio",
        "related": ["Owen Hunt", "Thomas Koracick", "Mark Sloan"],
        "family": [""],
        "seasons":[6,7,8,15,16,17,18]
    },
    "April Kepner": {
        "special": "Trauma",
        "related": ["Jackson Avery", "Thomas Koracick"],
        "family": [""],
        "seasons":[7,8,9,10,11,12,13]
    },
    "Jackson Avery": {
        "special": "Plastics",
        "related": ["April Kepner", "Lexie Grey", "Maggie Pierce", "Stephanie Edwards", "Jo Wilson"],
        "family": ["Catherine Fox"],
        "seasons":[7,8,9,10,11,12,13,14,15,16,17,18]
    },
    "Jo Wilson": {
        "special": "General",
        "related": ["Alex Karev", "Jackson Avery", "Paul Stadler", "Atticus Lincoln"],
        "family": [""],
        "seasons":[10,11,12,13,14,15,16,17,18]
    },
    "Shane Ross": {
        "special": "Cardio",
        "related": ["Cristina Yang"],
        "family": [""],
        "seasons":[10]
    },
    "Stephanie Edwards": {
        "special": "Nuero",
        "related": ["Jackson Avery"],
        "family": [""],
        "seasons":[10, 11, 12, 13]
    },
    "Leah Murphy": {
        "special": "Intern",
        "related": ["Arizona Robbins"],
        "family": [""],
        "seasons":[10]
    },
    "Amelia Shepherd": {
        "special": "Nuero",
        "related": ["Owen Hunt", "Thomas Koracick"],
        "family": ["Derek Shepherd"],
        "seasons":[11,12,13,14,15,16,17,18]
    },
    "Maggie Pierce": {
        "special": "Cardio",
        "related": ["Andrew DeLuca", "Jackson Avery"],
        "family": ["Richard Webber", "Lexie Grey", "Meredith Grey", "Ellis Grey"],
        "seasons":[11,12,13,14,15,16,17,18]
    },
    "Benjamin Warren": {
        "special": "Intern",
        "related": ["Miranda Bailey"],
        "family": [""],
        "seasons":[8,9,10,11,12,13,14,15,16,17,18]
    },
    "Nathan Riggs": {
        "special": "Cardio",
        "related": ["Meredith Grey"],
        "family": [""],
        "seasons":[12,13,14]
    },
    "Andrew DeLuca": {
        "special": "Intern",
        "related": ["Meredith Grey", "Maggie Pierce"],
        "family": ["Carina DeLuca"],
        "seasons":[12,13,14,15,16,17]
    },
    "Thomas Koracick": {
        "special": "Nuero",
        "related": ["Amelia Shepherd", "April Kepner", "Teddy Altman"],
        "family": [""],
        "seasons":[15,16,17]
    },
    "Atticus Lincoln": {
        "special": "Ortho",
        "related": ["Meredith Grey", "Jo Wilson"],
        "family": [""],
        "seasons":[16, 17, 18]
    },
    "Ellis Grey": {
        "special": "General",
        "related": ["Richard Webber"],
        "family": ["Lexie Grey", "Maggie Pierce", "Meredith Grey"],
        "seasons":[1,2,3,11,15]
    },
    "Eliza Minnick": {
        "special": "Ortho",
        "related": ["Arizona Robbins"],
        "family": [""],
        "seasons":[13]
    },
    "Paul Stadler": {
        "special": "General",
        "related": ["Jo Wilson"],
        "family": [""],
        "seasons":[14]
    },
    "Carina DeLuca": {
        "special": "OB",
        "related": ["Arizona Robbins", "Owen Hunt"],
        "family": ["Andrew DeLuca"],
        "seasons":[14,15,16,17,18]
    },
    "Catherine Fox": {
        "special": "Urologist",
        "related": ["Richard Webber", "Thomas Koracick"],
        "family": ["Jackson Avery"],
        "seasons":[12,13,14,15,16,17]
    },
}

const specials = {
    "General": "Urologist",
    "Urologist": "General",
    "Peds": "OB",
    "OB": "Peds",
    "Cardio": "Nuero",
    "Nuero": "Cardio",
}

const characterList = ["Meredith Grey", "Cristina Yang", "Izzie Stevens", "Alex Karev", "George O'Malley",
 "Miranda Bailey", "Richard Webber", "Preston Burke", "Derek Shepherd", "Addison Montgomery", "Callie Torres"
, "Mark Sloan", "Lexie Grey", "Erica Hahn", "Owen Hunt", "Arizona Robbins", "Teddy Altman", "April Kepner",
"Jackson Avery", "Jo Wilson", "Shane Ross", "Stephanie Edwards", "Leah Murphy", "Amelia Shepherd", "Maggie Pierce",
"Benjamin Warren", "Nathan Riggs", "Andrew DeLuca", "Thomas Koracick", "Atticus Lincoln", "Ellis Grey",
 "Penny Blake", "Eliza Minnick", "Paul Stadler", "Carina DeLuca", "Catherine Fox",]
var randomChar = characterList[Math.floor(Math.random() * characterList.length)];

function win(name) {
    $("#guessEntry").attr('disabled', 'disabled');
    $( "#win" ).on( "dialogbeforeclose", function( event, ui ) {
        location.reload();
    });
    $( "#win" ).dialog( "open" );
}

function newGuess(name) {
    guesses+=1
    if (name == randomChar) {
        win(name)
        let color1="yes"
    }
    if (guesses == 6) {
        $("#guessEntry").attr('disabled', 'disabled');
        $( "#loss" ).on( "dialogbeforeclose", function( event, ui ) {
            location.reload();
        });
        $( "#loss" ).dialog( "open" );
    }
    guess = data[name]
    goal = data[randomChar]
    let color1 = "no"
    let color2 = "no"
    let color3 = "no"
    if (goal.family.includes(name)) {
        color1 = "yes"
    } else if(goal.related.includes(name)) {
        color1 = "maybe"
    }
    if (goal.special == guess.special) {
        color2 = "yes"
    } else if(specials[guess.special] == goal.special) {
        color2 = "maybe"
    }
    let tally = 0
    total = goal.seasons.length
    goal.seasons.forEach(e => {
        if (guess.seasons.includes(e)) {
            tally+=1
        }
    });
    if (tally/total >= .5) {
        color3 = "yes"
    } else if(tally > 0) {
        color3 = "maybe"
    }

    var row = $("<tr></tr>")
    var na = $("<th class='"+color1+"'>"+name+"</th>")
    var spe = $("<th class='"+color2+"'>"+guess.special+"</th>")
    var sea = $("<th class='"+color3+"'>"+guess.seasons.toString()+"</th>")
    row.append(na)
    row.append(spe)
    row.append(sea)
    $('#table').append(row)
}

$(document).ready(function(){
    $( "#answer_l").text("The correct answer was " + randomChar + ".")
    $( "#answer_w").text(randomChar + " was the correct answer!")
    if (window.innerWidth/2 < 650) {
        width = innerWidth
    } else {
        width =  window.innerWidth/2
    }
    $( "#win" ).dialog({
        autoOpen: false,
        width: width
    });
    $( "#dialog" ).dialog({
        width: width
    });
    $( "#loss" ).dialog({
        autoOpen: false,
        width: width
    });
    $( "#guessEntry" ).autocomplete({
        source: characterList
    });
    $( "#guessEntry" ).change(function(){
        if(characterList.includes($( "#guessEntry" ).val())) {
            newGuess($( "#guessEntry" ).val())
            $( "#guessEntry" ).val("")
            $( "#guessEntry" ).attr("placeholder", "Guess "+String(guesses)+"/5")
        }
    });
    $( "#enter" ).click(function() {
        if(characterList.includes($( "#guessEntry" ).val())) {
            newGuess($( "#guessEntry" ).val())
            $( "#guessEntry" ).val("")
            $( "#guessEntry" ).attr("placeholder", "Guess "+String(guesses)+"/5")
        }
    });
    $( "#refresh-button" ).click(function() {
        location.reload();
    });
    $( "#rules-button" ).click(function() {
        $( "#dialog" ).dialog({
            width: 750
        });
    });
})