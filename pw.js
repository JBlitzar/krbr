
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQYV6WPMY9MYRSGnzO5K5mrsczINCujkBh3ihU1CX9BMSsKtqTQ6mzDr5BFQiLRSkRoFRu7icIQ3YoCESHL3DEbmfMqzjc3d1BxmvPlS97nPK9J4n8mm75Yvsz00zkzYTYPkwypAbJ4e2xkyBuw0LpvPzfaMpURrgMUAIhgBZGBGgGznIzpGMx4OW7xatLGbBYGJJTecoHHu2h+pZ/vgP8gQ4YQw3GbB1+OQgIgkS80kYvR7igBHLkzaImi+Q1kZKEJuJB71WDvnpy1M1dBsPb0BqNJiWpGqSWN6GRJ05ELubiwvEJ33xLdxSVWT5xHVRclw8ilCoY89STwt7fu0V08BMD687thKM1biKhgM3CtwmhScu3xdSRR7pZVuPInDicDknoA+p0eRecY/U4PgOGH12y83WT783aAHDSrIBlAquBcOXmJ00dOUZ+i02Nw/CwPh4+4+exWfMqQjExuYIDC4vdwfQ7v786FEWSoAYiiucPgwDuGb9bnQlVloCw/stJ+T5F/j4MyrHxyUKCw+NsIIK4pbbAAy8gkWwUu2uzSDKT6+jMIINkdU93xH+YXTrImgXmBBtYAAAAASUVORK5CYII=';
document.title = "Home"
setTimeout(() => {
    var h = btoa(window.location.href)
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
const r = new URLSearchParams(window.location.search).get("p")
var sha256=function r($){function _(r,$){return r>>>$|r<<32-$}for(var o,f,n=Math.pow,t=n(2,32),a="length",c="",e=[],i=8*$[a],h=r.h=r.h||[],u=r.k=r.k||[],v=u[a],l={},s=2;v<64;s++)if(!l[s]){for(o=0;o<313;o+=s)l[o]=s;h[v]=n(s,.5)*t|0,u[v++]=n(s,1/3)*t|0}for($+="\x80";$[a]%64-56;)$+="\0";for(o=0;o<$[a];o++){if((f=$.charCodeAt(o))>>8)return;e[o>>2]|=f<<(3-o)%4*8}for(f=0,e[e[a]]=i/t|0,e[e[a]]=i;f<e[a];){var g=e.slice(f,f+=16),k=h;for(o=0,h=h.slice(0,8);o<64;o++){var x=g[o-15],d=g[o-2],p=h[0],w=h[4],A=h[7]+(_(w,6)^_(w,11)^_(w,25))+(w&h[5]^~w&h[6])+u[o]+(g[o]=o<16?g[o]:g[o-16]+(_(x,7)^_(x,18)^x>>>3)+g[o-7]+(_(d,17)^_(d,19)^d>>>10)|0),C=(_(p,2)^_(p,13)^_(p,22))+(p&h[1]^p&h[2]^h[1]&h[2]);(h=[A+C|0].concat(h))[4]=h[4]+A|0}for(o=0;o<8;o++)h[o]=h[o]+k[o]|0}for(o=0;o<8;o++)for(f=3;f+1;f--){var S=h[o]>>8*f&255;c+=(S<16?0:"")+S.toString(16)}return c}; 
if(sha256(r) == "07d9dcc85f21213649d1e0651ce4a99005eaa1d89dca9ecc739ed355678dc77b"){
  window.location = "https://classroom.google.com";
}
this[atob('X2tyYnI=')] = !0
