# CRUD
     => server.js
     => Routes - API's 
     => Services - Core functions or Logics
     => Models - Db query
     => Schema - Schema design

1.Create Project Name folder and open in VS code
2.npm init -> it will generate package.json
3.server.Js or index.js it'll access route folder
  app.use will access router files
    app.use("/api", Routers);

4.rout folder takes all api's routes.
  ex: student.js for all students realted api's
      => api/student/create (POST)
      => api/student/get (GET)
      => api/student/update (PUT)
      => api/student/delete (DELETE)

5.router calls services files.It will give core (business logics).

6.services calls models for db access

Layers Architecture : https://ctrly.blog/nodejs-layered-architecture/

# Send Email
- npm install nodemailer
- required:
  => Gmail Id and Password
  => Google -> Settings -> Security -> Enable Less secure app access# Upload Files
  
# Files Upload & Middleware
- npm install multer
- multer is a middlware.
  search middlwares in terminal : npm search middleware

  Postman : https://linuxize.com/post/how-to-install-postman-on-ubuntu-20-04/
