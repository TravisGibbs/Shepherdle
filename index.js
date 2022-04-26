var guesses = 1

const data = {
    "Meredith Grey": {
        "special": "General",
        "related": ["George O'Malley", "Derek Shepherd", "Nathan Riggs", "Andrew DeLuca", "Atticus Lincoln"],
        "family": ["Lexie Grey", "Maggie Pierce", "Ellis Grey"],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736747/1185da6c47d2666bd36bc72538600150/330x330-Q90_1185da6c47d2666bd36bc72538600150.jpg"
    },
    "Cristina Yang": {
        "special": "Cardio",
        "related": ["Preston Burke", "Owen Hunt", "Shane Ross"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10],
        "img": "https://64.media.tumblr.com/6f320f1c6492a9f218149aebd018b924/8c76e426af3d4b0b-17/s640x960/83de4f5e7e736e4eadd091b6941b3ba2b21d4ec6.png"
    },
    "Izzie Stevens": {
        "special": "Intern",
        "related": ["Alex Karev", "George O'Malley"],
        "family": [""],
        "seasons":[1,2,3,4,5,6],
        "img": "https://i.pinimg.com/originals/c0/ff/af/c0ffaf7916530e94350d043a4e73720c.jpg"
    },
    "George O'Malley": {
        "special": "Intern",
        "related": ["Izzie Stevens", "Meredith Grey", "Callie Torres"],
        "family": [""],
        "seasons":[1,2,3,4,5],
        "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/greys-anatomy-george-o-malley-1587798156.jpg?crop=0.566xw:1.00xh;0.204xw,0&resize=480:*"
    },
    "Miranda Bailey": {
        "special": "General",
        "related": ["Benjamin Warren"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736747/1185da6c47d2666bd36bc72538600150/330x330-Q90_1185da6c47d2666bd36bc72538600150.jpg"
    },
    "Richard Webber": {
        "special": "General",
        "related": ["Catherine Fox", "Ellis Grey"],
        "family": ["Maggie Pierce"],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736314/fb82b61037942db4a7684377fa538764/330x330-Q90_fb82b61037942db4a7684377fa538764.jpg"
    },
    "Alex Karev": {
        "special": "Peds",
        "related": ["Izzie Stevens", "Jo Wilson", "Lexie Grey", "Addison Montgomery", "Heather Brooks"],
        "family": [""],
        "seasons":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        "img": "https://static.wikia.nocookie.net/my-high-school-musical-series/images/c/c6/AlexKarevS104.jpg/revision/latest/top-crop/width/360/height/450?cb=20201223043758"
    },
    "Preston Burke": {
        "special": "Cardio",
        "related": ["Cristina Yang"],
        "family": [""],
        "seasons":[1,2,3],
        "img": "https://openpsychometrics.org/tests/characters/test-resources/pics/GA/8.jpg"
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
        "seasons":[5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736363/28eb23c13ebc5d3773860dffb9dd5f97/330x330-Q90_28eb23c13ebc5d3773860dffb9dd5f97.jpg"
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
        "seasons":[6,7,8,15,16,17,18],
        "img":"https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/2169675/9cd7169fcd34c51471bce1fa37cc50b2/330x330-Q90_9cd7169fcd34c51471bce1fa37cc50b2.jpg"
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
        "seasons":[10,11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/736806/12d2d1239ecb5ac48576258697231fb8/330x330-Q90_12d2d1239ecb5ac48576258697231fb8.jpg"
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
        "seasons":[11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/753071/46e4f3eb2238cf20ed1866e2dcd971f1/330x330-Q90_46e4f3eb2238cf20ed1866e2dcd971f1.jpg"
    },
    "Maggie Pierce": {
        "special": "Cardio",
        "related": ["Andrew DeLuca", "Jackson Avery"],
        "family": ["Richard Webber", "Lexie Grey", "Meredith Grey", "Ellis Grey"],
        "seasons":[11,12,13,14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/753040/2077280daba6c87039d61f8b7f01e53e/330x330-Q90_2077280daba6c87039d61f8b7f01e53e.jpg"
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
        "related": ["Meredith Grey", "Maggie Pierce", "Sam Bello"],
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
        "seasons":[16, 17, 18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/2848432/11191b3062e3e64e432b196c87219542/330x330-Q90_11191b3062e3e64e432b196c87219542.jpg"
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
    "Nico Kim": {
        "special": "Ortho",
        "related": ["Levi Schmitt"],
        "family": [],
        "seasons":[15,16,17,18]
    },
    "Levi Schmitt": {
        "special": "Intern",
        "related": ["Nico Kim"],
        "family": [],
        "seasons":[14,15,16,17,18],
        "img": "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/person/2848454/a3c33febb320197ad6c97057119d626f/330x330-Q90_a3c33febb320197ad6c97057119d626f.jpg"
    },
    "Nicole Herman": {
        "special": "OB",
        "related": [],
        "family": [],
        "seasons":[11]
    },
    "Heather Brooks": {
        "special": "Intern",
        "related": ["Alex Karev"],
        "family": [],
        "seasons":[9,10]
    },
    "Sam Bello": {
        "special": "Intern",
        "related": ["Andrew DeLuca"],
        "family": [],
        "seasons":[14]
    },
    "Megan Hunt": {
        "special": "Trauma",
        "related": ["Nathan Riggs"],
        "family": ["Owen Hunt"],
        "seasons":[14,15,18]
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
 "Penny Blake", "Eliza Minnick", "Paul Stadler", "Carina DeLuca", "Catherine Fox", "Nico Kim", "Levi Schmitt", "Nicole Herman"
,"Heather Brooks", "Sam Bello", "Megan Hunt"]
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
    else if (guesses == 6) {
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
    var na = $("<th class='font "+color1+"'>"+name+"</th>")
    var spe = $("<th class='font "+color2+"'>"+guess.special+"</th>")
    var sea = $("<th class='font "+color3+"'>"+guess.seasons.toString()+"</th>")
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
        $('#form-con').removeClass('web-width')
        $('#form-con').addClass('mobile-width')
    } else {
        width =  window.innerWidth/2
        $('#enter').toggleClass("hidden")
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
            width: width
        });
    });
    
})