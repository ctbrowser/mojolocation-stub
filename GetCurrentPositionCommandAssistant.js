// @@@LICENSE
//
//      Copyright (c) 2010-2012 Hewlett-Packard Development Company, L.P.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// LICENSE@@@

var GetCurrentPositionCommandAssistant = function(){
}

//->Start of API documentation comment block
/**
    * @file The Location service provides basic location services for single or multiple location fixes.
    * @tvwebosservice com.webos.location
*/
//->End of API documentation comment block

//->Start of API documentation comment block
/**
    * @tvwebosapi
    * @function 
    * @name getCurrentPosition
    * @description Requests a location fix. This method does not return until a valid fix is available or the responseTime is exceeded. If called without any parameters, it returns the medium accuracy result.
     <dl class="section service"><dt><h5>Service</h5></dt><dd>com.webos.location/getCurrentPosition</dd></dl>
    * @param {Number} accuracy One of {1 - High, 2 - Medium, 3 - Low}
    * @param {Number} maximumAge Set to 0 to request a new (non-cached) result.
    * @param {Number} responseTime One of { 1 - < 5s, 2 (default) - < 20s, 3 - > 20s }
    * @returns {Boolean} returnValue [required]: Always true
    * @returns {Number} errorCode [required]: 0 for success
    * @returns {Number} altitude: in meters. If unknown, the value is -1
    * @returns {Number} heading: azimuth in degrees, range [0.360.0] or -1 if unknown.
    * @returns {Number} horizAccuracy: Horizontal accuracy in meters. If unknown, the value is -1
    * @returns {Number} latitude: Location's latitude in degrees. Valid range: -90.0, 90.0.
    * @returns {Number} longitude: Location's longitude in degrees. Valid range: -180.0, 180.0.
    * @returns {Number} timestamp: Time when location was fixed. This is milliseconds since Epoch, aka Unix time.
    * @returns {Number} velocity: Velocity in meters per second. If unknown, the value is -1.
    * @returns {Number} vertAccuracy: Location's vertical accuracy in meters. If unknown, the value is -1.
*/
//->End of API documentation comment block

GetCurrentPositionCommandAssistant.prototype.run = function(future) {
	//console.log(">>>>>>> in GetCurrentPositionCommandAssistant");
	console.log ("%j", this.controller.args);

	var timestamp = new Date().getTime();
	//console.log("numeric datetime stamp is " + timestamp);

	future.result = {"altitude":0,"errorCode":0,"heading":0,"horizAccuracy":20,"latitude":37.390196,"longitude":-122.037845,"returnValue":true,"timestamp":timestamp,"velocity":0,"vertAccuracy":0};
}
