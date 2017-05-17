FROM node:6-onbuild

EXPOSE 3000
RUN npm run build
CMD node start.js
