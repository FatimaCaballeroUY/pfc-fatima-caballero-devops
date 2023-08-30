FROM node:14

LABEL manintainer="fatima.caballero@estudiantes.utec.edu.uy"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]
