setTimeout(()=>{
    if(!sessionStorage.getItem("_krbr")){
        window.location.href = "/krbr/f?f="+btoa(window.location.href);
    }
},1000);




