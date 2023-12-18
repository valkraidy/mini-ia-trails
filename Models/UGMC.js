const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        Id:{
            type: String ,
            required: [true, "please enter your Id"]
        },
        Surname:{
            type:Number,
            required:[true,"please enter your surname"]
        },
        OtherNames:{
            type: string,
            required:  [true,"please enter your othernames"]
        },
        Gender:{
            type:String,
            required:  [true,"please enter your gender"]
        },
        phoneNumber:{
            type:Number,
            required:  [true,"please enter your mobile number"]
        },
        Address:{
            type:Number,
            required:  [true,"please enter your surname"]
        },
        emergencyNumber:{
            type:Number,
            required:  [true,"please enter your surname"]
        },
        emergencyName:{
            type:Number,
            required:  [true,"please enter your surname"]
        },
        relationship:{
            type:string,
            repuired: [true]
        }


    }
)

const Patient = mongoose.model ('patient', patientSchema)
module.exports = Patient