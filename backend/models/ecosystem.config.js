module.exports = {
  apps: [{
    name: 'coiffinthestreet',
    script: 'bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'ktayari',
      host: '94.23.39.223',
      ref: 'origin/master',
      repo: 'git@github.com:WildCodeSchool/mrs_0219_coiff-in-the-street.git',
      path: '/home/ktayari/www/cits/current',
      'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env production'
    }
  }
};