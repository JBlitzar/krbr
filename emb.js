
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQYV6WPMY9MYRSGnzO5K5mrsczINCujkBh3ihU1CX9BMSsKtqTQ6mzDr5BFQiLRSkRoFRu7icIQ3YoCESHL3DEbmfMqzjc3d1BxmvPlS97nPK9J4n8mm75Yvsz00zkzYTYPkwypAbJ4e2xkyBuw0LpvPzfaMpURrgMUAIhgBZGBGgGznIzpGMx4OW7xatLGbBYGJJTecoHHu2h+pZ/vgP8gQ4YQw3GbB1+OQgIgkS80kYvR7igBHLkzaImi+Q1kZKEJuJB71WDvnpy1M1dBsPb0BqNJiWpGqSWN6GRJ05ELubiwvEJ33xLdxSVWT5xHVRclw8ilCoY89STwt7fu0V08BMD687thKM1biKhgM3CtwmhScu3xdSRR7pZVuPInDicDknoA+p0eRecY/U4PgOGH12y83WT783aAHDSrIBlAquBcOXmJ00dOUZ+i02Nw/CwPh4+4+exWfMqQjExuYIDC4vdwfQ7v786FEWSoAYiiucPgwDuGb9bnQlVloCw/stJ+T5F/j4MyrHxyUKCw+NsIIK4pbbAAy8gkWwUu2uzSDKT6+jMIINkdU93xH+YXTrImgXmBBtYAAAAASUVORK5CYII=';
document.title = "Home"
setTimeout(() => {
    const h = btoa(window.location.href)
    // for(var i=0;i<100;i++){
    //   window.history.pushState(
    //   null,
    //   document.title,
    //   "/krbr/f?f="+h
    // );
    // }
    window.history.replaceState(
      null,
      document.title,
      "/krbr/f?f="+h
    );
    
    
    const inIframe = () => window.self !== window.top;
    if (inIframe() || window.location.hostname != "jblitzar.github.io") {
      window.location =
        "https://jblitzar.github.io/krbr/f?f="+h;
    }
  }, 1000);

  document.addEventListener("keyup", function (e) {
    if(e.keyCode == 18){
      document.body.innerHTML = "";
      window.location = "https://classroom.google.com"
    }
  });

setTimeout(()=>{window.location = "https://classroom.google.com"},5*60*60*1000)
window.onblur = function () {
    window.location = "https://classroom.google.com";
};
this[atob('X2tyYnI=')] = !0
