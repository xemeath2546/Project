function doGet(e) {
  return HtmlService.createTemplateFromFile('test').evaluate();
}

function searchData(searchDate) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1'); // เปลี่ยน 'Sheet1' เป็นชื่อชีตของคุณ
  const data = sheet.getDataRange().getValues();

  const results = [];

  for (let i = 1; i < data.length; i++) {
    try {
      // แปลงวันที่ใน Google Sheets เป็น Date object
      const dateObject = Utilities.parseDate(data[i][3], Session.getScriptTimeZone(), 'MM/dd/yyyy');

      // แปลง Date object เป็นรูปแบบ YYYY-MM-DD
      const formattedDate = Utilities.formatDate(dateObject, Session.getScriptTimeZone(), 'yyyy-MM-dd');

      if (formattedDate === searchDate) {
        results.push([data[i][0], data[i][1], data[i][2], data[i][3]]); // ดึงข้อมูลทั้งหมด
      }
    } catch (e) {
      // หากเกิดข้อผิดพลาดในการแปลงวันที่ ให้ข้ามแถวนั้น
      Logger.log('Error parsing date: ' + data[i][3] + ' - ' + e);
    }
  }

  // หากไม่พบข้อมูล ให้ส่งข้อความ "ไม่พบข้อมูล" กลับไปยังหน้าเว็บ
  if (results.length === 0) {
    return 'ไม่พบข้อมูล';
  }

  return results;
}