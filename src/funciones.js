const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnAgregar = document.querySelector('#btn_agregar')

btnAgregar.addEventListener('click', function(){
    window.location.href = `agregar/${nombre.value}/${apellido.value}/${email.value}/${password.value}`
})