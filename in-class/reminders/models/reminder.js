const mongoose = require('mongoose');

let ReminderSchema = new mongoose.Schema({
	title: String,
	body: String,
	createdAt: { type: Date, default: new Date() }
});

var Reminders = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminders;