FROM node:12

# Create app directory
WORKDIR /app
COPY ./ ./
RUN npm install
ENV PORT=8080
EXPOSE 8080

CMD ["./run.sh"]