        let alarm = new Audio('alarm.mp3');
        let timerStarted = false;

        var weich = 0;
        var wachsweich = 0;
        var hard = 0;
        var sizeS = 0;
        var sizeM = 0;
        var sizeL = 0;
        var tempFridge = 0;
        var tempRoom = 0;
        var boilingTime = 1000 * 6 * 60;
        var intervalID;
        var bT;

        function home(){
            if(timerStarted){
                document.getElementById("popup-1").classList.toggle("active");
            }
            else{
            clearInterval(intervalID);

            window.weich = 0;
            window.wachsweich = 0;
            window.hard = 0;
            window.sizeS = 0;
            window.sizeM = 0;
            window.sizeL = 0;
            window.tempFridge = 0;
            window.tempRoom = 0;
            window.boilingTime = 1000 * 6 * 60;

            document.getElementById('s1').style.display = 'flex';
            document.getElementById('s2').style.display = 'none';
            document.getElementById('s3').style.display = 'none';
            document.getElementById('s4').style.display = 'none';
            document.getElementById('h1').style.display = 'flex';
            document.getElementById('h2').style.display = 'none';
            document.getElementById('h3').style.display = 'none';
            document.getElementById('h4').style.display = 'none';

            timerStarted = false;
            }
        }

        function eiWeich(){
            window.weich = 0;
            document.getElementById('s1').style.display = 'none';
            document.getElementById('h1').style.display = 'none';
            document.getElementById('h2').style.display = 'flex';
            document.getElementById('s2').style.display = 'flex';
        }

        function eiWachsweich(){
            window.wachsweich = 1000 * 30;
            document.getElementById('s1').style.display = 'none';
            document.getElementById('h1').style.display = 'none';
            document.getElementById('h2').style.display = 'flex';
            document.getElementById('s2').style.display = 'flex';       
        }

        function eiHart(){
            window.hard = 1000 * 60;
            document.getElementById('s1').style.display = 'none';
            document.getElementById('h1').style.display = 'none';
            document.getElementById('h2').style.display = 'flex';
            document.getElementById('s2').style.display = 'flex';        
        }

        function eiS(){
            window.sizeS = -1000 * 30;
            document.getElementById('s2').style.display = 'none';
            document.getElementById('h2').style.display = 'none';
            document.getElementById('h3').style.display = 'flex';
            document.getElementById('s3').style.display = 'flex';
        }

        function eiM(){
            window.sizeM = 0;
            document.getElementById('s2').style.display = 'none';
            document.getElementById('h2').style.display = 'none';
            document.getElementById('h3').style.display = 'flex';
            document.getElementById('s3').style.display = 'flex';
        }

        function eiL(){
            window.sizeL = 1000 * 30;
            document.getElementById('s2').style.display = 'none';
            document.getElementById('h2').style.display = 'none';
            document.getElementById('h3').style.display = 'flex';
            document.getElementById('s3').style.display = 'flex';
        }

        function fridge(){
            window.tempFridge = 1000 * 60;   

            window.bT = boilingTime + weich + wachsweich + hard + 
            sizeS + sizeM + sizeL + tempFridge + tempRoom;

            let minutes = bT / (1000 * 60);
            minutes = Math.floor(minutes);
            let seconds = (bT / 1000) % 60;
            seconds = Math.round(seconds);
            seconds = ( '0' + seconds).slice(-2);
            let text = '0' + minutes + ' : ' + seconds;

            document.getElementById('countdown').innerHTML = text;

            document.getElementById('s3').style.display = 'none';
            document.getElementById('h3').style.display = 'none';
            document.getElementById('h4').style.display = 'flex';
            document.getElementById('s4').style.display = 'flex';
        }

        function room(){
            window.tempRoom = 0;

            window.bT = boilingTime + weich + wachsweich + hard + 
            sizeS + sizeM + sizeL + tempFridge + tempRoom;

            let minutes = bT / (1000 * 60);
            minutes = Math.floor(minutes);
            let seconds = (bT / 1000) % 60;
            seconds = Math.round(seconds);
            seconds = ( '0' + seconds).slice(-2);
            let text = '0' + minutes + ' : ' + seconds;

            document.getElementById('countdown').innerHTML = text;

            document.getElementById('s3').style.display = 'none';
            document.getElementById('h3').style.display = 'none';
            document.getElementById('h4').style.display = 'flex';
            document.getElementById('s4').style.display = 'flex';
        }

    function startTimer(){
        if(!timerStarted){
            let startTime = new Date().getTime();
            let endTime = startTime + bT;

        intervalID = setInterval(function(){
            let timeLeft = endTime - new Date().getTime();

            if (timeLeft > 0){
            let minutes = timeLeft / (1000 * 60);
            minutes = Math.floor(minutes);
            let seconds = (timeLeft / 1000) % 60;
            seconds = Math.round(seconds);
            seconds = ( '0' + seconds).slice(-2);
            let text = '0' + minutes + ' : ' + seconds;
            document.getElementById("countdown").innerHTML = text;
        }   
            else{
                alarm.play();
                document.getElementById("countdown").innerHTML = '00 : 00';
                document.getElementById("btna42").innerHTML = 'Stop';
            }
            if (timeLeft = 0)

            console.log(intervalID);

        }, 1000);
        timerStarted = true ;
        }
    }

    function resetStartTimer(){
        clearInterval(intervalID);
        
        let minutes = bT / (1000 * 60);
        minutes = Math.floor(minutes);
        let seconds = (bT / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ( '0' + seconds).slice(-2);
        let text = '0' + minutes + ' : ' + seconds;
        document.getElementById('countdown').innerHTML = text;
        document.getElementById("btna42").innerHTML = 'Reset';
        alarm.pause();

        timerStarted = false;
    }
    
