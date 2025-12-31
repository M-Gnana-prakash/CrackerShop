const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Test users to create
const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: 'admin',
        status: 'active'
    },
    {
        name: 'Prakash',
        email: 'prakash@gmail.com',
        password: '12345678',
        role: 'customer',
        status: 'active'
    },
    {
        name: 'Arjune',
        email: 'arjune@gmail.com',
        password: '87654321',
        role: 'customer',
        status: 'active'
    }
];

// Seed function
const seedUsers = async () => {
    try {
        // Clear existing users (optional - comment out if you want to keep existing users)
        await User.deleteMany({});
        console.log('Cleared existing users');

        // Create new users
        for (const userData of users) {
            const user = await User.create(userData);
            console.log(`Created user: ${user.email} (${user.role})`);
        }

        console.log('\n✅ Database seeded successfully!');
        console.log('\nTest Credentials:');
        console.log('Admin: admin@gmail.com / admin123');
        console.log('Customer 1: prakash@gmail.com / 12345678');
        console.log('Customer 2: arjune@gmail.com / 87654321');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

// Run the seed function
seedUsers();
