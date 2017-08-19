import buildRoutes from 'ember-engines/routes'

export default buildRoutes(function () {
  // Define your engine's route map here
  this.route('disco')
  this.route('not-found', {path: "*path"})
})
