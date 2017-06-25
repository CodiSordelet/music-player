var music = [{
        "Artist": "Adele",
        "Album-title": "25",
        "albumCover": "../images/adele25.png",
        "Songs": [{
                "SongTitle": "Hello",
                "file": "http://127.0.0.1:3000/music/Adele%20-%2025%20(Special%20Holiday%20Edition)%202015...Freak37/01%20Hello.mp3"
            },
            {
                "SongTitle": "Send My Love(To Your New Lover)",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/02 Send My Love (To Your New Lover).mp3",
            },
            {
                "SongTitle": "I Miss You",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/03 I Miss You.mp3",
            },
            {
                "SongTitle": "When We Were Young",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/04 When We Were Young.mp3",
            },
            {
                "SongTitle": "Remedy",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/05 Remedy.mp3"
            },
            {
                "SongTitle": "Water Under The Bridge",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/06 Water Under the Bridge.mp3"
            },
            {
                "SongTitle": "Water Under The Bridge",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/06 Water Under the Bridge.mp3"
            },
            {
                "SongTitle": "River Lea",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/07 River Lea.mp3"
            },
            {
                "SongTitle": "Love In The Dark",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/08 Love in the Dark.mp3"
            },
            {
                "SongTitle": "Million Years Ago",
                "file": "../music/Adele - 25 (Special Holiday Edition) 2015...Freak37/09 Million Years Ago.mp3"
            }
        ]
    },
    {
        "Artist": "Beyoncé",
        "Album-title": "Lemonade",
        "albumCover": "beyoncelemonade.png",
        "Songs": [{
                "SongTitle": "Pray You Catch Me",
                "file": "01-pray_you_catch_me.mp3"
            },
            {
                "SongTitle": "Hold Up",
                "file": "02-hold_up.mp3",
            }
        ]
    }


];

var objectValue = 0,
    songValue = 0;


//changes the artist; iterates the index + 1
function nextArtist() {
    var artistValue = music[objectValue++];

    return artistValue;
}

//changes the song
function nextSong() {
    return music[objectValue].album[songValue++];
}



$(document).ready(function() {
    // show duration
    function showDuration() {
        $(audio).bind('timeUpdate', function() {
            //get hours and minutes
            var s = parseInt(audio.currentTime % 60);
            var m = parseInt((audio.currentTime) / 60) % 60;

            if (s < 10) s = '0' + s;

            $("#duration").html(m + '.' + s);

        });
    }




    var songValue = 0;
    var musicObjectValue = 0;

    var audio = new Audio(music[musicObjectValue].Songs[songValue].file);
    $("#album-cover").attr("src", music[0].albumCover);
    $("#album-cover").attr("style", "margin: 0 auto");



    function setVolume(volume) {
        // audioPlayer.volume = volume;
    }


    $("#play").click(function() {
        audio.play();
        showDuration();
        $("#artistinfo").html(music[musicObjectValue].Artist);
        $("#title").html(music[musicObjectValue].Songs[songValue].SongTitle);
        $("#play").hide();
        $("#pause").show();

        setVolume();
    });

    $("#next").click(function() {
        audio.load();
        audio.pause();
        audio.currentTime = 0;
        console.log(audio.currentTime);
        songValue++;
        audio.src = music[musicObjectValue].Songs[songValue].file;
        $("#title").html(music[musicObjectValue].Songs[songValue].SongTitle);
        audio.play();
        $("#play").hide();
        $("#pause").show();


    });



    $("#pause").click(function() {

        audio.pause();
        $("#pause").hide();
        $("#play").show();


    });



    function setVolume() {
      var val = $("#volume").val();
      console.log(val);
    }









});
