FROM node:lts-alpine AS runtime
WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto de los archivos
COPY . .

# Exponemos el puerto de Astro (3000 o 4321 por defecto)
EXPOSE 4321

# Comando por defecto para desarrollo
CMD ["npm", "run", "docker:dev"]