const fs = require('fs');

// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 //return to stop any further activity
//                 return;
//             }
//             //if everything went well then resolve the prompt and send the successful data to the `then` method
//             resolve({
//                 okay: true,
//                 message: 'file created!'
//             });
//         });
//     });
// };
//copying stylesheet and outputting it to dist folder.
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style/style.css', '.dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            };
             resolve ({
                 okay: true,
                 message: 'Stylesheet created successfully!'
             });
        });
    });
};

module.exports = copyFile;