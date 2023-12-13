window.onload = function(){
    let barraProgresso = document.querySelectorAll(".barraProgresso").item(0);
    let svg25Ok = document.querySelectorAll(".svg25Ok");
    let svg25NaoOk = document.querySelectorAll(".svg25NaoOk");
    let valor = 0;
    let ultimaTecla = "";
    
    svg25Ok[0].style.left    = "calc(25% - 52px)";
    svg25NaoOk[0].style.left = "calc(25% - 52px)";
        
    svg25Ok[1].style.left    = "calc(50% - 52px)";
    svg25NaoOk[1].style.left = "calc(50% - 52px)";
        
    svg25Ok[2].style.left    = "calc(75% - 52px)";
    svg25NaoOk[2].style.left = "calc(75% - 52px)";
        
    svg25Ok[3].style.left    = "calc(100% - 52px)";
    svg25NaoOk[3].style.left = "calc(100% - 52px)";

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 37) {
            valor--;
            if(valor < 0) valor = 0;
        }
        if (event.keyCode === 39) {
            valor++;
            if(valor > 4) valor = 4;
        }
        executar(valor);
    });
    function executar(posicao){
        switch(posicao){
            case 0:
                barraProgresso.style.width = "0%";
                svg25NaoOk[0].style.opacity = "1";
                svg25NaoOk[1].style.opacity = "1";
                svg25NaoOk[2].style.opacity = "1";
                svg25NaoOk[3].style.opacity = "1";
                break;
            case 1:
                barraProgresso.style.width = "25%";
                svg25NaoOk[0].style.opacity = "0";
                svg25NaoOk[1].style.opacity = "1";
                svg25NaoOk[2].style.opacity = "1";
                svg25NaoOk[3].style.opacity = "1";
                break;
            case 2:
                barraProgresso.style.width = "50%";
                svg25NaoOk[0].style.opacity = "0";
                svg25NaoOk[1].style.opacity = "0";
                svg25NaoOk[2].style.opacity = "1";
                svg25NaoOk[3].style.opacity = "1";
                break;
            case 3:
                barraProgresso.style.width = "75%";
                svg25NaoOk[0].style.opacity = "0";
                svg25NaoOk[1].style.opacity = "0";
                svg25NaoOk[2].style.opacity = "0";
                svg25NaoOk[3].style.opacity = "1";
                break;
            case 4:
                barraProgresso.style.width = "100%";
                svg25NaoOk[0].style.opacity = "0";
                svg25NaoOk[1].style.opacity = "0";
                svg25NaoOk[2].style.opacity = "0";
                svg25NaoOk[3].style.opacity = "0";
        }
    }
}