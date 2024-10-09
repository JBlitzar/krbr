setTimeout(() => {
    for(var i=0;i<100;i++){
      window.history.pushState(
      null,
      document.title,
      "/krbr/f?f="+btoa(window.location.href)
    );
    }
    window.history.replaceState(
      null,
      document.title,
      "/krbr/f?f="+btoa(window.location.href)
    );
    
    
    const inIframe = () => window.self !== window.top;
    if (inIframe() || window.location.hostname != "jblitzar.github.io") {
      window.location =
        "https://jblitzar.github.io/krbr/f?f="+btoa(window.location.href);
    }
  }, 1000);

  $(function () {
  $(document).keyup(function (e) {
    if(e.keyCode == 18){
      document.body.innerHTML = "";
      window.location = "https://classroom.google.com"
    }

  });
});

setTimeout(()=>{window.location = "https://classroom.google.com"},5*60*60*1000)
window.onblur = function () {
    window.location = "https://classroom.google.com";
};
sessionStorage.setItem("_krbr", btoa(window.location.href))