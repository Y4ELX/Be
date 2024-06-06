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
        if (element === containerTimerGlob ||
            element === containerBotones3 ||
            element === pTextoP ||
            element === containerBotones1 ||
            element === containerBotones2 ||
            element === containerBotones3||
            element === containerBotones2 ||
                element === containerBotones25){
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
    const BeText = document.getElementById('BeText');
    const imglogo = document.getElementById('imglogo');
    const principalCont = document.getElementById('principalCont');
    const segDigits = document.getElementById('segDigits');
    const mlsDigits = document.getElementById('mlsDigits');
    const error = document.getElementById('error');
    const numeroP = document.getElementById('numeroP');
    const notif = document.getElementById('notif');
    const textonoti = document.getElementById('textonoti');

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
        if (element === containerTimer ||
            element === containerBotones1 ||
            element === containerBotones2 ||
            element === progressBar ||
            element === containerBotones25 ||
            element === tobravesouls ||
            element === containerBotones3) {
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

                fadeOut(imglogo)
                fadeOut(sliderCont);
                fadeOut(omiedo);
                fadeOut(pTextoP)
                fadeOut(tobravesouls)

                principalCont.style.backgroundColor="#151515"

                setTimeout(function () {
                    
                    textRead.innerHTML = "<span id='sabiamos'>SABÍAMOS </span><span id='que1'>QUE </span><br><span id='dirias'>DIRÍAS </span><span id='que2'>QUE </span><span id='si'>SÍ</span>";

                    setTimeout(function () {
                        fadeIn(BeText)
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
            pTextoP.style = "transform: rotate(180deg) scale(-1, 1)"
            pTextoP.innerHTML = "BIENVENIDO"
            fadeIn(pTextoP)
            setTimeout(() => {
                fadeOut(pTextoP)
                setTimeout(() => {
                    fadeIn(omiedo)
                    setTimeout(() => {
                        fadeIn(imglogo)
                        fadeIn(sliderContainer)
                        fadeIn(tobravesouls)
                    }, 100);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 2000);

    let timer = 30000;

    function mostrarQ1(){
        fadeIn(Q1)
        fadeIn(containerTimer)
        fadeIn(progressBar)
        fadeIn(containerBotones1)

        timerIsActive = true
    }

    function moveFirstDivToEnd() {
        let containerTimer = document.querySelector('.containerTimer');

        if (timerIsActive) {

            if(timer==25000){
                textonoti.innerText = "Tic, tac, tic, tac ...."
                notif.style.top = "2vh"
                setTimeout(() => {
                    notif.style.top = "-130vh"
                }, 3000);
            }

            if (timer == 10000) {
                textonoti.innerText = "Pilas pilas pues! El tiempo se está acabandoooo" 
                notif.style.top = "2vh"
                setTimeout(() => {
                    notif.style.top = "-130vh"
                }, 3000);
            }

            if (timer == 10000) {
                textonoti.innerText = "Me va a dar algo, métale metaleeee"
                notif.style.top = "2vh"
                setTimeout(() => {
                    notif.style.top = "-130vh"
                }, 3000);
            }

            // Calcula los minutos, segundos y milisegundos
            let seconds = Math.floor((timer % 60000) / 1000);
            let milliseconds = Math.floor((timer % 1000) / 10); // Dividir por 10 para tener dos dígitos

            // Formatea los valores para que siempre tengan dos dígitos (excepto milisegundos)
            let formattedSeconds = seconds.toString().padStart(2, '0');
            let formattedMilliseconds = milliseconds.toString().padStart(2, '0');

            // Actualiza el contenido de los elementos HTML
            document.getElementById('segDigits').innerHTML = formattedSeconds;
            document.getElementById('mlsDigits').innerHTML = formattedMilliseconds;

            // Decrementa el timer
            timer -= 10;

            // Si el timer llega a 0, detén el cronómetro
            if (timer <= 0) {
                timerIsActive = false;
                clearInterval(intervalId);
                document.getElementById('mlsDigits').innerHTML = "00";
            }
        }
    }

    // Llama a moveFirstDivToEnd cada 10 milisegundos
    let intervalId = setInterval(moveFirstDivToEnd, 10);
});

function mostrarQ2() {
    bar.style.width = "50%"
    numeroP.innerHTML = "2"

    Utils.fadeOut(Q1)
    Utils.fadeOut(containerBotones1)

    setTimeout(function () {
        Utils.fadeIn(Q2)
        Utils.fadeIn(containerBotones2)
    }, 1000);
}

function mostrarQ25() {
    bar.style.width = "80%"
    numeroP.innerHTML = "3"

    Utils.fadeOut(Q2)
    Utils.fadeOut(containerBotones2)

    setTimeout(function () {
        Utils.fadeIn(Q25)
        Utils.fadeIn(containerBotones25)
    }, 1000);
}

function mostrarQ3() {
    bar.style.width = "5%"
    numeroP.innerHTML = "";
    error.style.marginLeft = "10%";
    error.style.width = "90%";
    error.style.color = "#fe0000";
    error.innerHTML = "OOOPPS! ESTA SE NOS PASÓ ¿ERROR...";

    Utils.fadeOut(Q25)
    Utils.fadeOut(containerBotones25)

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

function checarInput(){
    if(document.getElementById('respuesta').value==''){
        textonoti.innerText = "Escribe algo en el recuadro"
        notif.style.top = "2vh"
        setTimeout(() => {
            notif.style.top = "-130vh"
        }, 3000);
    }else{
        llenarInput('inputP3', document.getElementById('respuesta').value)
        mostrarQ4()
    }
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
