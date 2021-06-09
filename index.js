// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    return Math.abs(x - 42);
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(x) {
    return (Math.abs(x-42))*264;
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(x,y) {
    return (Math.abs(x - y))*264;
}

distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(x,y) {
    let feet = ((Math.abs(x-y))*264);

    if (feet <= 400) {
        return 0;
    }
    else if (feet >= 2500) {
        return 'cannot travel that far';
    }
    else if (2000 < feet) {
        return 25;
    }
    else if (feet <= 2000) {
        return (0.02*(feet - 400));
    }
}

calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);