function enviar() {
  fetch("http://localhost:3001/code", {
    method: 'GET'   
  }).then((response) => {
    response.json().then(result => {
      window.location.href = result.url;
    })
  }).catch(error => {
    console.log(error)
  })
}