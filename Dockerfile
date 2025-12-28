FROM nginx:latest

# Copiar nuestra config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar la web estática
COPY . /usr/share/nginx/html