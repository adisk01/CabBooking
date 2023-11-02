const mongoose = require("mongoose");
const Book = require("../models/Booking");

const getAllBookings = (req, res) => {
    Book.find()
        .then((todo) => {
            res.status(200).json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Bookings not found", error: err.message })
        );
}

// const postCreateBookinkgs = async (req, res) => {
//     // console.log(req.headers);
//     // req = req.headers;
//     try{
//         const obj = new Book ({
//             "mail" : req.headers.mail,
//             "start_time" : req.headers.start_time,
//             "end_time": req.headers.end_time,
//             "price": req.headers.price,
//             "source": req.headers.source,
//             "destination": req.headers.destination,
//         });
//         await obj.save();
//         res.status(201).json(obj);
//     } catch(error)
//     {
//         console.error('error',error);
//         res.status(500).json({error:'failed'});
//     }
//     // res.satus(201).json({});
    
// };

const postCreateBookinkgs = (req, res) => {
    Book.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};


// const putUpdateCabs = (req, res) => {
//     Cab.findByIdAndUpdate(req.params.id, req.body)
//         .then((data) => res.json({ message: "updated successfully", data }))
//         .catch((err) =>
//             res
//                 .status(400)
//                 .json({ message: "Failed to update Cab details", error: err.message })
//         );
// };


module.exports = { getAllBookings: getAllBookings, postCreateBookinkgs : postCreateBookinkgs} ;