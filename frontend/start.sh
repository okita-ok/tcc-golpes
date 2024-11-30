if [ $NODE_ENV = "production" ]; then
    echo "Front-end inicializado em ambiente de produção"
    npm run build
    npm start
else
    echo "Front-end inicializado em ambiente de desenvolvimento"
    npm run dev
fi