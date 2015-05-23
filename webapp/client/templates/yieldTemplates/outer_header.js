Template.outer_header.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      console.log(currentRoute.route.getName())
      return currentRoute &&
        template === currentRoute.route.getName() ? 'active' : '';
    }
  });
