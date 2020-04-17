FROM node
ADD web ./web
WORKDIR ./web
#CMD ['npm' , 'install']
#CMD ["npm", "start"]
