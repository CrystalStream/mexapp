import DevConfig from './enviroment.dev'
import ProdConfig from './enviroment.prod'

const ENV = process.env.NODE_ENV || 'development'

let enviroment = DevConfig

if (ENV === 'production') {
  enviroment = ProdConfig
}

export default enviroment
