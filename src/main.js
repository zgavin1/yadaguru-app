require.config({
  baseUrl: 'dist',
  urlArgs: ''
});

require(
  [
    'app',
    'filters',
    'services/authService',
    'services/pdfService',
    'services/helpService',
    'services/modalService',
    'services/apiService',
    'services/utilsService',
    'services/googleCalendarService',
    'services/iCalService',
    'services/routeResolverProvider',
    'services/errorService',
    'directives/navLinks',
    'directives/onboarding',
    'directives/progressDots',
    'rootController'
  ],
  function () {
    angular.bootstrap(document, ['yadaguru']);
  }
);
