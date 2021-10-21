const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate: (value) => {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate: (value) => {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		},
	},
	password: {
		type: String,
		trim: true,
		minlength: 7,
		validate: (value) => {
			if (value.toLowerCase().includes('password')) {
				console.log('val', value, value.includes('password'));
				throw new Error('Password should not contain password');
			}
		},
	},
	tokens: [
		{
			token: { type: String, required: true },
		},
	],
});

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });
	if (!user) throw new Error('Unable to Login');
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) throw new Error('Unable to Login');
	return user;
};

userSchema.methods.toJSON = function () {
	const user = this;
	const publicUser = user.toObject();
	delete publicUser.password;
	delete publicUser.tokens;
	return publicUser;
};

userSchema.methods.getPublicProfile = function () {
	const user = this;
	const publicUser = user.toObject();
	delete publicUser.password;
	delete publicUser.tokens;
	return publicUser;
};

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse');
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
};

userSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
