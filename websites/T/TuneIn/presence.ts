const presence = new Presence({
    clientId: "844108776793178122"
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused",
    live: "presence.activity.live"
  });

let title, author;

presence.on("UpdateData", async () => {
  const data: PresenceData = {
      largeImageKey: "logo",
      startTimestamp: Math.floor(Date.now() / 1000)
    },
    error = document.querySelector(
      "#innerAppContent > div.player__playerContainer___JEJ2U > div > div.player__leftSection___flqSC > div.player__leftErrorMessageContainer___10rm9 > div > div > div.player__errorMessageContainer___1dw8a"
    );
  if (error) presence.clearActivity();
  else {
    const playerCheck = document.querySelector(
      ".player__playerContainer___JEJ2U"
    )
      ? true
      : false;
    if (playerCheck) {
      const liveCheck =
        document.querySelector("#scrubberElapsed").textContent === "LIVE"
          ? true
          : false;

      if (liveCheck) {
        const playCheck = document.querySelector(
          ".player-play-button__playerPlayButton___1Kc2Y[data-testid='player-status-playing']"
        )
          ? true
          : false;
        if (playCheck) {
          title = document.querySelector("#playerTitle").textContent;
          author = document.querySelector("#playerSubtitle").textContent;

          data.details = title;
          if (title.length > 128)
            data.details = `${title.substring(0, 125)}...`;

          data.state = author;
          if (author.length > 128)
            data.state = `${author.substring(0, 125)}...`;

          data.smallImageKey = "live";
          data.smallImageText = (await strings).live;
        } else {
          title = document.querySelector("#playerTitle").textContent;
          author = document.querySelector("#playerSubtitle").textContent;
          const audioTime =
              document.querySelector("#scrubberElapsed").textContent,
            audioDuration =
              document.querySelector("#scrubberElapsed").innerHTML,
            timestamp1 = presence.timestampFromFormat(audioTime),
            timestamp2 = presence.timestampFromFormat(audioDuration),
            timestamps = presence.getTimestamps(timestamp1, timestamp2),
            paused = document.querySelector(
              ".player-play-button__playerPlayButton___1Kc2Y[data-testid='player-status-stopped']"
            )
              ? true
              : false;

          data.details = title;
          if (title.length > 128)
            data.details = `${title.substring(0, 125)}...`;

          data.state = author;
          if (author.length > 128)
            data.state = `${author.substring(0, 125)}...`;

          data.smallImageKey = paused ? "pause" : "play";
          data.smallImageText = paused
            ? (await strings).pause
            : (await strings).play;
          data.endTimestamp = timestamps.pop();

          if (paused) {
            delete data.startTimestamp;
            delete data.endTimestamp;
          }

          if (!data.details) {
            presence.setTrayTitle();
            presence.setActivity();
          } else presence.setActivity(data);
        }
      }
    } else presence.clearActivity();
  }
});
