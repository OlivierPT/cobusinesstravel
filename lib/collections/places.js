Places = new Mongo.Collection('places');

Places.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  postalCode: {
    type: String,
    label: "Postal code"
  },
  city: {
    type: String,
    label: "City",
    min: 0
  },
  company: {
    type: String,
    label: "Company",
    optional: true
  },
  siteName: {
    type: String,
    label: "Site name",
    optional: true
  }
}));
