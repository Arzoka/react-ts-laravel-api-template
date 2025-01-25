# react-ts-laravel-api-template

How to run the project:

1. Clone the repository
```bash
git clone https://github.com/Arzoka/react-ts-laravel-api-template.git
cd react-ts-laravel-api-template
```

2. Copy the client and server .env.example file to .env
```bash
cd client
cp .env.example .env
```

```bash
cd ..
cd server
cp .env.example .env
cd ..
```

3. Build the project
```bash
docker-compose build
```

4. Run the project
```bash
docker-compose up -d
```

5. Run the migrations
```bash
docker-compose exec server php artisan migrate
```

Happy coding!
