"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Randomizer = void 0;
var faker_1 = require("@faker-js/faker");
var uuid_1 = require("uuid");
var Randomizer = /** @class */ (function () {
    function Randomizer() {
    }
    Randomizer.getRandomPerson = function () {
        var firstName = faker_1.faker.person.firstName();
        var lastName = faker_1.faker.person.lastName();
        return {
            id: uuid_1.v4(),
            firstName: firstName,
            lastName: lastName,
            email: firstName + "." + lastName + "@" + faker_1.faker.internet.domainName(),
            phoneNumber: faker_1.faker.phone.number(),
            address: this.getRandomAddress()
        };
    };
    Randomizer.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Randomizer.getRandomAddress = function () {
        return {
            address1: faker_1.faker.location.streetAddress(),
            address2: faker_1.faker.location.secondaryAddress(),
            city: faker_1.faker.location.city(),
            stateProvince: faker_1.faker.location.state(),
            postalCode: faker_1.faker.location.zipCode(),
            country: 'USA'
        };
    };
    Randomizer.getRandomMessage = function () {
        return faker_1.faker.hacker.phrase();
    };
    Randomizer.getDocument = function () {
        return {
            id: uuid_1.v4(),
            title: faker_1.faker.lorem.words(4),
            text: faker_1.faker.lorem.paragraphs(2),
            author: this.getRandomPerson()
        };
    };
    Randomizer.getWebDocument = function () {
        var document = this.getDocument();
        return __assign(__assign({}, document), { url: faker_1.faker.internet.url({ appendSlash: true }) });
    };
    Randomizer.getPrintDocument = function () {
        var document = this.getDocument();
        return __assign(__assign({}, document), { pageCount: faker_1.faker.number.int({ min: 10, max: 100 }) });
    };
    return Randomizer;
}());
exports.Randomizer = Randomizer;
