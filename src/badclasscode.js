"use strict";
exports.__esModule = true;
var Randomizer_1 = require("./randomizer/Randomizer");
var DocumentProcessorV1_1 = require("./document/DocumentProcessorV1");
var person = Randomizer_1.Randomizer.getRandomPerson();
var webProcessor = new DocumentProcessorV1_1.DocumentProcessorV1(person);
webProcessor.process();
