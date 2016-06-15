'use strict'

module.exports = function tfkSaksbehandlingElevSkoleskyss (item, callback) {
  const miss = require('mississippi')
  const getNextJob = require('./lib/get-next-job')
  const setupItem = require('./lib/setup-item')
  const doSaksbehandling = require('./lib/do-saksbehandling')
  const setupTemplates = require('./lib/setup-templates')
  const generateDocuments = require('./lib/generate-documents')
  const setupArchive = require('./lib/setup-archive')
  const starter = fromString(JSON.stringify(item))

  function fromString (string) {
    return miss.from(function (size, next) {
      // if there's no more content
      // left in the string, close the stream.
      if (string.length <= 0) return next(null, null)

      // Pull in a new chunk of text,
      // removing it from the string.
      var chunk = string.slice(0, size)
      string = string.slice(size)

      // Emit "chunk" from the stream.
      next(null, chunk)
    })
  }

  function finished (error) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, {message: 'Success'})
    }
  }

  miss.pipe(
    starter,
    getNextJob,
    setupItem,
    doSaksbehandling,
    setupTemplates,
    generateDocuments,
    setupArchive,
    finished
  )
}
