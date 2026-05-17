// Click-to-load YouTube: replace thumbnail button with privacy-enhanced iframe.
document.querySelectorAll(".video[data-yt]").forEach(function (box) {
  box.addEventListener("click", function () {
    var id = box.getAttribute("data-yt");
    var iframe = document.createElement("iframe");
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      id +
      "?autoplay=1&rel=0";
    iframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = "YouTube 影片播放器";
    box.innerHTML = "";
    box.appendChild(iframe);
  });
});
