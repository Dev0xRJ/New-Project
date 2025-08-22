# Usa a imagem oficial do Node.js
FROM node:22-alpine

# Define o diret?rio de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de depend?ncias
COPY package*.json ./

# Instala depend?ncias do projeto
RUN npm install

# Copia o restante do c?digo
COPY . .

# Exp?e a porta usada pelo NestJS
EXPOSE 3000

# Comando para rodar em modo desenvolvimento
CMD ["npm", "run", "start:dev"]
