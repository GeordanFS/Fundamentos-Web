let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa=document.querySelector("#mapa")

nome.style.width="100%"
email.style.width="100%"

function validaNome() {
    let txt = document.querySelector("#txtnome")
    if(nome.value.length <3){
       txt.innerHTML="Nome inválido"
       txt.style.color="red"
       nomeOk=false
    }
       else{
        txt.innerHTML="Nome válido" 
        txt.style.color="green"
        nomeOk=true
    }


    }
    function validaEmail() {
        let txt = document.querySelector("#txtEmail")
        if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
           txt.innerHTML="Email inválido"
           txt.style.color="red"
           emailOk=false
        }
           else{
            txt.innerHTML="Email válido" 
            txt.style.color="green"
            emailOk=true
        }}
        function validaAssunto() {
            let txt = document.querySelector("#txtAssunto")
            if(assunto.value.length >=100){
               txt.innerHTML="Texto muito grande, digite até 100 caracteres"
               txt.style.backgroundColor="red"
               txt.style.color="black"
               txt.style.display="block"
               assuntoOk=false
            }
               else{
                txt.style.display="none"
                assuntoOk=true
            }}

    function enviar(){
        if(nomeOk==true && emailOk==true && assuntoOk==true){
            alert("Formulário enviado")
        }
        else{
            alert("Preencha os campos corretamente")
        }
    }

    function mapaZoom(){
        mapa.style.width="800px"
        mapa.style.height="600px"
    }

    function mapaNormal(){
        mapa.style.width="400px"
        mapa.style.height="250px"
    }