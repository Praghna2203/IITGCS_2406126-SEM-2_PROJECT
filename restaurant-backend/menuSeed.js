// menuSeed.js
const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const items = [
  {
    name: 'Butter Chicken',
    category: 'Non-Veg',
    price: 280,
    ingredients: ['Chicken', 'Butter', 'Tomato Gravy'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Paneer Butter Masala',
    category: 'Veg',
    price: 250,
    ingredients: ['Paneer', 'Tomato', 'Cream'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Masala Dosa',
    category: 'South Indian',
    price: 120,
    ingredients: ['Rice', 'Potato', 'Spices'],
    tags: ['vegan'],
    available: true
  },
  {
    name: 'Biryani',
    category: 'Non-Veg',
    price: 220,
    ingredients: ['Rice', 'Chicken', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Veg Biryani',
    category: 'Veg',
    price: 180,
    ingredients: ['Rice', 'Vegetables', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Chole Bhature',
    category: 'North Indian',
    price: 100,
    ingredients: ['Chickpeas', 'Flour', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Tandoori Chicken',
    category: 'Non-Veg',
    price: 300,
    ingredients: ['Chicken', 'Yogurt', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Rajma Chawal',
    category: 'North Indian',
    price: 130,
    ingredients: ['Kidney Beans', 'Rice', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Idli Sambhar',
    category: 'South Indian',
    price: 80,
    ingredients: ['Rice', 'Lentils'],
    tags: ['vegan'],
    available: true
  },
  {
    name: 'Pav Bhaji',
    category: 'Snacks',
    price: 90,
    ingredients: ['Mixed Veggies', 'Bun'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Samosa',
    category: 'Snacks',
    price: 20,
    ingredients: ['Potato', 'Peas', 'Flour'],
    tags: ['vegan'],
    available: true
  },
  {
    name: 'Rogan Josh',
    category: 'Non-Veg',
    price: 320,
    ingredients: ['Mutton', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Dhokla',
    category: 'Gujarati',
    price: 60,
    ingredients: ['Besan', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Aloo Paratha',
    category: 'North Indian',
    price: 50,
    ingredients: ['Potato', 'Wheat', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Chicken 65',
    category: 'Non-Veg',
    price: 180,
    ingredients: ['Chicken', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Fish Curry',
    category: 'Non-Veg',
    price: 260,
    ingredients: ['Fish', 'Tamarind', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Hyderabadi Biryani',
    category: 'Non-Veg',
    price: 300,
    ingredients: ['Rice', 'Chicken', 'Spices'],
    tags: ['spicy'],
    available: true
  },
  {
    name: 'Kadai Paneer',
    category: 'Veg',
    price: 240,
    ingredients: ['Paneer', 'Capsicum', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Mysore Masala Dosa',
    category: 'South Indian',
    price: 140,
    ingredients: ['Rice', 'Potato', 'Chutney'],
    tags: ['vegan'],
    available: true
  },
  {
    name: 'Gulab Jamun',
    category: 'Dessert',
    price: 50,
    ingredients: ['Khoya', 'Sugar Syrup'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Rasgulla',
    category: 'Dessert',
    price: 50,
    ingredients: ['Chhena', 'Sugar Syrup'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Kheer',
    category: 'Dessert',
    price: 60,
    ingredients: ['Milk', 'Rice', 'Sugar'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Malai Kofta',
    category: 'Veg',
    price: 270,
    ingredients: ['Paneer', 'Cream', 'Spices'],
    tags: ['vegetarian'],
    available: true
  },
  {
    name: 'Pani Puri',
    category: 'Snacks',
    price: 30,
    ingredients: ['Flour', 'Spices', 'Water'],
    tags: ['vegan'],
    available: true
  },
  {
    name: 'Vada Pav',
    category: 'Snacks',
    price: 25,
    ingredients: ['Potato', 'Bun', 'Spices'],
    tags: ['vegan'],
    available: true
  }
];

MenuItem.insertMany(items)
  .then(() => {
    console.log("Menu items inserted!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);
    mongoose.disconnect();
  });
