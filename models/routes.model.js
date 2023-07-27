const mongoose = require('mongoose')

var routerSchema = new mongoose.Schema({
    ip: { type: String, required: ' This field is required', },
    origin: { type: String, required: ' This field is required', },
    metric: { type: String, required: ' This field is required', },
    localpref: { type: String, required: ' This field is required', },
    valid: { type: String, required: ' This field is required', },
    internal: { type: String, required: ' This field is required', },
    date: {
        type: Date,
        required: ' This field is required',
    },
});

mongoose.model("Routes", routerSchema);
