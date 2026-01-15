import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import http from 'http';

// Load environment variables
dotenv.config();

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Giftsbattle API v1.0',
    endpoints: {
      auth: '/api/auth',
      cases: '/api/cases',
      upgrades: '/api/upgrades',
      crafts: '/api/crafts',
      user: '/api/user'
    }
  });
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  // Case opening event
  socket.on('case:open', (data) => {
    console.log('Case opened:', data);
    // Broadcast to all clients
    io.emit('case:opened', data);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📡 WebSocket server is ready`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
