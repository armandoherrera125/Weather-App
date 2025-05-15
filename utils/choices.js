const colors = require('colors/safe');
const choices = [
    {
      name: `${colors.green('1.')} Buscar ciudad`,
      value: 'search',
    },
    {
      name: `${colors.green('2.')} Historial`,
      value: 'historial',
    },
    {
        name: `${colors.green('0.')} Salir`,
        value: 'exit'
    }

  ]

module.exports = choices;