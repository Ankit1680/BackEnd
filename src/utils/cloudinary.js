import { v2 } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
});


const uploadOnCloudinary = async (localfilepath)=> {
            try {
                if(!localfilepath) return null
                // upload file on cloudinary
                const response =  await cloudinary.v2.uploader.upload(localfilepath, {
                    resource_type: "auto"
                })

                //file uploaded successfully
                console.log("file is uploaded on cloudinary", response.url)

                return response
            } catch (error) {
                fs.unlinkSync(localfilepath)    //remove the locally saved files as file is not uploaded
                return null
            }
}

export {uploadOnCloudinary}


// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
