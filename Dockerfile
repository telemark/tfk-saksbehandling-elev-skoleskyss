###########################################################
#
# Dockerfile for tfk-saksbehandling-elev-skoleskyss
#
###########################################################

# Setting the base to nodejs 4.6.0
FROM mhart/alpine-node:4.6.0

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TFK_SES_JWT_KEY Louie Louie, oh no, I got to go. Louie Louie, oh no, I got to go
ENV TFK_SES_CALLBACK_STATUS_MESSAGE Søknad behandlet
ENV TFK_SES_JOB_DIRECTORY_PATH test/data/jobs
ENV TFK_SES_DISTRIBUTION_DIRECTORY_PATH test/data/distribution
ENV TFK_SES_ARCHIVE_DIRECTORY_PATH test/data/archive
ENV TFK_SES_DONE_DIRECTORY_PATH test/data/done
ENV TFK_SES_ERROR_DIRECTORY_PATH test/data/errors
ENV TFK_SES_FARA_DIRECTORY_PATH test/data/fara
ENV TFK_SES_PDF_SERVICE_URL https://pdftemplater.service.t-fk.no/
ENV TFK_SES_GOOGLE_API_KEY your-google-api-key

# Startup
ENTRYPOINT node example.js