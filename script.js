const sample_coord = {
 GRU:	[-23.4355564, -46.4730568],
 REC:	[-8.1264896, -34.9235992],
 POA: [-29.9944, -51.1713982],
 SDU:	[-22.9104996, -43.1631012],
 PTY:	[9.0713596, -79.3834991],
 CNF:	[-19.6244431, -43.9719429]
}

function tableCreate(data){
    var body = document.body
    tbl  = document.createElement('table');
    
    for(var i = 0; i < data.length; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < data[i].length; j++){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(data[i][j]));
                

            
        }
    }
    body.appendChild(tbl);
}

let map = L.map('map', {
    center: [-15.427780, -51.184844],
    zoom: 5
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.circle([-15.83, -47.86], {
    radius: 50000,
    color: 'red', 
    fillColor: 'red'
}).addTo(map);

 let sample =  [{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"GRU","icao":"SBGR","terminal":"2","gate":null,"delay":36,"scheduled":"2023-02-17T22:30:00+00:00","estimated":"2023-02-17T22:30:00+00:00","actual":"2023-02-17T23:05:00+00:00","estimated_runway":"2023-02-17T23:05:00+00:00","actual_runway":"2023-02-17T23:05:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":10,"scheduled":"2023-02-18T00:15:00+00:00","estimated":"2023-02-18T00:15:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Qatar Airways","iata":"QR","icao":"QTR"},"flight":{"number":"5128","iata":"QR5128","icao":"QTR5128","codeshared":{"airline_name":"latam airlines","airline_iata":"la","airline_icao":"lan","flight_number":"3244","flight_iata":"la3244","flight_icao":"lan3244"}},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"GRU","icao":"SBGR","terminal":"2","gate":null,"delay":36,"scheduled":"2023-02-17T22:30:00+00:00","estimated":"2023-02-17T22:30:00+00:00","actual":"2023-02-17T23:05:00+00:00","estimated_runway":"2023-02-17T23:05:00+00:00","actual_runway":"2023-02-17T23:05:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":10,"scheduled":"2023-02-18T00:15:00+00:00","estimated":"2023-02-18T00:15:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Qatar Airways","iata":"QR","icao":"QTR"},"flight":{"number":"5109","iata":"QR5109","icao":"QTR5109","codeshared":{"airline_name":"latam airlines","airline_iata":"la","airline_icao":"lan","flight_number":"3244","flight_iata":"la3244","flight_icao":"lan3244"}},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"GRU","icao":"SBGR","terminal":"2","gate":null,"delay":36,"scheduled":"2023-02-17T22:30:00+00:00","estimated":"2023-02-17T22:30:00+00:00","actual":"2023-02-17T23:05:00+00:00","estimated_runway":"2023-02-17T23:05:00+00:00","actual_runway":"2023-02-17T23:05:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":10,"scheduled":"2023-02-18T00:15:00+00:00","estimated":"2023-02-18T00:15:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"LATAM Airlines","iata":"LA","icao":"LAN"},"flight":{"number":"3244","iata":"LA3244","icao":"LAN3244","codeshared":null},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"REC","icao":"SBRF","terminal":"1","gate":"11","delay":19,"scheduled":"2023-02-17T22:15:00+00:00","estimated":"2023-02-17T22:15:00+00:00","actual":"2023-02-17T22:33:00+00:00","estimated_runway":"2023-02-17T22:33:00+00:00","actual_runway":"2023-02-17T22:33:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":null,"scheduled":"2023-02-18T00:55:00+00:00","estimated":"2023-02-18T00:55:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Azul","iata":"AD","icao":"AZU"},"flight":{"number":"4302","iata":"AD4302","icao":"AZU4302","codeshared":null},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"POA","icao":"SBPA","terminal":"1","gate":"124","delay":21,"scheduled":"2023-02-17T22:40:00+00:00","estimated":"2023-02-17T22:40:00+00:00","actual":"2023-02-17T23:00:00+00:00","estimated_runway":"2023-02-17T23:00:00+00:00","actual_runway":"2023-02-17T23:00:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":11,"scheduled":"2023-02-18T01:05:00+00:00","estimated":"2023-02-18T01:05:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"LATAM Airlines","iata":"LA","icao":"LAN"},"flight":{"number":"3709","iata":"LA3709","icao":"LAN3709","codeshared":null},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"SDU","icao":"SBRJ","terminal":"1","gate":"02","delay":26,"scheduled":"2023-02-17T21:45:00+00:00","estimated":"2023-02-17T21:45:00+00:00","actual":"2023-02-17T22:11:00+00:00","estimated_runway":"2023-02-17T22:11:00+00:00","actual_runway":"2023-02-17T22:11:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":7,"scheduled":"2023-02-17T23:35:00+00:00","estimated":"2023-02-17T23:35:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"LATAM Airlines","iata":"LA","icao":"LAN"},"flight":{"number":"3971","iata":"LA3971","icao":"LAN3971","codeshared":null},"aircraft":{"registration":"PR-XBE","iata":"A20N","icao":"A20N","icao24":"E4953D"},"live":{"updated":"2023-02-18T01:36:00+00:00","latitude":-20.83,"longitude":-44.05,"altitude":11582.4,"direction":329,"speed_horizontal":813.028,"speed_vertical":0,"is_ground":false}},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"PTY","icao":"MPTO","terminal":"2","gate":"218","delay":23,"scheduled":"2023-02-17T15:59:00+00:00","estimated":"2023-02-17T15:59:00+00:00","actual":"2023-02-17T16:22:00+00:00","estimated_runway":"2023-02-17T16:22:00+00:00","actual_runway":"2023-02-17T16:22:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":null,"scheduled":"2023-02-18T00:21:00+00:00","estimated":"2023-02-18T00:21:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Copa Airlines","iata":"CM","icao":"CMP"},"flight":{"number":"205","iata":"CM205","icao":"CMP205","codeshared":null},"aircraft":{"registration":"HP-1526CMP","iata":"B738","icao":"B738","icao24":"0C2018"},"live":{"updated":"2023-02-17T21:56:12+00:00","latitude":6.44,"longitude":-76.53,"altitude":11277.6,"direction":134,"speed_horizontal":892.664,"speed_vertical":0,"is_ground":false}},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"PTY","icao":"MPTO","terminal":"2","gate":"218","delay":23,"scheduled":"2023-02-17T15:59:00+00:00","estimated":"2023-02-17T15:59:00+00:00","actual":"2023-02-17T16:22:00+00:00","estimated_runway":"2023-02-17T16:22:00+00:00","actual_runway":"2023-02-17T16:22:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":null,"scheduled":"2023-02-18T00:21:00+00:00","estimated":"2023-02-18T00:21:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Gol","iata":"G3","icao":"GLO"},"flight":{"number":"6909","iata":"G36909","icao":"GLO6909","codeshared":{"airline_name":"copa airlines","airline_iata":"cm","airline_icao":"cmp","flight_number":"205","flight_iata":"cm205","flight_icao":"cmp205"}},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"PTY","icao":"MPTO","terminal":"2","gate":"218","delay":23,"scheduled":"2023-02-17T15:59:00+00:00","estimated":"2023-02-17T15:59:00+00:00","actual":"2023-02-17T16:22:00+00:00","estimated_runway":"2023-02-17T16:22:00+00:00","actual_runway":"2023-02-17T16:22:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":null,"scheduled":"2023-02-18T00:21:00+00:00","estimated":"2023-02-18T00:21:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Azul","iata":"AD","icao":"AZU"},"flight":{"number":"7555","iata":"AD7555","icao":"AZU7555","codeshared":{"airline_name":"copa airlines","airline_iata":"cm","airline_icao":"cmp","flight_number":"205","flight_iata":"cm205","flight_icao":"cmp205"}},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"CNF","icao":"SBCF","terminal":"1","gate":"19","delay":null,"scheduled":"2023-02-17T17:00:00+00:00","estimated":"2023-02-17T17:00:00+00:00","actual":"2023-02-17T16:46:00+00:00","estimated_runway":"2023-02-17T16:46:00+00:00","actual_runway":"2023-02-17T16:46:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":12,"scheduled":"2023-02-17T18:20:00+00:00","estimated":"2023-02-17T18:20:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Azul","iata":"AD","icao":"AZU"},"flight":{"number":"4532","iata":"AD4532","icao":"AZU4532","codeshared":null},"aircraft":null,"live":null},{"flight_date":"2023-02-17","flight_status":"active","departure":{"airport":null,"timezone":null,"iata":"CNF","icao":"SBCF","terminal":"1","gate":"19","delay":null,"scheduled":"2023-02-17T17:00:00+00:00","estimated":"2023-02-17T17:00:00+00:00","actual":"2023-02-17T16:46:00+00:00","estimated_runway":"2023-02-17T16:46:00+00:00","actual_runway":"2023-02-17T16:46:00+00:00"},"arrival":{"airport":null,"timezone":null,"iata":"BSB","icao":"SBBR","terminal":"1","gate":null,"baggage":null,"delay":12,"scheduled":"2023-02-17T18:20:00+00:00","estimated":"2023-02-17T18:20:00+00:00","actual":null,"estimated_runway":null,"actual_runway":null},"airline":{"name":"Copa Airlines","iata":"CM","icao":"CMP"},"flight":{"number":"7137","iata":"CM7137","icao":"CMP7137","codeshared":{"airline_name":"azul","airline_iata":"ad","airline_icao":"azu","flight_number":"4532","flight_iata":"ad4532","flight_icao":"azu4532"}},"aircraft":null,"live":null}]

/* API CALL
let url = "http://api.aviationstack.com/v1/flights?a&arr_icao=SBBR&flight_status=active";
xhttp = new XMLHttpRequest()
xhttp.open("GET", url, false);
xhttp.send();
aux = xhttp.responseText
sample = JSON.parse(aux)
sample = sample.data
console.log(sample)
*/

let departure = {}

sample.forEach(element => {
    if (`${element.departure.iata}` in departure) {
        departure[element.departure.iata]+= 1
        
    }
    
    else {
        departure[element.departure.iata] = 1 
    
    }
    
    latitude = sample_coord[element.departure.iata][0]
    longitude = sample_coord[element.departure.iata][1]
    L.marker([latitude, longitude]).addTo(map)
    let latlong = [[-15.83, -47.86], [latitude, longitude]]
    L.polyline(latlong, {color:'blue', weight: 1, opacity: 0.5}).addTo(map)
    
});

let arrival = {}

sample.forEach(element => {
    if (`${element.arrival.iata}` in arrival) {
        arrival[element.arrival.iata] += 1
    }

    else {
        arrival[element.arrival.iata] = 1
    }
});

array_departure = [['Aeroporte de origem(IATA)','Número de voos']]

for (const key_value of Object.entries(departure)) {
    array_departure.push(key_value)
}



tableCreate(array_departure);

document.querySelector("#voos_entrando").innerHTML = `Voos entrando: ${Object.keys(departure).length}` 


