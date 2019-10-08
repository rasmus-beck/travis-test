const nbgv = require('nerdbank-gitversioning')
nbgv.getVersion().then(v => console.log(v.version)).catch(e => process.exit(1))