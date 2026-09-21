import XLSX from 'xlsx';
//why we used defaultt - If anyone imports this file, give them this class by default.
export default class ExcelUtil {

    static readExcel(filePath,sheetName){
        const workbook = XLSX.readFile(filePath);
        //Open the Excel file.
        const worksheet = workbook.Sheets[sheetName];
        //Go to the sheet named "sheetName" in the Excel file.
        return XLSX.utils.sheet_to_json(worksheet)
        //Convert the Excel data into JavaScript objects.

       // data[0]- Give me the first row

       //async ({ page }) => Think of page as a browser tab.

    }


};