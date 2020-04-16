FROM node
WORKDIR ./web
ADD web ./web
RUN npm install
CMD ["npm", "start"]
