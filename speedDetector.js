//Code to detect speed
//Variables definition
let speed ;
const speedLimit=70;
const distancePerDemeritPoint=5;
//Function to test input speed and provide relevant output
function detectSpeed(){
    if(speed<=speedLimit){
        return "Ok."
    }
    else {
        const demeritPoints=Math.floor((speed-speedLimit)/kmPerDemeritPoint);
        console.log(`These are your demerit points:${demeritPoints}`);
    }
}
