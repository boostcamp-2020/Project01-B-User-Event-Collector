import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    pw: {type: String, required: true, trim: true},
});
userSchema.index({id: 1});

export default mongoose.model('User', userSchema);