#Usar la imagen de Node.js como base
FROM node:18

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar Angular equisde
RUN npm install -g @angular/cli

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Correr Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]