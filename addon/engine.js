import Engine from 'ember-engines/engine'
import loadInitializers from 'ember-load-initializers'
import Resolver from 'ember-resolver';
import config from './config/environment'

const { modulePrefix } = config

const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: {
    services: [
      'fastboot',
      'headData',
      'abTest',
      'features',
    ],
  },
})

loadInitializers(Eng, modulePrefix)

export default Eng
