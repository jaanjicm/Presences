const iframe = new iFrame();

iframe.on("UpdateData", async () => {
  const video: HTMLVideoElement =
    document.querySelector("#dogevideo_html5_api") ||
    document.querySelector(
      "#player > div > div.container.pointer-enabled > video"
    ) ||
    document.querySelector(
      "#mediaplayer > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) ||
    document.querySelector("#vid_html5_api") ||
    document.querySelector("#myElement > div.jw-media.jw-reset > video") ||
    document.querySelector("#mgvideo > div.vjs-poster") ||
    document.querySelector("#olvideo_html5_api") ||
    document.querySelector("#videojs_html5_api") ||
    document.querySelector(
      "#myVideo > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) ||
    document.querySelector("#mgvideo_html5_api") ||
    document.querySelector("#player > div.jw-media.jw-reset > video") ||
    document.querySelector(
      "#vstr > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) ||
    document.querySelector(
      "#player > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) ||
    document.querySelector(
      "#vstr > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video"
    ) ||
    document.querySelector("video");

  if (video !== null && !isNaN(video.duration)) {
    iframe.send({
      iframeVideo: {
        currentTime: video.currentTime,
        duration: video.duration,
        paused: video.paused
      }
    });
  }
});
