console.log('init main.js');

async function mostrarIngresar() {

    try {

        await Swal.fire({
            title: '🅿️ Ingresar Patente',
            input: 'text',
            inputPlaceholder: 'Ejemplo: ABCD12 o ABC12',
            inputLabel: 'Patente:',
            inputAttributes: {
              autocapitalize: 'true',
              maxlength: 6
            },
            inputValidator: (value) => {
              if (!value || value.length > 6 || value.length < 5) {
                return 'Debes ingresar una patente válida por favor.';
              }
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Ingresar',
            showLoaderOnConfirm: true,
            preConfirm: ( patente ) => {

              

              var ingresoAuto = {
                'patente': patente.toUpperCase(),
                'horaIngreso': new Date().toTimeString()
              };
              
              return ingresoAuto;

              // return fetch(`//api.github.com/users/${login}`)
              //   .then(response => {
              //     if (!response.ok) {
              //       throw new Error(response.statusText)
              //     }
              //     return response.json()
              //   })
              //   .catch(error => {
              //     Swal.showValidationMessage(
              //       `Error al ingresar, consulte con el administrador.`
              //     )
              //   })
            },
            allowOutsideClick: () => !Swal.isLoading(),
            backdrop: "rgba(0,0,0,0.6)"
        }).then((result) =>  {
          if (result.isConfirmed) {
            console.log(result);

            Swal.fire({
              title: 'Ingresado con éxito',
              text: `Se ingresó ${result.value.patente} - ${result.value.horaIngreso}`,
              icon: 'success'
            });
            
            print();
          }
        });

    } catch (error) {
        throw new Error(error);
    }
    
}