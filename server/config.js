// Imortando el DotEnv
const dotenv = require('dotenv');

// Invocación a la función config de
// la instancia dotenv
dotenv.config();

console.log(process.env.PORT);

// Creando objetos de configuración
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
};

const devConfig = {
  MONGO_URL: process.env.MONGO_URI,
};

const testConfig = {
  TESY_VALUE: 200,
};

const prodConfig = {
  MONGO_URL: process.env.MONGO_URI,
};

// Creando una función selectora
function getEnvCOnfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;

    case 'development':
      return devConfig;

    case 'test':
      return testConfig;

    default:
      return devConfig;
  }
}