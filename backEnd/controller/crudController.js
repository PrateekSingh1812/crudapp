const Crud = require("../models/crudModel");
const { all } = require("../routes/crudRoutes");

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;

    const responce = await Crud.create({
      name,
      description,
    });

    res.status(200).json({
      success: true,
      data: responce,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const allEntries = await Crud.find({});
    if(allEntries.length == 0){
      res.status(200).json({
        success: true,
        message: "No data found",
      });
    }
    res.status(200).json({
      success: true,
      data: allEntries,
      message: "All entry fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const entry = await Crud.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: entry,
      message: "Entry fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    const entry = await Crud.findByIdAndUpdate(
      { _id: id },
      { name, description, updatedAt: Date.now() }
    );

        res.status(200).json({
            success:true,
            data: entry,
            message: "Entry updated successfully",
        })



    
  } catch (error) {
    console.error(error);

    res.status(500).json(
        {
            success:false,
            error:error.message,
            message:'server error'
        }
    )

  }
}


exports.deleteOne = async(req,res) =>{
    try {
        
        const {id} = req.params;
        await Crud.findByIdAndDelete({_id: id})

        res.status(200).json({
            
            success:true,
            message:"Entry deleted successfully"
        
    })

    } catch (error) {
        console.error(error);

        res.status(500).json(
            {
                success:false,
                error:error.message,
                message:'server error'
            }
        )
    }
}
