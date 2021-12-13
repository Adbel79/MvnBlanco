var btnApobado = document.getElementById("aprobado");
btnApobado.addEventListener("click", () => {
    axios.get("http://localhost:4567/calificacion", {
    })
        .then(function (res) {
            window.location.replace("calificacion.html");
        })
    
        .catch(function (error) {
            console.log(error)
        })

});