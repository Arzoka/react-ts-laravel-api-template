# react-ts-laravel-api-template

## How to run the project:

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

## Dependencies:
- React
- TypeScript
- Vite
- Laravel
- Sanctum
- Docker

## Features:
- React client
- React-router for routing
- TypeScript for type checking
- @/ alias for src/ folder
- useApi hook for easy API requests
- globals/css for global styles

- Laravel API only
- Laravel Sanctum for authentication
- /login, /logout, /register for authentication
- /testobject for testing the API
- /authobject for testing the API with authentication

Happy coding!
