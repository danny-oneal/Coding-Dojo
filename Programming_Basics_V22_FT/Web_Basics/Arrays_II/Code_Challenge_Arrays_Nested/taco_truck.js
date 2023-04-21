/**
 * The idea is to get the central location of all of the trucks.
 */

function getAverageOfPoints(pointsArr) {
    var xSum = 0;
    var ySum = 0

    for(arr of pointsArr) {
        xSum += arr[0];
        ySum += arr[1];
    }
    return [Math.round(xSum/pointsArr.length), Math.round(ySum/pointsArr.length)];
}

function getDistance(point1, point2) {
    return Math.abs(point1[0] - point2[0] + point1[1] - point2[1]);
}

function findTacoTruckLocation(ccArr) {
    return getAverageOfPoints(ccArr);
}

var parkLocation = findTacoTruckLocation([[10,0], [-1,-10], [2,4]]);
console.log(parkLocation);