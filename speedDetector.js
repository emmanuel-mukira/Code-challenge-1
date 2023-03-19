//Code to detect speed
    //Variables definition
    let speed=document.getElementById('speed')
    const speedLimit=70;
    const distancePerDemeritPoint=5;
    var message=document.getElementById('showMessage');
    //Function to test input speed and output either a message or one's demerit points
    function detectSpeed(){
        const speedValue=parseInt(speed.value);
    if(speedValue<=speedLimit){
         message="Ok."
    }
    else {
        var demeritPoints=Math.floor((speed-speedLimit)/kmPerDemeritPoint);
         message=`These are your demerit points:${demeritPoints}`;
    }
    console.log(message);
    showMessage.innerText=`${message}`;
}
