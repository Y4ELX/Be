    const containerTimer = document.querySelector('.containerTimer');

    var timerIsActive = false;

    function llenarInput(id, ans) {
        document.getElementById(id).value = ans;
    }

    function adjustWidth(input) {
        var helper = document.getElementById('width-helper');

        // Copia el valor del input al helper
        helper.textContent = input.value;

        // Calcula el nuevo ancho
        var newWidth = helper.offsetWidth;

        if(input.value==''){
            input.style.width = '70%'
        }else{
            input.style.width = newWidth+10 + 'px';
        }
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
                alert("Ha ocurrido un error al enviar tus respuestas, te invitamos a volver a intentarlo :)");
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
        const relax = document.getElementById('relax');
        const thunder = document.getElementById('thunder');
        const cursorP2 = document.getElementById('cursorP2');
        const divFlechaBtn = document.getElementById('divFlechaBtn');
        const bgVideo = document.getElementById('bgVideo');

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


        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        };

        function scrollToTop() {
            console.log("SCROLL")

            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
        }

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
                        draggableDiv.classList.remove('bouncing'); // Remove animation while dragging
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

        
        draggableDiv.addEventListener('touchstart', (e) => {
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
                        draggableDiv.classList.remove('bouncing'); // Remove animation while dragging
                    } else {
                        draggableDiv.style.top = '70vh';

                    }
                }
            }
        });

        draggableDiv.classList.add('bouncing'); // Re-apply animation after dragging

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

            setTimeout(() => {
                // Agregar la clase que cambia la opacidad a 1
                element.classList.add('visible');
            }, 1000);
        }

        let savedState = {};  // Objeto para guardar el estado

        function saveState() {
            savedState = {
                sliderButtonLeft: sliderButton.style.left,
                contInt: contInt,
                timer: timer,
                // Guardar estado de los elementos necesarios
                Q1Visible: Q1.style.visibility,
                progressBarVisible: progressBar.style.visibility,
                containerBotones1Visible: containerBotones1.style.visibility,
                // Agregar aquí todos los elementos y variables necesarias
            };
        }

        function restoreState() {
            sliderButton.style.left = savedState.sliderButtonLeft;
            contInt = savedState.contInt;
            console.log(savedState.contInt)
            timer = savedState.timer;
            // Restaurar estado de los elementos necesarios
            Q1.style.visibility = savedState.Q1Visible;
            progressBar.style.visibility = savedState.progressBarVisible;
            containerBotones1.style.visibility = savedState.containerBotones1Visible;
            // Agregar aquí todos los elementos y variables necesarias
        }

        function resetTimer() {
            containerTimer.style.position = "relative"
            containerTimer.style.top = "unset"
            containerTimer.style.color = "#363636"

            nomDigS.style.color = "white"
            nomDigM.style.color = "#white"
            
            timer = 30000; // Reinicias el temporizador al valor inicial o al necesario
            timerIsActive = false; // Asegúrate de que el temporizador esté activo
            intervalId = setInterval(moveFirstDivToEnd, 1000); // Reinicia el intervalo del temporizador
            // Otras acciones necesarias para reiniciar el temporizador
        }

        var contInt = 0;

        function endDragging(e) {
            if (isDragging) {
                if (contInt == 0) {
                    isDragging = false;
                    
                    if (parseInt(sliderButton.style.left, 10) >= maxLeft) {
                        containerTimer.style.visibility = "hidden";
                        bar.style.width = "2%"
                        error.style.color = "#bdbdbd89"
                        error.innerHTML = "<span style='color: #fe0000;' id='numeroP'>1</span>/3";
                        error.style.margin = "0px"
                        error.style.marginLeft = "90%"
                        error.style.width = "10%"

                        respuesta.value = "";
                        divFlechaBtn.style.visibility = 'hidden';

                        Utils.fadeOut(containerBotones1)
                        Utils.fadeOut(containerBotones2)
                        Utils.fadeOut(containerBotones25)
                        Utils.fadeOut(containerBotones3)

                        fadeOut(containerBotones1)
                        fadeOut(containerBotones2)
                        fadeOut(containerBotones25)
                        fadeOut(containerBotones3)


                        Q1.style.visibility = "visible";
                        progressBar.style.visibility = "visible";
                        progressBar.style.pointerEvents = "all";
                        containerBotones1.style.visibility = "visible";
                        containerBotones1.style.pointerEvents = "all";
                        sliderButton.style.transition = 'left 0.3s';
                        sliderButton.style.transition = 'background-color 0.5s';


                        console.log('DESLIZADO');

                        fadeOut(imglogo);
                        fadeOut(sliderCont);
                        fadeOut(omiedo);
                        fadeOut(pTextoP);
                        fadeOut(tobravesouls);

                        principalCont.style.backgroundColor = "#151515";

                        setTimeout(function () {
                            textRead.innerHTML = "<span id='sabiamos'>SABÍAMOS </span><span id='que1'>QUE </span><br><span id='dirias'>DIRÍAS </span><span id='que2'>QUE </span><span id='si'>SI</span>";

                            setTimeout(function () {
                                fadeIn(BeText);
                                fadeIn(textRead);

                                setTimeout(function () {
                                    document.getElementById('sabiamos').style.color = "#ffffff";

                                    setTimeout(function () {
                                        document.getElementById('sabiamos').style.color = "#525252";
                                        document.getElementById('que1').style.color = "#ffffff";

                                        setTimeout(function () {
                                            document.getElementById('que1').style.color = "#525252";
                                            document.getElementById('dirias').style.color = "#ffffff";

                                            setTimeout(function () {
                                                document.getElementById('dirias').style.color = "#525252";
                                                document.getElementById('que2').style.color = "#ffffff";

                                                setTimeout(function () {
                                                    document.getElementById('que2').style.color = "#525252";
                                                    document.getElementById('si').style.color = "#ffffff";

                                                    setTimeout(function () {
                                                        document.getElementById('si').style.color = "#525252";
                                                        fadeOut(textRead);
                                                        setTimeout(function () {
                                                            saveState();
                                                            contInt++;

                                                            console.log(contInt)
                                                            resetTimer();
                                                            containerTimer.style.visibility = "visible";
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

                }
            }
        }


        function endDragging2(e) {
            if (isDragging2) {
                isDragging2 = false;
                // Lógica de fin de arrastre para el segundo slider...
                if (parseInt(sliderButton2.style.left, 10) >= maxLeft2) {
                    console.log('DESLIZADO2');

                    fadeOut(relax)
                    fadeOut(pTextoP);
                    fadeOut(IgBar);
                    fadeOut(containerQR)
                    fadeOut(sliderCont2)
                    fadeOut(sliderCont3)
                    principalCont.style.backgroundColor = "black"
                    setTimeout(() => {
                        bgVideo.style.opacity = "0.2"
                    }, 1000);
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

                    fadeOut(relax)
                    fadeOut(IgBar)
                    fadeOut(sliderCont2)
                    fadeOut(sliderContainer2)
                    fadeOut(pTextoP);
                    fadeOut(containerQR)
                    fadeOut(sliderContainer3)

                    principalCont.style.backgroundColor = "black"
                    setTimeout(() => {
                        bgVideo.style.opacity = "0.2"
                    }, 1000);                    fadeIn(draggablediv)
                    sliderCont2.style.visibility = "hidden"
                    sliderContainer2.style.visibility = "hidden"
                    sliderCont3.style.visibility = "hidden"
                    sliderContainer3.style.visibility = "hidden"

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
                    textonoti.innerText = "Pilas pues! El tiempo se está acabandoooo"
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
                    fadeOut(thunder)

                    principalCont.style.backgroundColor = "#f22a2a"
                    BeText.src = "img/Betxtwhite.png"

                    containerTimer.style.position = "absolute"
                    containerTimer.style.top = "14vh"
                    containerTimer.style.color = "white"

                    setTimeout(() => {
                        nomDigS.style.color = "white"
                        nomDigM.style.color = "white"
                        pTextoP.style = "transform: rotate(0deg) scale(1, 1)"
                        pTextoP.style.fontSize = "2vh"
                        pTextoP.style.color = "#ffffffbf"
                        pTextoP.style.transition = "ease-in-out 1s;"
                        pTextoP.innerHTML = "<img style='height: 1.5vh' src='img/circus.png'> <span id='ey1'>EY,</span><span id='ey2'> EY</span><span id='ey3'> EY</span><span id='queE'> QUE</span><span id='pasoE'> PASÓ</span><br><br><span style='color: #ffffffbf' id='avisamosDSP'></span>"
                        
                        fadeIn(pTextoP)

                        setTimeout(function () {
                            document.getElementById('ey1').style.color = "#ffffff";

                            setTimeout(function () {
                                document.getElementById('ey1').style.color = "#ffffffbf";
                                document.getElementById('ey2').style.color = "#ffffff";

                                setTimeout(function () {
                                    document.getElementById('ey2').style.color = "#ffffffbf";
                                    document.getElementById('ey3').style.color = "#ffffff";

                                    setTimeout(function () {
                                        document.getElementById('ey3').style.color = "#ffffffbf";
                                        document.getElementById('queE').style.color = "#ffffff";

                                        setTimeout(function () {
                                            document.getElementById('queE').style.color = "#ffffffbf";
                                            document.getElementById('pasoE').style.color = "#ffffff";

                                            setTimeout(function () {
                                                document.getElementById('pasoE').style.color = "#ffffffbf";

                                                var textElement = document.getElementById('avisamosDSP');
                                                textElement.style.fontSize = "1.7vh"

                                                restoreState();

                                                setTimeout(() => {
                                                    const textContent = "DESPUÉS NO DIGAS QUE NO TE AVISAMOS";
                                                    let index = 0;

                                                    function writeText() {
                                                        textElement.innerHTML = textContent.slice(0, index);
                                                        index++;

                                                        if (index <= textContent.length) {
                                                            setTimeout(writeText, 100);
                                                        }
                                                    }

                                                    writeText();

                                                    textElement.classList.add('blinking');


                                                    setTimeout(() => {
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
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 3000);
                                                }, 1000);
                                            }, 400);
                                        }, 400);
                                    }, 400);
                                }, 400);
                            }, 400);
                        }, 1000);
                    }, 1000);
                }
            }
        }

        // Llama a moveFirstDivToEnd cada 10 milisegundos
        let intervalId = setInterval(moveFirstDivToEnd, 10);

        function verificarInput() {
            scrollToTop();
            if (respuesta.value === '') {
                divFlechaBtn.style.visibility = 'hidden';
            } else {
                divFlechaBtn.style.visibility = 'visible';
            }
        }

        verificarInput();
        respuesta.addEventListener('input', verificarInput);

        

        function verificarInput2() {
            scrollToTop();
            if (iguser.value === '') {
                cursorP2.style.display = 'flex';
                iguser.style.width = '80%'
            } else {
                cursorP2.style.display = 'none';
            }
        }

        verificarInput2();
        iguser.addEventListener('input', verificarInput2);

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
        error.style.margin = "0px";
        error.style.width = "100%";
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

        BeText.src = "img/Betxtwhite.png"
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
            BeText.src = "img/Betxt.png"

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

                                                        setTimeout(() => {
                                                            IgBar.style.opacity = "1"
                                                            function verificarInputIG() {
                                                                if (iguser.value === '') {
                                                                    Utils.fadeOut(sliderCont3)
                                                                    sliderCont3.style.top = "-200vh"
                                                                    setTimeout(() => {
                                                                        sliderCont2.style.top = "75vh"
                                                                        Utils.fadeIn(sliderCont2)
                                                                    }, 5000);
                                                                } else {
                                                                    sliderCont2.style.top = "-200vh"
                                                                    setTimeout(() => {
                                                                        sliderCont3.style.top = "75vh"
                                                                        Utils.fadeOut(sliderCont2)
                                                                        Utils.fadeIn(sliderCont3)
                                                                        Utils.fadeIn(relax)
                                                                    }, 200);
                                                                }
                                                            }

                                                            verificarInputIG();
                                                            iguser.addEventListener('input', verificarInputIG);
                                                        }, 1000);
                                                        
                                                    }, 2000);
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

        setTimeout(() => {
            Utils.fadeOut(copiadoDiv);
        }, 1500);
    }
