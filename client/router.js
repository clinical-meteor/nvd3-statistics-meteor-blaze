
Router.configure({
  layoutTemplate: 'app_container'
});



Router.route('rootRoute', {
  path: '/',
  template: 'simpleLineGraphPage'
});

Router.route('bulletChartPage', {
  path: '/bullet',
  template: 'bulletChartPage'
});

Router.route('collapsibleTreeChartPage', {
  path: '/tree',
  template: 'collapsibleTreeChartPage'
});

Router.route('forceDirectGraphPage', {
  path: '/forcedirect',
  template: 'forceDirectGraphPage'
});

Router.route('pieChartPage', {
  path: '/pie',
  template: 'pieChartPage'
});

Router.route('sunburstChartPage', {
  path: '/sunburst',
  template: 'sunburstChartPage'
});

// Router.route('viewFinderLineGraphPage', {
//   path: '/viewfinder',
//   template: 'viewFinderLineGraphPage'
// });
