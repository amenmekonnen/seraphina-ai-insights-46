
# Seraphina Waitlist Server

This is a simple Express server that handles email submissions for the Seraphina waitlist. It stores emails in a CSV file and sends confirmation emails to users.

## Features

- Store email addresses in a CSV file
- Send confirmation emails to users
- Input validation
- CORS enabled for frontend integration

## Deployment Instructions

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add your email credentials:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     ```
   - Note: For Gmail, you'll need to use an app password rather than your regular password

3. Run the server:
   ```
   npm run dev
   ```

### Production Deployment

#### Option 1: Heroku

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create seraphina-waitlist-server
   ```
4. Set environment variables:
   ```
   heroku config:set EMAIL_USER=your-email@gmail.com EMAIL_PASSWORD=your-app-password
   ```
5. Deploy:
   ```
   git subtree push --prefix src/server heroku main
   ```

#### Option 2: Railway.app

1. Create a Railway account
2. Connect your GitHub repository
3. Create a new project from your repository
4. Set environment variables in the Railway dashboard
5. Deploy

#### Option 3: Render.com

1. Create a Render account
2. Connect your GitHub repository
3. Create a new Web Service
4. Set environment variables
5. Deploy

## Important Notes

- Make sure to update the API endpoint URL in the frontend (`Waitlist.tsx`) to match your deployed server URL
- The CSV file will be stored on the server's filesystem. For production, consider using a database instead for better scalability
- The default port is 3001, but it will use the PORT environment variable if available
