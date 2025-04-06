## Manual installation

    - Install nodejs locally (link)
    - Clone the repo
    - install dependencies (npm install)
    - Start the DB locally
        - docker run -d -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
        OR
        - Goto neon.tech and get yourself a new DB
    - Change the .env file and update your DB credentials
    - npx prisma migrate
    - npx prisma generate
    - npm run build
    - npm run start

## Docker installation

## Docker Compose installation steps
