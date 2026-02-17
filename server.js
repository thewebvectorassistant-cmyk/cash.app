const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With']
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Add headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token');
  res.header('X-CSRF-Token', 'mock_csrf_token_12345');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Redirect root to /cash (marketing page)
app.get('/', (req, res) => {
  res.redirect('/cash');
});

// Serve marketing site static files from /cash
app.use('/cash', express.static(path.join(__dirname, 'cash.app')));

// Serve login static files from /login for proper relative API calls
app.use('/login', express.static(path.join(__dirname, 'login', 'cash.app')));

// Mock API endpoints for login functionality
const mockApiHandler = (endpoint) => (req, res) => {
  console.log(`Mock API: ${endpoint} called with:`, JSON.stringify(req.body, null, 2));
  console.log(`Headers:`, JSON.stringify(req.headers, null, 2));

  // Default successful response
  res.json({
    success: true,
    status: 'success',
    data: {
      message: `Mock response for ${endpoint}`,
      timestamp: new Date().toISOString()
    }
  });
};

app.post('/2.0/cash/get-login-details', mockApiHandler('get-login-details'));
app.post('/2.0/cash/authenticate-web-login-token', mockApiHandler('authenticate-web-login-token'));
app.post('/2.0/cash/create-account-holder-internal', mockApiHandler('create-account-holder-internal'));
app.post('/2.0/cash/add-account-to-account-holder-internal', mockApiHandler('add-account-to-account-holder-internal'));
app.post('/2.0/cash/verify-alias', mockApiHandler('verify-alias'));
app.post('/2.0/cash/send-verification-code', mockApiHandler('send-verification-code'));
app.post('/2.0/cash/verify-code', mockApiHandler('verify-code'));
app.post('/2.0/cash/initiate-session', mockApiHandler('initiate-session'));
app.get('/2.0/cash/get-feature-flags', mockApiHandler('get-feature-flags'));
app.post('/2.0/cash/ping', mockApiHandler('ping'));
app.post('/2.0/cash/get-web-login-config-janus', mockApiHandler('get-web-login-config-janus'));

// Specific implementations for key endpoints
app.post('/2.0/cash/authenticate-web-login-token', (req, res) => {
  console.log('Mock API: authenticate-web-login-token called with:', req.body);

  const { alias } = req.body;

  // Simulate validation: require alias
  if (!alias) {
    return res.status(400).json({
      success: false,
      error: 'Missing alias',
      message: 'Please provide an email or phone number.',
      status: 'error'
    });
  }

  res.json({
    success: true,
    accessToken: 'mock_access_token_' + Date.now(),
    refreshToken: 'mock_refresh_token_' + Date.now(),
    user: {
      id: 'mock_user_id_' + Date.now(),
      cashtag: '$demo',
      displayName: 'Demo User',
      email: alias
    },
    sessionId: 'mock_session_' + Date.now(),
    status: 'success'
  });
});

app.post('/2.0/cash/create-account-holder-internal', (req, res) => {
  console.log('Mock API: create-account-holder-internal called with:', req.body);

  const { email, displayName } = req.body;

  // Simulate validation: require email and displayName
  if (!email || !displayName) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields',
      message: 'Please provide email and display name.',
      status: 'error'
    });
  }

  res.json({
    success: true,
    accountHolderId: 'mock_account_holder_' + Date.now(),
    status: 'success',
    user: {
      id: 'mock_user_id_' + Date.now(),
      cashtag: '$' + displayName.toLowerCase().replace(/\s+/g, ''),
      displayName: displayName,
      email: email
    }
  });
});

// Catch-all for other API calls - return success to prevent errors
app.all('/2.0/cash/*', (req, res) => {
  console.log(`Mock API: ${req.method} ${req.path} called with:`, JSON.stringify(req.body, null, 2));
  console.log(`Headers:`, JSON.stringify(req.headers, null, 2));

  res.json({
    success: true,
    status: 'success',
    message: `Mock response for ${req.path}`,
    timestamp: new Date().toISOString()
  });
});

// Catch-all for login redirects
app.use((req, res, next) => {
  if (req.url.includes('/login') && !req.url.startsWith('/login/')) {
    res.redirect('/login');
  } else {
    next();
  }
});

// Serve the main index.html at /cash
app.get('/cash', (req, res) => {
  res.sendFile(path.join(__dirname, 'cash.app', 'index.html'));
});

// Serve login page at /login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login', 'cash.app', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`Cash App clone server running on http://localhost:${PORT}`);
  console.log(`Marketing page (default): http://localhost:${PORT}/`);
  console.log(`Login page: http://localhost:${PORT}/login`);
});
