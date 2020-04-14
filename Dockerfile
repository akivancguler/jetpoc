# Filename: Dockerfile
# Create an image from a "builder" Docker image
#FROM akivancg/ojetbuilder

FROM node
RUN npm install -g @oracle/ojet-cli

#bunu from akivancg/ojetbuilder gibi yapmak daha best practise

# Copy all sources inside the new image
COPY . .

# Build the appliaction. As a result this will produce web folder.
#RUN ojet build


# Create another Docker image which runs Jet application
# It contains Nginx on top of Alpine and our Jet appliction (web folder)
# This image is the result of the build and it is going to be stored in Docker Hub
FROM nginx:1.10.2-alpine
COPY --from=0 web /usr/share/nginx/html
EXPOSE 80



