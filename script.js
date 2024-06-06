const containerTimer = document.querySelector('.containerTimer');

var timerIsActive = false;

function llenarInput(id, ans) {
    document.getElementById(id).value = ans;
}

const Utils = {
    fadeOut: function (element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out', 'hidden');

        setTimeout(function () {
            element.style.display = 'none';
        }, 1000);
    },

    fadeIn: function (element) {
        if (element == (containerTimer) || (containerBotones3) || (pTextoP)) {
            element.style.display = 'flex';  // Cambia a block o el display que necesites
        } else {
            element.style.display = 'block';  // Cambia a block o el display que necesites
        }
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
        element.classList.remove('hidden');

        // Forzar reflujo para asegurarse de que la transición ocurra
        element.offsetWidth;

        // Agregar la clase que cambia la opacidad a 1
        element.classList.add('visible');
    }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQZbHranPSYBTAsPN7lJYv_mkysEVvLya-xu6F_Q1nzICSfl533ik4Jz9fZpNo85kB/exec'


function submitForm() {
    // Obtener el formulario
    const form = document.forms['contact-form']

    // Agregar un listener al evento de envío del formulario
    form.addEventListener('submit', function (e) {
        // Prevenir el comportamiento por defecto del formulario
        e.preventDefault();

        // Hacer la solicitud fetch con los datos del formulario
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
            .then(response => {
                if (response.ok) {
                    // Si la respuesta es exitosa, mostrar un mensaje de éxito
                    console.log("¡Gracias! ¡Tu formulario se envió correctamente!");
                    // Recargar la página después de 2 segundos
                    setTimeout(() => {
                        window.location.reload();
                    }, 60000);
                } else {
                    // Si hay un problema en la respuesta, lanzar un error
                    throw new Error('Error en la solicitud.');
                }
            })
            .catch(error => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error('¡Error!', error);
                alert("¡Ha ocurrido un error al enviar el formulario!");
            });
    });
}

/* JavaScript */
document.addEventListener('DOMContentLoaded', function () {
    const sliderButton = document.getElementById('sliderButton');
    const sliderContainer = document.querySelector('.slider-container');
    const maxLeft = sliderContainer.clientWidth - sliderButton.clientWidth;

    //Primera Pantalla////////////////////////////////////////////////////////////
    const iframe = document.getElementById('iframe');
    const pTextoP = document.getElementById('pTextoP');
    const pTextoP2 = document.getElementById('pTextoP2');
    const sliderCont = document.getElementById('sliderCont');
    const omiedo = document.getElementById('omiedo');
    const textRead = document.getElementById('textRead');
    const Q1 = document.getElementById('Q1');
    const progressBar = document.getElementById('progressBar');
    const containerTimer = document.querySelector('.containerTimer'); 
    const bar = document.getElementById('bar');
    const containerQR = document.getElementById('containerQR');
    const submit = document.getElementById('submit');
    const copiadoDiv = document.getElementById('copiadoDiv');
    const ultimoBtnNO = document.getElementById('ultimoBtnNO');
    const principalCont = document.getElementById('principalCont');

    const containerBotones1 = document.getElementById('containerBotones1');

    const containerBotones2 = document.getElementById('containerBotones2');
    const Q2 = document.getElementById('Q2');
    
    const containerBotones3 = document.getElementById('containerBotones3');
    const Q3 = document.getElementById('Q3');

    const containerBotones4 = document.getElementById('containerBotones4');
    const Q4 = document.getElementById('Q4');
    const Qr4 = document.getElementById('Qr4');

    const containerTimerGlob = document.getElementById('containerTimer'); 

    let isDragging = false;

    sliderButton.addEventListener('mousedown', startDragging);
    sliderButton.addEventListener('touchstart', startDragging);

    document.addEventListener('mouseup', endDragging);
    document.addEventListener('touchend', endDragging);

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);

    function startDragging(e) {
        isDragging = true;
        sliderButton.style.transition = 'none';
    }

    function fadeOut(element) {
        element.classList.remove('fade-in');
        element.classList.add('fade-out', 'hidden');

        setTimeout(function(){
            element.style.display = 'none';
        },1000);
    }

    function fadeIn(element) {
        if (element == (containerTimer)){
            element.style.display = 'flex';  // Cambia a block o el display que necesites

        }else{
            element.style.display = 'block';  // Cambia a block o el display que necesites
        }
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
        element.classList.remove('hidden');

        // Forzar reflujo para asegurarse de que la transición ocurra
        element.offsetWidth;

        // Agregar la clase que cambia la opacidad a 1
        element.classList.add('visible');
    }

    function endDragging(e) {
        if (isDragging) {
            isDragging = false;
            sliderButton.style.transition = 'left 0.3s';
            sliderButton.style.transition = 'background-color 0.5s';

            if (parseInt(sliderButton.style.left, 10) >= maxLeft) {
                console.log('DESLIZADO');

                fadeOut(iframe);
                fadeOut(sliderCont);
                fadeOut(omiedo);
                fadeOut(pTextoP)
                fadeOut(tobravesouls)

                principalCont.style.backgroundColor="#151515"

                setTimeout(function () {
                    
                    textRead.innerHTML = "<span id='sabiamos'>SABÍAMOS </span><span id='que1'>QUE </span><span id='dirias'>DIRÍAS </span><span id='que2'>QUE </span><span id='si'>SÍ</span>";

                    setTimeout(function () {
                        fadeIn(textRead);

                        setTimeout(function () {
                            document.getElementById('sabiamos').style.color = "#ffffff"

                            setTimeout(function () {
                                document.getElementById('sabiamos').style.color = "#525252"
                                document.getElementById('que1').style.color = "#ffffff"

                                setTimeout(function () {
                                    document.getElementById('que1').style.color = "#525252"
                                    document.getElementById('dirias').style.color = "#ffffff"

                                    setTimeout(function () {
                                        document.getElementById('dirias').style.color = "#525252"
                                        document.getElementById('que2').style.color = "#ffffff"

                                        setTimeout(function () {
                                            document.getElementById('que2').style.color = "#525252"
                                            document.getElementById('si').style.color = "#ffffff"

                                            setTimeout(function () {
                                                document.getElementById('si').style.color = "#525252"
                                                fadeOut(textRead)
                                                setTimeout(function () {
                                                    mostrarQ1();
                                                }, 1000);
                                            }, 400);
                                        }, 400);
                                    }, 400);
                                }, 400);
                            }, 400);
                        }, 1000);
                    }, 500);
                }, 1000);



            } else {
                sliderButton.style.left = '0px';
            }
        }
    }

    function drag(e) {
        if (isDragging) {
            const rect = sliderContainer.getBoundingClientRect();
            let clientX;
            if (e.type === 'touchmove') {
                clientX = e.touches[0].clientX;
            } else {
                clientX = e.clientX;
            }
            let newLeft = clientX - rect.left - sliderButton.clientWidth / 2;

            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft > maxLeft) {
                newLeft = maxLeft;
            }

            sliderButton.style.left = newLeft + 'px';
        }
    }

    fadeIn(pTextoP);

    setTimeout(() => {
        fadeOut(pTextoP)
        setTimeout(() => {
            pTextoP.innerHTML = "BIENVENIDO"
            fadeIn(pTextoP)
            setTimeout(() => {
                fadeOut(pTextoP)
                setTimeout(() => {
                    pTextoP.style.fontFamily = "gr"
                    pTextoP.innerHTML = "UNCOMMON"
                    pTextoP.style.fontSize = "10vh"
                    pTextoP.style.margin = "0px"
                    fadeIn(pTextoP)
                    fadeIn(omiedo)
                    setTimeout(() => {
                        fadeIn(sliderContainer)
                        fadeIn(iframe)
                        fadeIn(tobravesouls)
                    }, 100);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 2000);

    let timer = 27;

    function mostrarQ1(){
        fadeIn(Q1)
        fadeIn(containerTimer)
        fadeIn(progressBar)
        fadeIn(containerBotones1)

        timerIsActive = true
    }

    function moveFirstDivToEnd() {
        let containerTimer = document.querySelector('.containerTimer');
        let divs = document.querySelectorAll('.num');

        if(timerIsActive){
            // Aplica la transformación a todos los divs
            divs.forEach(div => {
                div.style.transform = `translateX(-10vh)`;
            });

            // Espera el tiempo de la animación antes de mover el primer div al final
            setTimeout(() => {

                if (timer == (-1)) {
                    divs[0].innerHTML = "";
                } else {
                    divs[0].innerHTML = timer;
                }

                // Mueve el primer div al final del contenedor
                containerTimer.appendChild(divs[0]);

                // Resetea las transformaciones
                divs.forEach(div => {
                    div.style.transition = 'none'; // Desactiva la transición temporalmente
                    div.style.transform = 'none';
                });

                // Fuerza un reflujo para aplicar el cambio inmediatamente
                containerTimer.offsetHeight;

                // Reactiva la transición
                divs.forEach(div => {
                    div.style.transition = 'transform 0.5s';
                });

                timer--

                if (timer === -2) {
                    clearInterval(intervalId); // Detiene el intervalo cuando timer llega a -2
                }
            }, 500); // Debe ser igual a la duración de la transición en CSS
        }
    }
    intervalId = setInterval(moveFirstDivToEnd, 1000); // Llama a moveFirstDivToEnd cada segundo
});

function mostrarQ2() {
    bar.style.width = "50%"

    Utils.fadeOut(Q1)
    Utils.fadeOut(containerBotones1)

    setTimeout(function () {
        Utils.fadeIn(Q2)
        Utils.fadeIn(containerBotones2)
    }, 1000);
}

function mostrarQ3() {
    bar.style.width = "75%"

    Utils.fadeOut(Q2)
    Utils.fadeOut(containerBotones2)

    setTimeout(function () {
        Utils.fadeIn(Q3)
        Utils.fadeIn(containerBotones3)
    }, 1000);
}

function mostrarQ4() {
    ultimoBtnNO.disabled = true

    bar.style.width = "100%"

    Utils.fadeOut(Q3)
    Utils.fadeOut(containerBotones3)
    Utils.fadeOut(containerTimerGlob)
    Utils.fadeOut(progressBar)
    
    Qr4.innerHTML = generateCode();
    timerIsActive = false

    llenarInput("inputP4", Qr4.innerHTML)

    setTimeout(function () {
        Utils.fadeIn(Q4)
        Utils.fadeIn(Qr4)
        Utils.fadeIn(containerQR)
    }, 1000);

    submit.click();
}

function generateCode(){
    let string_length = 10
    let randString = 'Be'
    let charR = 'ABCDEFGHJKMNPQRST23456789abcdefghjkmnopqrst'
    for (let i = 0; i < string_length; i++) {
        randString += charR.charAt(Math.floor(Math.random()*charR.length))
    }

    return randString
}

function copyCode(){
    Utils.fadeIn(copiadoDiv)

    var texto = document.createElement("textarea");
    texto.value = Qr4.innerHTML;
    document.body.appendChild(texto);

    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles

    document.execCommand("copy");

    document.body.removeChild(texto);

    setTimeout(() => {
        Utils.fadeOut(copiadoDiv)
    }, 1500);
}
