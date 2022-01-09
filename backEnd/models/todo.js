const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const todoSchema = new mongoose.Schema(
	{
		_id: Number,
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			default: '',
		},
		isDone: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
todoSchema.plugin(AutoIncrement);

module.exports = mongoose.model('todo', todoSchema);
