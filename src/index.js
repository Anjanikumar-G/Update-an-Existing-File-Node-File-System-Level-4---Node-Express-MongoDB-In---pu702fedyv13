const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try {
    let currentContent = await fs.readFile(fileName, 'utf-8');
    currentContent += fileContent;
    await fs.writeFile(fileName, currentContent);
    return currentContent;
  } catch (error) {
    console.error('Error updating the file:', error);
    throw error;
  }
  
};

module.exports = updateFile;
