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
                element === containerBotones3 ||
                element === draggablediv ||
                element === containerBotones2 ||
                element === IgBar ||
                element === containerBotones25) {
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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['contact-form'];
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQZbHranPSYBTAsPN7lJYv_mkysEVvLya-xu6F_Q1nzICSfl533ik4Jz9fZpNo85kB/exec';

    // Función para manejar el envío del formulario
    function submitForm(event) {
        event.preventDefault(); // Previene el envío por defecto

        const formData = new FormData(form);

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    console.log("¡Gracias! ¡Tu formulario se envió correctamente!");
                } else {
                    throw new Error('Error en la solicitud.');
                }
            })
            .catch(error => {
                console.error('¡Error!', error);
                alert("¡Ha ocurrido un error al enviar el formulario!");
            });
    }

    // Añadir el listener al evento submit solo una vez
    form.addEventListener('submit', submitForm);
});


    /* JavaScript */
    document.addEventListener('DOMContentLoaded', function () {
        const sliderButton = document.getElementById('sliderButton');
        const sliderContainer = document.querySelector('.slider-container');
        const maxLeft = sliderContainer.clientWidth - sliderButton.clientWidth;

        const sliderButton2 = document.getElementById('sliderButton2');
        const sliderContainer2 = document.querySelector('.slider-container2');
        const maxLeft2 = sliderContainer2.clientWidth - sliderButton2.clientWidth;

        const sliderButton3 = document.getElementById('sliderButton3');
        const sliderContainer3 = document.querySelector('.slider-container3');
        const maxLeft3 = sliderContainer3.clientWidth - sliderButton3.clientWidth;

        //Primera Pantalla////////////////////////////////////////////////////////////
        const pTextoP = document.getElementById('pTextoP');
        const pTextoP2 = document.getElementById('pTextoP2');
        const sliderCont = document.getElementById('sliderCont');
        const sliderCont2 = document.getElementById('sliderCont2');
        const sliderCont3 = document.getElementById('sliderCont3');
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
        const nomDigS = document.getElementById('nomDigS');
        const nomDigM = document.getElementById('nomDigM');
        const textonoti = document.getElementById('textonoti');
        const respuesta = document.getElementById('respuesta');
        const IgBar = document.getElementById('IgBar');
        const iguser = document.getElementById('iguser');

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
        let isDragging2 = false; // Nuevo para el segundo slider
        let isDragging3 = false; // Nuevo para el segundo slider


        sliderButton.addEventListener('mousedown', startDragging);
        sliderButton.addEventListener('touchstart', startDragging);

        document.addEventListener('mouseup', endDragging);
        document.addEventListener('touchend', endDragging);

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);

        // Funciones para el segundo slider
        sliderButton2.addEventListener('mousedown', startDragging2);
        sliderButton2.addEventListener('touchstart', startDragging2);

        document.addEventListener('mouseup', endDragging2);
        document.addEventListener('touchend', endDragging2);

        document.addEventListener('mousemove', drag2);
        document.addEventListener('touchmove', drag2);

        // Funciones para el segundo slider
        sliderButton3.addEventListener('mousedown', startDragging3);
        sliderButton3.addEventListener('touchstart', startDragging3);

        document.addEventListener('mouseup', endDragging3);
        document.addEventListener('touchend', endDragging3);

        document.addEventListener('mousemove', drag3);
        document.addEventListener('touchmove', drag3);


        const draggableDiv = document.getElementById('draggablediv');
        const handle = document.getElementById('handle');
        let isDraggingd3 = false;
        let startY, startTop;
        const minTop = 10; // equivalent to 10vh
        const maxTop = window.innerHeight * 0.70; // equivalent to 80vh
        const proximityThreshold = 20; // proximity threshold in pixels

        handle.addEventListener('mousedown', (e) => {
            isDraggingd3 = true;
            startY = e.clientY;
            startTop = draggableDiv.offsetTop;
            draggableDiv.style.cursor = 'grabbing';
            draggableDiv.style.transition = 'none'; // Disable transition while dragging
        });

        document.addEventListener('mouseup', () => {
            if (isDraggingd3) {
                isDraggingd3 = false;
                draggableDiv.style.cursor = 'grab';
                draggableDiv.style.transition = 'top 0.2s ease-out'; // Enable transition on release

                const currentTop = draggableDiv.offsetTop;
                if (currentTop < minTop) {
                    draggableDiv.style.top = '10vh';
                } else if (currentTop > maxTop) {
                    draggableDiv.style.top = '70vh';
                } else if (Math.abs(currentTop - minTop) < proximityThreshold) {
                    draggableDiv.style.top = '10vh';
                } else if (Math.abs(currentTop - maxTop) < proximityThreshold) {
                    draggableDiv.style.top = '70vh';
                } else {
                    // Snap to the nearest position
                    if (Math.abs(currentTop - minTop) < Math.abs(currentTop - maxTop)) {
                        draggableDiv.style.top = '10vh';
                    } else {
                        draggableDiv.style.top = '80vh';
                    }
                }
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDraggingd3) {
                const dy = e.clientY - startY;
                const newTop = startTop + dy;
                if (newTop >= minTop && newTop <= maxTop) {
                    draggableDiv.style.top = `${newTop}px`;
                }
            }
        });

        handle.addEventListener('touchstart', (e) => {
            isDraggingd3 = true;
            startY = e.touches[0].clientY;
            startTop = draggableDiv.offsetTop;
            draggableDiv.style.cursor = 'grabbing';
            draggableDiv.style.transition = 'none'; // Disable transition while dragging
        });

        document.addEventListener('touchend', () => {
            if (isDraggingd3) {
                isDraggingd3 = false;
                draggableDiv.style.cursor = 'grab';
                draggableDiv.style.transition = 'top 1s ease'; // Enable transition on release

                const currentTop = draggableDiv.offsetTop;
                if (currentTop < minTop) {
                    draggableDiv.style.top = '10vh';
                } else if (currentTop > maxTop) {
                    draggableDiv.style.top = '70vh';
                } else if (Math.abs(currentTop - minTop) < proximityThreshold) {
                    draggableDiv.style.top = '10vh';
                } else if (Math.abs(currentTop - maxTop) < proximityThreshold) {
                    draggableDiv.style.top = '70vh';
                } else {
                    // Snap to the nearest position
                    if (Math.abs(currentTop - minTop) < Math.abs(currentTop - maxTop)) {
                        draggableDiv.style.top = '10vh';
                    } else {
                        draggableDiv.style.top = '70vh';
                    }
                }
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (isDraggingd3) {
                const dy = e.touches[0].clientY - startY;
                const newTop = startTop + dy;
                if (newTop >= minTop && newTop <= maxTop) {
                    draggableDiv.style.top = `${newTop}px`;
                }
            }
        });
















        function startDragging(e) {
            isDragging = true;
            sliderButton.style.transition = 'none';
        }

        function startDragging2(e) {
            isDragging2 = true;
            sliderButton2.style.transition = 'none';
        }

        function startDragging3(e) {
            isDragging3 = true;
            sliderButton3.style.transition = 'none';
        }


        function fadeOut(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out', 'hidden');

            setTimeout(function () {
                element.style.display = 'none';
            }, 1000);
        }
        let timer = 30000;

        function fadeIn(element) {
            if (element === containerTimer ||
                element === containerBotones1 ||
                element === containerBotones2 ||
                element === progressBar ||
                element === containerBotones25 ||
                element === draggablediv ||
                element === tobravesouls ||
                element === containerBotones3) {
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

        var contInt = 0;

        function endDragging(e) {
            if (isDragging) {

                if (contInt == 0) {
                    isDragging = false;
                    Q1.style.visibility = "visible"
                    progressBar.style.visibility = "visible"
                    progressBar.style.pointerEvents = "all"
                    containerBotones1.style.visibility = "visible"
                    containerBotones1.style.pointerEvents = "all"
                    sliderButton.style.transition = 'left 0.3s';
                    sliderButton.style.transition = 'background-color 0.5s';

                    if (parseInt(sliderButton.style.left, 10) >= maxLeft) {
                        console.log('DESLIZADO');

                        fadeOut(imglogo)
                        fadeOut(sliderCont);
                        fadeOut(omiedo);
                        fadeOut(pTextoP)
                        fadeOut(tobravesouls)

                        principalCont.style.backgroundColor = "#151515"

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
                                                            contInt++;
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
                } else {
                    location.reload();
                }
            }
        }


        function endDragging2(e) {
            if (isDragging2) {
                isDragging2 = false;
                // Lógica de fin de arrastre para el segundo slider...
                if (parseInt(sliderButton2.style.left, 10) >= maxLeft2) {
                    console.log('DESLIZADO2');
                    fadeOut(pTextoP);
                    fadeOut(IgBar);
                    fadeOut(containerQR)
                    fadeOut(sliderContainer2)
                    principalCont.style.backgroundColor = "black"
                    principalCont.style.backgroundImage = "url('img/bggif.gif')"
                    fadeIn(draggablediv)

                } else {
                    sliderButton2.style.left = '0px';
                }
            }
        }

        function endDragging3(e) {
            if (isDragging3) {
                isDragging3 = false;
                // Lógica de fin de arrastre para el segundo slider...
                if (parseInt(sliderButton3.style.left, 10) >= maxLeft3) {
                    console.log('DESLIZADO3');

                    llenarInput("inputP5", iguser.value)
                    submit.click();

                    fadeOut(IgBar)
                    fadeOut(sliderCont2)
                    fadeOut(pTextoP);
                    fadeOut(containerQR)
                    fadeOut(sliderContainer3)
                    principalCont.style.backgroundColor = "black"
                    principalCont.style.backgroundImage = "url('img/bggif.gif')"
                    fadeIn(draggablediv)

                } else {
                    sliderButton3.style.left = '0px';
                }
            }
        }

        function drag3(e) {
            if (isDragging3) {
                const rect = sliderContainer3.getBoundingClientRect();
                let clientX;
                if (e.type === 'touchmove') {
                    clientX = e.touches[0].clientX;
                } else {
                    clientX = e.clientX;
                }
                let newLeft = clientX - rect.left - sliderButton3.clientWidth / 2;

                if (newLeft < 0) {
                    newLeft = 0;
                } else if (newLeft > maxLeft3) {
                    newLeft = maxLeft3;
                }

                sliderButton3.style.left = newLeft + 'px';
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

        function drag2(e) {
            if (isDragging2) {
                const rect = sliderContainer2.getBoundingClientRect();
                let clientX;
                if (e.type === 'touchmove') {
                    clientX = e.touches[0].clientX;
                } else {
                    clientX = e.clientX;
                }
                let newLeft = clientX - rect.left - sliderButton2.clientWidth / 2;

                if (newLeft < 0) {
                    newLeft = 0;
                } else if (newLeft > maxLeft2) {
                    newLeft = maxLeft2;
                }

                sliderButton2.style.left = newLeft + 'px';
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
                            sliderContainer.style.position = "relative"
                            sliderContainer.style.top = "10vh"
                            fadeIn(sliderContainer)
                            fadeIn(tobravesouls)
                        }, 100);
                    }, 1000);
                }, 2000);
            }, 1000);
        }, 2000);


        function mostrarQ1() {
            fadeIn(Q1)
            fadeIn(containerTimer)
            fadeIn(progressBar)
            fadeIn(containerBotones1)

            timerIsActive = true
        }

        function moveFirstDivToEnd() {
            let containerTimer = document.querySelector('.containerTimer');

            if (timerIsActive) {

                if (timer == 26000) {
                    textonoti.innerText = "Tic, tac, tic, tac ...."
                    notif.style.top = "2vh"
                    setTimeout(() => {
                        notif.style.top = "-130vh"
                    }, 3000);
                }

                if (timer == 16000) {
                    textonoti.innerText = "Pilas pilas pues! El tiempo se está acabandoooo"
                    notif.style.top = "2vh"
                    setTimeout(() => {
                        notif.style.top = "-130vh"
                    }, 3000);
                }

                if (timer == 11000) {
                    textonoti.innerText = "Mucha pensadera, mucha pensaderaaa"
                    notif.style.top = "2vh"
                    setTimeout(() => {
                        notif.style.top = "-130vh"
                    }, 3000);
                }

                if (timer == 6000) {
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

                    fadeOut(Q1)
                    fadeOut(Q2)
                    fadeOut(Q25)
                    fadeOut(Q3)
                    fadeOut(containerBotones1)
                    fadeOut(containerBotones2)
                    fadeOut(containerBotones25)
                    fadeOut(containerBotones3)
                    fadeOut(progressBar)

                    principalCont.style.backgroundColor = "#f22a2a"
                    BeText.style.color = "white"

                    containerTimer.style.position = "absolute"
                    containerTimer.style.top = "14vh"
                    containerTimer.style.color = "white"

                    nomDigS.style.color = "white"
                    nomDigM.style.color = "white"
                    pTextoP.style = "transform: rotate(0deg) scale(1, 1)"
                    pTextoP.style.fontSize = "2vh"
                    pTextoP.innerHTML = "<img style='height: 1.5vh' src='img/circus.png'> EY, EY EY QUE PASÓ<br><br><span style='color: #ffffffbf'>DESPUÉS NO DIGAS QUE NO TE AVISAMOS</span>"
                    fadeIn(pTextoP)
                    sliderButton.innerHTML = "CANGREJEAR"
                    sliderContainer.style.position = "absolute"
                    sliderContainer.style.top = "60vh"
                    sliderButton.style.left = '0px';
                    omiedo.style.position = "absolute"
                    omiedo.style.top = "64vh"
                    omiedo.style.fontSize = "1.3vh"
                    omiedo.style.color = "#ffffffd0"
                    omiedo.innerHTML = "NO SOMOS TU EX, PERO TE DAMOS<br>OTRA OPORTUNIDAD"

                    setTimeout(() => {
                        fadeIn(sliderContainer)
                        setTimeout(() => {
                            fadeIn(omiedo)
                        }, 100);
                    }, 1000);
                }
            }
        }

        // Llama a moveFirstDivToEnd cada 10 milisegundos
        let intervalId = setInterval(moveFirstDivToEnd, 10);

        function verificarInput() {
            if (respuesta.value === '') {
                ultimoBtnNO.style.visibility = 'hidden';
            } else {
                ultimoBtnNO.style.visibility = 'visible';
            }
        }

        verificarInput();
        respuesta.addEventListener('input', verificarInput);

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
        numeroP.innerHTML = " ";
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
        timerIsActive = false
        ultimoBtnNO.disabled = true

        bar.style.width = "100%"

        Utils.fadeOut(Q3)
        Utils.fadeOut(containerBotones3)
        Utils.fadeOut(containerTimerGlob)
        Utils.fadeOut(progressBar)

        principalCont.style.backgroundColor = "#f22a2a"

        BeText.style.color = "white"
        pTextoP.style = "transform: rotate(0deg) scale(1, 1)"
        pTextoP.style.justifyContent = "center"
        pTextoP.innerHTML = "<img style='height: 2.5vh' src='img/bomb.png'> CRACK!"
        Utils.fadeIn(pTextoP)

        Qr4.innerHTML = generateCode();
        timerIsActive = false

        llenarInput("inputP4", Qr4.innerHTML)

        setTimeout(function () {
            Utils.fadeOut(pTextoP)
            principalCont.style.backgroundColor = "#151515"
            BeText.style.color = "#616161"

            setTimeout(() => {
                Utils.fadeIn(Q4)
                setTimeout(() => {
                    document.getElementById('tuS').style.color = "#ffffff"
                    setTimeout(() => {
                        document.getElementById('tuS').style.color = "#525252"
                        document.getElementById('suenoS').style.color = "#ffffff"
                        setTimeout(() => {
                            document.getElementById('suenoS').style.color = "#525252"
                            document.getElementById('estaS').style.color = "#ffffff"
                            setTimeout(() => {
                                document.getElementById('estaS').style.color = "#525252"
                                document.getElementById('aS').style.color = "#ffffff"
                                setTimeout(() => {
                                    document.getElementById('aS').style.color = "#525252"
                                    document.getElementById('salvoS').style.color = "#ffffff"
                                    setTimeout(() => {
                                        document.getElementById('salvoS').style.color = "#525252"
                                        document.getElementById('conS').style.color = "#ffffff"
                                        setTimeout(() => {
                                            document.getElementById('conS').style.color = "#525252"
                                            document.getElementById('nosotrosS').style.color = "#ffffff"
                                            setTimeout(() => {
                                                document.getElementById('nosotrosS').style.color = "#525252"
                                                setTimeout(() => {
                                                    Utils.fadeOut(Q4)

                                                    pTextoP.style.top = "25vh"
                                                    pTextoP.innerHTML = "NOS VEMOS PRONTO... GUARDA<br> ESTE CÓDIGO, PUEDE SER LA<br> LLAVE PARA CUMPLIR TU SUEÑO ;)"
                                                    pTextoP.style.fontSize = "1.7vh"
                                                    Utils.fadeIn(pTextoP)
                                                    setTimeout(() => {
                                                        Utils.fadeIn(containerQR)
                                                        Utils.fadeIn(Qr4)
                                                        Utils.fadeIn(IgBar)

                                                        function verificarInputIG() {
                                                            if (iguser.value === '') {
                                                                sliderCont3.style.top = "-200vh"
                                                                setTimeout(() => {
                                                                    sliderCont2.style.top = "70vh"
                                                                    Utils.fadeIn(sliderCont2)
                                                                }, 5000);
                                                            } else {
                                                                sliderCont2.style.top = "-200vh"
                                                                setTimeout(() => {
                                                                    sliderCont3.style.top = "70vh"
                                                                    Utils.fadeIn(sliderCont3)
                                                                }, 200);
                                                            }
                                                        }

                                                        verificarInputIG();
                                                        iguser.addEventListener('input', verificarInputIG);
                                                        
                                                    }, 1000);
                                                }, 400);
                                            }, 400);
                                        }, 400);
                                    }, 400);
                                }, 400);
                            }, 400);
                        }, 400);
                    }, 400);
                }, 400);
            }, 1000);
        }, 1000);

        submit.click();
    }

    function generateCode() {
        let string_length = 10
        let randString = 'Be'
        let charR = 'ABCDEFGHJKMNPQRST23456789abcdefghjkmnopqrst'
        for (let i = 0; i < string_length; i++) {
            randString += charR.charAt(Math.floor(Math.random() * charR.length))
        }

        return randString
    }

    function copyCode() {
        Utils.fadeIn(copiadoDiv);

        var qrTexto = Qr4.innerHTML;

        var texto = document.createElement("textarea");
        texto.value = qrTexto;
        document.body.appendChild(texto);

        texto.select();
        texto.setSelectionRange(0, 99999); // Para dispositivos móviles

        document.execCommand("copy");

        document.body.removeChild(texto);

        var numeroTelefono = "+528334427876"; // Reemplaza con el número de teléfono deseado
        var mensaje = encodeURIComponent("¡Hola! Aquí tienes el código: " + qrTexto);
        var whatsappLink = "https://wa.me/" + numeroTelefono + "?text=" + mensaje;
        window.open(whatsappLink);

        setTimeout(() => {
            Utils.fadeOut(copiadoDiv);
        }, 1500);
    }
