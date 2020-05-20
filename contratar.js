$(document).ready(function(){

$("#boton2").click(function(){
	Swal.fire({
        title: 'Esta seguro que está listo?',
        text: "No se va a arrepentir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Positivo!',
        cancelButtonText: 'No estoy listo'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'EXCELENTE!',
            'Nos contactaremos con usted',
            'Exito'
          )
        }
      })
});

}