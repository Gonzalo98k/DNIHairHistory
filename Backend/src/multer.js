
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads")
    },
    filename: (req, file, cb)=>{
        cb(null, file.filename)
    }
})

const upload = multer({dest: "uploads"})

export const uploads = upload.array('images', 5);
