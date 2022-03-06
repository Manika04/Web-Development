//Node is a run-time environment for JS.

//NODE MODULES

    //1. Child Process - node module used to create sub-processes within in a script

        // const cp = require('child_process') //to import module
        // console.log('Trying to open Calculator')
        // cp.execSync('calc') //This will open calculator 
        
        // console.log('Trying to open vscode')
        // cp.execSync('code');
        
        // console.log('Trying to open browser(chrome)')
        // cp.execSync('start chrome')
        // cp.execSync('start chrome https://www.pepcoding.com/')
        
        // let output = cp.execSync('node test.js')
        // console.log("output -> " + output);

    //2. OS module - we can access os
        // const os = require('os');
        // console.log(os.arch()) //architecture
        // console.log(os.platform())
        // console.log(os.networkInterfaces())
        // console.log(os.cpus())

    //3. FS(File System) Module
        //*********FILES*********
            const fs = require('fs');

            // let content = fs.readFileSync('f1.txt')
            // console.log("f1 data = "+ content)

            // fs.writeFileSync('f2.txt', 'This is f2 text file')
            // fs.writeFileSync('f3.txt', 'This is f3 text file') //f3.txt does not exist therefore node will create a file and will write the data given

            // fs.appendFileSync('f1.txt' , '  Adding this line')

            // fs.unlinkSync('f2.txt') // file will be deleted

        //*********DIRECTORIES/FOLDERS*********
            // fs.mkdirSync('myFolder') //to create a new folder
            // fs.rmdirSync('myFolder') // to remove a folder
            let exist = fs.existsSync('myFolder1') //to check whether a folder exist or not
            // console.log(exist);

            let stats = fs.lstatSync('myFolder') // to check the status of folder
            // console.log(stats) 
            // console.log('isFile?', stats.isFile())//Is it a file or a folder? file:true
            // console.log('isDirectory? ', stats.isDirectory()) //folder:true

            let folderPath = 'C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\myFolder' //convert single \ to double \ to run this.
            let data = fs.readdirSync(folderPath);
            // console.log("Folder data " + data)

    //4. Path Module
        const path = require('path')

        //Copying a files
        //src file, destination file
        let srcPath ='C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\test.js'

        let destinationPath ='C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\myFolder'

        let copiedFilePath = path.basename(srcPath); //extracts base name i.e test.js
        console.log(copiedFilePath)

        let destPath = path.join(destinationPath, copiedFilePath) //C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\myFolder\\test.js yeh path create kara taaki copy kar sake
            // console.log(destinationPath)
        fs.copyFileSync(srcPath, destPath);
        // console.log("File copied");

        //This gets the extension name of the file
        let ext = path.extname('C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\f1.txt') 
        console.log(ext); //.txt

        let basename = path.basename('C:\\Users\\Manik\\OneDrive\\Desktop\\pepcoding\\web\\3. Node\\f1.txt')
        console.log(basename); 

        console.log(__dirname); //current directory/folder path
        console.log(__filename);


//NPM - Node Package Manager    