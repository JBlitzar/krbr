if(sessionStorage.getItem("_krbr") != btoa(window.location.href)){
    window.location.href = "/krbr/f?f="+btoa(window.location.href)
}