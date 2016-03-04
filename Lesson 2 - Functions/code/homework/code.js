(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
        var aircraftObj = {
            code: newAircraftCode,
            services: []
        }
        global.UAM.aircrafts.push(aircraftObj);
        return aircraftObj;
        
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        // !!!
        if( global.UAM.aircrafts.indexOf(aircraftObj)>0){
            global.UAM.aircrafts.splice( global.UAM.aircrafts.indexOf(aircraftObj), 1 );
        }
        
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExxecute) {
        // !!!
        global.UAM.aircrafts[global.UAM.aircrafts.indexOf(aircraftObj)].services.push({
        name: name,
        timeToExecute: timeToExxecute
    });
    };
        
    global.UAM.reduceTimeToExecute = function(time) {
        // !!!
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!!
        var repairs = [];
        for(var i=0; i<global.UAM.aircrafts.lenght; i++){
            if(global.UAM.aircrafts[i].services.timeToExecute <= maxTimeToExecute){
               repairs.push(global.UAM.aircrafts[i]);
            }
        }
        return repairs;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
