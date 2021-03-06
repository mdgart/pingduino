$(document).ready( function() {
    var socket = io.connect('', {port: 8001});
    
    function updateArduinoStatus(data) {
        $('#arduinoStatusEvent').html(data['status']);    
    };
    
    function updateClients(data) {
        $('#onlineClients').html(data.clients);
    };
    
    function updateButtonEvents(data) {
        $('#buttonEventCount').html(data.buttonEventCount);
    };

    function updatePotentiometerValue(data) {
        $('#potentiometerValue').html(data.value);
    }
    
    function updateLightSensorValue(data) {
        $('#lightSensorValue').html(data.value);
    }
    
    function beep() {
        socket.emit('beep', {});
    };

    $('#beepButton').click(beep);

    socket.on('updateArduinoStatus', updateArduinoStatus);
    socket.on('updateClients', updateClients);
    socket.on('updateButtonEvents', updateButtonEvents);
    socket.on('updatePotentiometerValue', updatePotentiometerValue);
    socket.on('updateLightSensorValue', updateLightSensorValue);
});
