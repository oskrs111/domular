//const EventEmitter = require('events');
//const eventEmitter = new events.EventEmitter();
const logEnable = true;
'use strict';
class DomularDevice {
    constructor(describeObject) {
            if(logEnable) console.log("DomularDevice::constructor= " + describeObject);
			
			this._deviceUuid = describeObject.deviceUuid;		
			this._deviceAlias = describeObject.deviceAlias;			
			this._statePermit = describeObject.statePermit;
			this._stateArray = new Array();
			for(var t=0; t < describeObject.deviceStates.lenght; t++)
			{
				this._stateArray[t] = new DomularState(describeObject.deviceStates[t]);
			}
			this._attributeArray = new Array();
			for(var t=0; t < describeObject.deviceAttributes.lenght; t++)
			{
				this._stateArray[t] = new DomularAttribute(describeObject.deviceAttributes[t]);
			}
			
			this._htmlRender = true; 
        }
        /*
         get firstName() { return this._firstName; }
         set firstName(value) { this._firstName = value; }
         get lastName() { return this._lastName; }
         set lastName(value) { this._lastName = value; }
         get age() { return this._age; }
         set age(value) { this._age = value; }
         */
}
module.exports = DomularDevice;

class DomularState {
	constructor(describeState) {
            if(logEnable) console.log("DomularState::constructor= " + describeState);
			
			this._stateAlias = describeState.stateAlias;
			this._stateNumber = describeState.stateNumber;
        }
}
module.exports = DomularState;

class DomularAttribute {
	constructor(describeAttribute) {
            if(logEnable) console.log("describeAttribute::constructor= " + describeAttribute);
			
			this._attributeAlias = describeAttribute.attributeAlias;
			this._atrributeType = describeAttribute.atrributeType;
			this._attributeValue = describeAttribute.attributeValue;
			this._attributeRangeHi = describeAttribute.attributeRangeHi;
			this._attributeRangeLo = describeAttribute.attributeRangeLo;
			this._attributePermit = describeAttribute.attributePermit;	//rwv -> rEAD, wRITE, vISIBLE		
        }
}
module.exports = DomularAttribute;

class DomularGroup {
	constructor(describeGroup) {
            if(logEnable) console.log("DomularGroup::constructor= " + describeGroup);
			
			this._groupAlias = describeGroup.groupAlias;
			this._groupDevices = new Array();	
			this._htmlRender = true; 			
        }
		
		addDevice(DomularDevice)
		{
			this._groupDevices.push(DomularDevice);
		}
		
		removeDevice(DomularDevice)
		{
			
		}
}
module.exports = DomularGroup;
