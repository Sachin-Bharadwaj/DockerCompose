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

    - Install Docker
    - Create a network: docker network create my_network
    - Start Postgress
        - docker run --network my_network --name postgress_user_app -d -e POSTGRES_PASSWORD=password -p 5432:5432 postgres
    - Build the image
        - docker build --network=host -t image_name .
    - Start the image
        - docker run --network my_network -e DATABASE_URL=postgresql://postgres:password@postgress_user_app:5432/postgres -p 3000:3000 image_name

## Docker Compose installation steps

    - Install Docker, docker-compose
    - Run `docker-compose up`
