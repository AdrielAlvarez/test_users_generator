$(document).ready(function(){
    const genBtn = $("#csvGenButton")
    const downloadBtn = $("#csvDownloadButton")
    let leadFinal;
    genBtn.on("click",function(event){
        event.preventDefault();
        genBtn.removeClass("visible");
        genBtn.addClass("invisible");
        downloadBtn.removeClass("invisible");
        downloadBtn.addClass("visible")
        let leadNum = $("#leadQuantity").val();
        leadFinal = genCsv(leadNum)
    });
    downloadBtn.on("click", function(event){
        event.preventDefault();
        window.open(leadFinal)
    })

})
