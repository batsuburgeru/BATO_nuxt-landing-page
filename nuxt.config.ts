export default {
    // ...
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/mdbootstrap/css/mdb.min.css',
          integrity:
            'sha384-WnDn+IItE6FXkFO6U1X9R9pd6wtP/Z6U09S7wP5g5uV7VLBbKViH4UEpFHT9GR1V',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.6.0.min.js',
          integrity:
            'sha384-2QJwAAdmE3ZdL/ww4yLudS9SMVDRg6LksrHGiUnwKgXB83gmFVsqzGvABYcPfO2j',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/popper.js@2.9.3/dist/umd/popper.min.js',
          integrity:
            'sha384-GfRCRJ0/WM+oOEHvEhK3qBXJ9X8c88a1lGfrJwumxxKjFJ77cBzsCtiv52KtZJGt',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/mdbootstrap/js/mdb.min.js',
          integrity:
            'sha384-HwvJhWl5FiuxZSw4DdRzvJjLQ4XgJ84NjV7Rb0+dOW+c2gI8uf/98toV7Mq6tg0u',
          crossorigin: 'anonymous',
        },
      ],
    },
    // ...
  };