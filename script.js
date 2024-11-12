import { usuarios } from '/database.js' 

 

document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion) 

document.getElementById('btnRegistrarUsuario').addEventListener('click', registrarUsuario) 

 

console.log(usuarios) 

function iniciarSesion() { 

    let usuario = document.getElementById("usuario").value 

    let contrasena = document.getElementById("contrasena").value 

    // let auth = usuarios.find((item) => usuario == item.usuario) 

    let auth = usuarios.some((item) => usuario == item.usuario) 

    console.log(auth) 

    // usuarios.some(()=>) 

    if (auth) { 

        let timerInterval; 

        Swal.fire({ 

            title: "Bienvenido", 

            html: "Será redireccionado <h1></h1> milliseconds.", 

            timer: 1000, 

            timerProgressBar: true, 

            icon: 'success', 

            didOpen: () => { 

                Swal.showLoading(); 

                const timer = Swal.getPopup().querySelector("h1"); 

                timerInterval = setInterval(() => { 

                    timer.textContent = `${Swal.getTimerLeft()}`; 

                }, 100); 

            }, 

            willClose: () => { 

                clearInterval(timerInterval); 

                window.location.href = 'panel.html' 

            } 

        }).then((result) => { 

            /* Read more about handling dismissals below */ 

            if (result.dismiss === Swal.DismissReason.timer) { 

                console.log("I was closed by the timer"); 

            } 

        }); 

    } else { 

        Swal.fire({ 

            title: "Error", 

            text: "Usuario y/o contraseña incorrectos o no existen", 

            icon: "error" 

        }); 

    } 

} 

 

function registrarUsuario() { 

    let usuario = document.getElementById("rusuario").value 

    let contrasena = document.getElementById("rcontrasena").value 

    let correo = document.getElementById("rcorreo").value 

    let nombre = document.getElementById("rnombre").value 

    let profesion = document.getElementById("rprofesion").value 

    let objeto = { 

        usuario: usuario, 

        contrasena: contrasena, 

        correo: correo, 

        nombre: nombre, 

        profesion: profesion 

    } 

    usuarios.push(objeto) 

} 

 

let objeto = { 

    nombre: 'Jaime Zapata Valencia', 

    correo: 'correo@correo.com', 

    contrasena: '1234567', 

    profesion: 'Developer', 

    usuario: 'admin' 

} 

 

console.log(objeto.nombre) 

console.log(objeto.profesion) 

 

document.getElementById('btnLogin').addEventListener('click', mostrarFormularioRegistro) 

document.getElementById('btnRegister').addEventListener('click', mostrarFormularioLogin) 

 

function mostrarFormularioRegistro() { 

    document.getElementById('form-login').style.display = 'none' 

    document.getElementById('form-register').style.display = 'flex' 

} 

function mostrarFormularioLogin() { 

    document.getElementById('form-login').style.display = 'flex' 

    document.getElementById('form-register').style.display = 'none' 

} 