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
        "albumCover": "../images/beyoncelemonade.png",
        "Songs": [{
                "SongTitle": "Pray You Catch Me",
                "file": "../music/Beyonce-Lemonade/01-pray_you_catch_me.mp3"
            },
            {
                "SongTitle": "Hold Up",
                "file": "../music/Beyonce-Lemonade/02-hold_up.mp3",
            },
            {
                "SongTitle": "Don't hurt yourself",
                "file": "../music/Beyonce-Lemonade/03-don't_hurt_yourself_(feat_jack_white).mp3",
            },
            {
                "SongTitle": "Sorry",
                "file": "../music/Beyonce-Lemonade/04-sorry.mp3",
            },
            {
                "SongTitle": "Six Inch Heels",
                "file": "../music/Beyonce-Lemonade/05-6_inch(feat_th_weeknd).mp3",
            },
            {
                "SongTitle": "Daddy Lessons",
                "file": "../music/Beyonce-Lemonade/06-daddy_lessons.mp3",
            },
            {
                "SongTitle": "Love Drought",
                "file": "../music/Beyonce-Lemonade/07-love_drought.mp3",
            },
            {
                "SongTitle": "Sandcastles",
                "file": "../music/Beyonce-Lemonade/08-sandcastles.mp3",
            },
            {
                "SongTitle": "Forward",
                "file": "../music/Beyonce-Lemonade/09-forward_(feat_james_blake)0.mp3",
            },
            {
                "SongTitle": "Freedom ft. Kendrick Lamar",
                "file": "../music/Beyonce-Lemonade/10-freedom_(feat_kendrick_lamar).mp3",
            },
            {
                "SongTitle": "All night",
                "file": "../music/Beyonce-Lemonade/11-all_night.mp3",
            },
            {
                "SongTitle": "Formation",
                "file": "../music/Beyonce-Lemonade/12-formation.mp3",
            }


        ]
    },
    {
        "Artist": "Chris Stapleton",
        "Album-title": "Traveller",
        "albumCover": "../images/Traveller.jpg",
        "Songs": [{
                "SongTitle": "Traveller",
                "file": "../music/Chris Stapleton - Traveller (2015)/01. Traveller.mp3"
            },
            {
                "SongTitle": "Fire Away",
                "file": "../music/Chris Stapleton - Traveller (2015)/02. Fire Away.mp3",
            },
            {
                "SongTitle": "Tennessee Whiskey",
                "file": "../music/Chris Stapleton - Traveller (2015)/03. Tennessee Whiskey.mp3",
            },
            {
                "SongTitle": "Parachute",
                "file": "../music/Chris Stapleton - Traveller (2015)/04. Parachute.mp3",
            },
            {
                "SongTitle": "Whiskey and You",
                "file": "../music/Chris Stapleton - Traveller (2015)/05. Whiskey and You.mp3",
            },
            {
                "SongTitle": "Nobody To Blame",
                "file": "../music/Chris Stapleton - Traveller (2015)/06. Nobody To Blame.mp3",
            },
            {
                "SongTitle": "More Of You",
                "file": "../music/Chris Stapleton - Traveller (2015)/07. More of You.mp3",
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

var paths = [];

function getSongTitles() {
  var arrayOfSongTitles = [];

  for(var i = 0; i < music.length; i++) {
    for(var j=0; j < music[i].Songs.length; j++) {
       arrayOfSongTitles[arrayOfSongTitles.length] = music[i].Songs[j].SongTitle;

    }
  }
  return arrayOfSongTitles;

}


function getSongPaths() {
  var arrayOfSongPaths = [];


  for(var i = 0; i < music.length; i++) {
    for(var j=0; j < music[i].Songs.length; j++) {
       arrayOfSongPaths[arrayOfSongPaths.length] = music[i].Songs[j].file;
    }
  }
  return arrayOfSongPaths;

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

//continuously check volume
    window.setInterval(function(){
        getVolumeFromUi();
    }, 100);

    var songValue = 0;
    var musicObjectValue = 0;

    var audio = new Audio(music[musicObjectValue].Songs[songValue].file);
    $("#album-cover").attr("src", music[musicObjectValue].albumCover);
    $("#album-cover").attr("style", "margin: 0 auto");


    $("#play").click(function() {
        audio.play();
        showDuration();
        $("#artistinfo").html(music[musicObjectValue].Artist);
        $("#title").html(music[musicObjectValue].Songs[songValue].SongTitle);
        $("#play").hide();
        $("#pause").show();
        console.log(getSongTitles());
        setVolume();
    });

    $("#next").click(function() {
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

    $("#stop").click(function() {
        audio.pause();
        audio.currentTime = 0;
        $("#pause").hide();
        $("#play").show();
    });

    $("#reverse").click(function() {
      audio.pause();
      audio.currentTime = 0;
      songValue--;
      console.log(songValue);
      $("#title").html(music[musicObjectValue].Songs[songValue].SongTitle);
      audio.src = music[musicObjectValue].Songs[songValue].file;
      audio.play();
      $("#play").hide();
      $("#pause").show();
    });



    $("#ulplaylist").html(function() {
      var songz = getSongTitles();
      var _html ="";
      paths = getSongPaths();


      for(var i=0; i<songz.length;i++) {
        _html += "<li id=\"" + paths[i] + "\">" + songz[i] + "</li>" + "<br>";
      }
      return _html;


    });


    $("ul li").click(function(){
      history.go(-1);
      boolean = "";
      for(var i = 0; i < music.length; i++) {
        for(var j=0; j < music[i].Songs.length; j++) {
          if(this.id == music[i].Songs[j].file) {
            musicObjectValue = i;
            songValue = j;
            boolean = true;
            audio.src = music[musicObjectValue].Songs[songValue].file;
            $("#artistinfo").html(music[musicObjectValue].Artist);
            $("#album-cover").attr("src", music[musicObjectValue].albumCover);
            $("#title").html(music[musicObjectValue].Songs[songValue].SongTitle);

          }
        }
      }
      $("#play").hide();
      $("#pause").show();
      audio.play();
    }
  );

  function getVolumeFromUi() {
    var val = $("#volume").val();
    val /= 100;
    audio.volume = val;
  }
});
