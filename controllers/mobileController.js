const NewMobile = require('../models/newMobileModel');

exports.insertNewMobile = async (req, res) => {

    try{

        const newMobile = new NewMobile(req.body);

        await newMobile.save();
        res.status(201).json({ message: 'New Mobile Uploaded', user: newMobile });
        
    }catch(error){
        res.status(500).json({ message: 'Error Uploading New Mobile', error });
    }

};

exports.fetchMobiles = async (req, res) => {

    try{
        const allMobiles = await NewMobile.find();
        res.status(200).json(allMobiles);
    }catch(error){
        res.status(400).json({
            message:`cant fetch mobiles ${error}}`
        });
    }

};

exports.updateMobile= async (req, res) => {
    try{
        const mobileId = req.params.id;

        const updated = await NewMobile.findByIdAndUpdate(
            mobileId,
            req.body,
            {new:true, runValidators:true}
        );

        if(!updated){
            return res.status(404).json({
                message:"Mobile Not Found"
            });
        }

        res.status(200).json({
            message:"Mobile Updated Successfully", mobile:updated
        });


    }catch(error){
        res.status(200).json({
            message:"Can't update the mobile"
        });
    }

};

exports.deleteMobile= async (req, res) => {
    try{
        const mobileId = req.params.id;

        const updated = await NewMobile.findByIdAndDelete(
            mobileId,
            req.body,
            {new:true, runValidators:true}
        );

        if(!updated){
            return res.status(404).json({
                message:"Mobile Not Found"
            });
        }

        res.status(200).json({
            message:"Mobile Deleted Successfully", mobile:updated
        });


    }catch(error){
        res.status(200).json({
            message:`Can't delete the mobile ${error}`
        });
    }

};