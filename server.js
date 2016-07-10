var app = require("express")();
var express = require('express');

var Chart = require('src/chart.js');

app.use(express.static(__dirname + '/public'));

var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

var mySocket;

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var mySerial = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600,
  parser: serialport.parser.readline("\n")
});

mySerial.on("open", function() {
  console.log("port");
});

mySerial.on("data", function(datos) {
  //console.log(datos);
  io.emit("datoArduino", {
    valor: data
  });
});

io.on("connection", function(socket) {
  console.log("puerto en uso");
});

http.listen(3000, function() {
  console.log("madafakaaa !!! 3000");
});
