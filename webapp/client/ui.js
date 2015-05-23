Router.map(function(){
	/*this.route('landing', { 
		path: '/',
		controller: 'OuterLayoutController'
	});*/

	this.route('signup', {
		path: '/signup',	
  	    controller: 'OuterLayoutController'

	});

    this.route('about', {
		path: '/about',	
  	    controller: 'OuterLayoutController'

	});
    
    this.route('contact', {
		path: '/contact',	
  	    controller: 'OuterLayoutController'

	});

	this.route('logout', {
		path: '/logout',	
  	    controller: 'OuterLayoutController'

	});

	this.route('download', {
		path: '/',	
  	    controller: 'OuterLayoutController',
  	    yieldTemplates: {
			'outer_header': {to: 'header'},
			
  },

	});


	this.route('notFound', { path: '*'});	
});



OuterLayoutController = RouteController.extend({
  layoutTemplate: 'outerLayout',
  yieldTemplates: {
			'outer_header': {to: 'header'},
			'outer_footer': {to: 'footer'}
  },

  /*waitOn: function() {return Meteor.subscribe('waitingFor'); },
  data: function () {
    data = { waitingFor : AllwaysLate.find() };
    return data;
  },
  onBeforeAction: function(){},
  onAfterAction: function(){},
  action: function(){ this.render();}*/
});
