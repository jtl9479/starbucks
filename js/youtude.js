      // 2. This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div>
        new YT.Player('player', {
          videoId: '1Qu9PP5Iu2I', //최포 재생할 유튭, 영상
          playerVars : {
            autoplay : true, //자동재생유무
            loop : true, //반복재생유무
            playlist :'1Qu9PP5Iu2I' //반복 재생할 유튜브 영상 id
          }
          ,
          events: {
            onReady : function(event) {
                event.target.mute() //음소거
            }
          }
        });
      }