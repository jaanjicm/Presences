const iframe = new iFrame();
iframe.on("UpdateData", async () => {
  let video: HTMLVideoElement;
  if (document.querySelector("#dogevideo_html5_api") !== null) {
    video = document.querySelector("#dogevideo_html5_api");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("#video-player") !== null) {
    video = document.querySelector("#video-player");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#player_container > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#player_container > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#vplayer > div > div.container.pointer-enabled > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#vplayer > div > div.container.pointer-enabled > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#player > div > div.container.pointer-enabled > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#player > div > div.container.pointer-enabled > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#mediaplayer > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#mediaplayer > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("#vid_html5_api") !== null) {
    video = document.querySelector("#vid_html5_api");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector("#myElement > div.jw-media.jw-reset > video") !==
    null
  ) {
    video = document.querySelector(
      "#myElement > div.jw-media.jw-reset > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("#mgvideo > div.vjs-poster") !== null) {
    video = document.querySelector("#mgvideo > div.vjs-poster");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("#videojs_html5_api") !== null) {
    video = document.querySelector("#videojs_html5_api");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#myVideo > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#myVideo > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("#mgvideo_html5_api") !== null) {
    video = document.querySelector("#mgvideo_html5_api");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector("#player > div.jw-media.jw-reset > video") !== null
  ) {
    video = document.querySelector("#player > div.jw-media.jw-reset > video");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (
    document.querySelector(
      "#vstr > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) !== null
  ) {
    video = document.querySelector(
      "#vstr > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    );

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  } else if (document.querySelector("video") !== null) {
    video = document.querySelector("video");

    if (video && !isNaN(video.duration)) {
      iframe.send({
        iframeVideo: {
          iFrameVideo: true,
          currTime: video.currentTime,
          dur: video.duration,
          paused: video.paused
        }
      });
    }
  }
});
