import { Server } from 'miragejs'

// eslint-disable-next-line no-new
new Server({
  routes () {
    this.namespace = 'api'
    this.urlPrefix = 'http://localhost:3000'

    this.get('/movies', () => {
      return {
        movies: [
          { id: 1, name: 'Inception', year: 2010 },
          { id: 2, name: 'Interstellar', year: 2014 },
          { id: 3, name: 'Dunkirk', year: 2017 }
        ]
      }
    })
  }
})
