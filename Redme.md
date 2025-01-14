** Prepar to make a backend** 

* Data Dyagram link * 
https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

stap by stap gide ..........>

1. make a file 
2. npm init 
3.install prettier from npm docs 
4. create a .prittierrc file and make settings 
5.make a .prittierignore file and make sure which file i dont want to change by prettire 


.............basic setup done ..............

lets set up advance ......
1. make some folder
2. i want to manage all folder from src 
 folder should like :
	public/temp (where i will store temporary file like image ,video and other)
            src/ (every file and folder will stay here 
                controller   (here i will write logic,for all controllers )

                db /app.js   (only use for data base connection )

                middlewere   (that will work on mid time and meddlewere    can set any where like cloudenary)) 

                models       (every schema will declere on this folder)

                routes       (route will be a function here i will control all route from here)

                utils        (reuseable method (function) will diclere..like: apiErrorHendeler,apiResponse,asycHendeler(to avoid to write try catch block all time) )

                app.js     (app.js file where i should use all middlewere and controll all routes on it after uses)

                index.js     (that is the main file of app it will run db "dev" command    note: that file work like a wraper for all files )
