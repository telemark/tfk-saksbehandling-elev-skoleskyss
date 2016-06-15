'use strict'

module.exports = {
  JWT_KEY: process.env.TFK_SES_JWT_KEY || 'NeverShareYourSecret',
  CALLBACK_STATUS_MESSAGE: process.env.TFK_SES_CALLBACK_STATUS_MESSAGE || 'Varselbrev produsert',
  JOB_DIRECTORY_PATH: process.env.TFK_SES_JOB_DIRECTORY_PATH || 'test/data/jobs',
  DISTRIBUTION_DIRECTORY_PATH: process.env.TFK_SES_DISTRIBUTION_DIRECTORY_PATH || 'test/data/distribution',
  ARCHIVE_DIRECTORY_PATH: process.env.TFK_SES_ARCHIVE_DIRECTORY_PATH || 'test/data/archive',
  DONE_DIRECTORY_PATH: process.env.TFK_SES_DONE_DIRECTORY_PATH || 'test/data/done',
  ERROR_DIRECTORY_PATH: process.env.TFK_SES_ERROR_DIRECTORY_PATH || 'test/data/errors',
  TEMPLATER_SERVICE_URL: process.env.TFK_SES_TEMPLATER_SERVICE_URL || 'https://templater.service.t-fk.no',
  PDF_SERVICE_URL: process.env.TFK_SES_PDF_SERVICE_URL || 'https://pdfconvert.service.t-fk.no'
}
