// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if(block > 42) {
        return block-42;
    } else {
        return 42-block;
    }
}

function distanceFromHqInFeet(blocks) {
    let distance = distanceFromHqInBlocks(blocks);
    return distance * 264
}

function distanceTravelledInFeet(block1, block2) {
    if(block1>block2) {
        return (block1-block2) * 264
    } else {
        return (block2-block1) * 264
    }
}

function calculatesFarePrice(block1, block2) {
    let feetDistance = distanceTravelledInFeet(block1, block2);

    if(feetDistance<400) {
        return 0
    } else if(feetDistance>=400 && feetDistance<2000) {
        return 2.56
    } else if (ride <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
    
}