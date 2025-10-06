# Issued

## Want Custom Hackclub merch ?

Look No further <strong>✨<a href=https://hackclub.slack.com/archives/C09C9M0N2UC>#issued</a>✨</strong> is here :

YS : A Hackclub or Code themed designs using a custom editor for svg

WS : A currency based store to buy custom merch made by fellow Hackclub-bers

1. Make Designs 🎨
2. Submit and get approved by me 😃
3. Vote on other's 🗨️
4. Earn Bugs 🐛
5. Buy Swag 🤑

Printed or Embroidered on T-Shirt 👕, Hoodies, and Caps 🧢

## Running with Docker

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Using Docker Compose (Recommended)
```bash
# Clone the repository
git clone https://github.com/Acidicts/issued-ysws.git
cd issued-ysws

# Install dependencies locally (required for Docker build)
npm install

# Start the application with Docker Compose
docker compose up

# Or run in detached mode
docker compose up -d

# Stop the application
docker compose down
```

The application will be available at `http://localhost:3000`

### Using Docker directly
```bash
# Build the Docker image
docker build -t issued-ysws .

# Run the container
docker run -p 3000:3000 issued-ysws

# Run in detached mode
docker run -d -p 3000:3000 --name issued-ysws issued-ysws

# Stop the container
docker stop issued-ysws
docker rm issued-ysws
```

### Environment Variables
You can customize the port by setting the `PORT` environment variable:
```bash
docker run -p 8080:8080 -e PORT=8080 issued-ysws
```

## Running without Docker

### Prerequisites
- Node.js >= 18.0.0
- npm

### Installation
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Or start the production server
npm start
```

The application will be available at `http://localhost:3000`
