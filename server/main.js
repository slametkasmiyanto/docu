import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: 'superadmin@users.com',
      password: '123123',
      profile: {
        nama: 'Super Admin',
        usertype: 'admin'
      }
    });
  }
});
