const mongoose = require("mongoose");
const User= require("../models/User");

// view user
const getUser = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ "email":req.params.id });
    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

const postCreateUser =  async (req, res) => {
    try {
        const user = await User.findOne({ "email":req.body.email});

        if(user==null)
        {
            User.create(req.body)
        .then((data) => res.json({ message: "User added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add User details", error: err.message })
        );
        }
        else
        {
            if (req.body.service) {
                user.service = req.body.service;
              }
              await user.save();
        }
        console.log(user);
    
        res.status(200).json(user);
      } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
      }
    
};

module.exports ={ getUser:getUser, postCreateUser: postCreateUser};