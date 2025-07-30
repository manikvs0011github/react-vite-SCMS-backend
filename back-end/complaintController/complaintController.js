import Complaints from "../complaintModel/complaintModel.js"


export const addComplaint = async (req, res) => {
    try {
        const newComplaint = new Complaints(req.body);
        const savedData = await newComplaint.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
}

export const getAllComplaints = async (req, res) => {
    try {
        const complaintsData = await Complaints.find();

        if(!complaintsData || complaintsData.length === 0){
            res.status(404).json({error: "No Complaints Found"})
        }

        res.status(200).json(complaintsData);

    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}