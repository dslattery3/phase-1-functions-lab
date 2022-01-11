function distanceFromHqInBlocks(someValue){
    let distance = Math.abs(someValue - 42);
    return distance;
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    let n = Math.abs((destination - start) * 264);
    return n;
}
function calculatesFarePrice(start, destination){
    let x = distanceTravelledInFeet(start,destination);
    let fare = 0;
    if (x < 400){
        return fare;
    }
    else if (x <= 2000){
        fare = ((x - 400) * 0.02);
        return fare;
    }
    else if (x <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}