import 'regenerator-runtime/runtime';
import mongoose from 'mongoose';
console.log('test');
mongoose.Promise = global.Promise;
