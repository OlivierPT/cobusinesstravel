Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('authent', {
  name: 'authent',
  controller: 'AuthentController',
  action: 'action',
  where: 'client'
});