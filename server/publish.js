/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
 Meteor.publish('places', function () {
     return Places.find();
 });
