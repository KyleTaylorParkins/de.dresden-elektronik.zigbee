'use strict';

const Homey = require('homey');

class DresdenElektronikZigbee extends Homey.App {
	
	onInit() {
		this.log('Started DresdenElektronikZigbee...');
	}
	
}

module.exports = DresdenElektronikZigbee;