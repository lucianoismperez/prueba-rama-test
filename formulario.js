document.addEventListener("DOMContentLoaded", function () {
    let captchaText = document.querySelector('#captcha');
    let userText = document.querySelector('#textBox');
    let submitButton = document.querySelector('#submit');
    let output = document.querySelector('#output');
    let refreshButton = document.querySelector('#refresh');
    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    let arreglovacio = [];
    for (let i = 1; i <= 2; i++) {                                                    //el recorrido que arma el captcha va a generar uno con 2 letras
        arreglovacio.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        console.log("a ver...")
        console.log(arreglovacio)   //agrega las letras del random al arreglo
    }
    captchaText.innerHTML = arreglovacio.join('');
    console.log(captchaText.innerHTML)    //join hace que a las letras del arreglo se le eliminen las comas que se ponen por defecto, sino aparecerían con comas

    function enviado() {
        if (userText.value === captchaText.innerHTML) {
            output.innerHTML = "Correcto!";
        } else {
            output.innerHTML = "Incorrecto";                   //el output reproduce o muestra los resultados de el procesamiento del input
        }
    };

    userText.addEventListener('click', function (e) {     //usertext es la variable a la que se le asigna el id del cuadro de texto/
        if (e.keyCode === 13) {                                  /* keycode==13 código que tiene tecla del teclado cuando la pulsamos. Nos sirve cuando queremos programar una función en nuestra página                                                                que responde a una determinada tecla para realizar una determinada acción. 13= enter */
            enviado();
        }
    }
    );

    submitButton.addEventListener('click', enviado);           //submitbutton variable asociada al submit de enviar. No encuentro dónde se cambia


    refreshButton.addEventListener('click', function () {        //crea un nuevo captcha cada vez que aprieto el boton resfrescar.
        userText.value = "";                              //usertext: var a la que se le asigna el id del cuadro de texto. Al poner .value=""/ creo que lo inicializa vacio.
        let Arreglorefresh = [];
        for (let j = 1; j <= 2; j++) {
            Arreglorefresh.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        captchaText.innerHTML = Arreglorefresh.join('');
        output.innerHTML = "";
    })
});