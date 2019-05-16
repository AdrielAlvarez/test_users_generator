$(document).ready(function () {
  const helperText = $('#helperText')
  const genBtn = $('#csvGenButton')
  const downloadBtn = $('#csvDownloadButton')
  let leadFinal
  genBtn.on('click', function (event) {
    let leadNum = $('#leadQuantity').val()
    if ((typeof parseInt(Math.floor(leadNum))) == 'number' && 0 < leadNum) {
        genBtn.removeClass('visible')
        genBtn.addClass('invisible')
        downloadBtn.removeClass('invisible')
        downloadBtn.addClass('visible')
      helperText.html('Please select Download to download your test data')
      helperText.css("color","black")
      leadFinal = genCsv(leadNum)
    } else {
        helperText.css("color","red")
      helperText.html('Please enter a valid quantiy')
    }
  })
  downloadBtn.on('click', function (event) {
    event.preventDefault()
    window.open(leadFinal)
  })
})
