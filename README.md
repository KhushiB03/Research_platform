# Research_platform
// Request → Validate → Controller → Service → DB
//Multer:

Intercepts the request

Parses the multipart/form-data

Extracts the file

Saves it to disk (or memory)

Attaches it to:

req.file

Now you get:

req.file = {
  fieldname: 'file',
  originalname: 'resume.pdf',
  encoding: '7bit',
  mimetype: 'application/pdf',
  destination: 'uploads/',
  filename: '1730923849234-123.pdf',
  path: 'uploads/1730923849234-123.pdf',
  size: 48293
}