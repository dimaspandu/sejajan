const DB_NAME = "sejajan-db";

function getSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) throw new Error("Sheet not found: " + sheetName);
  return sheet;
}

function getAllRows(sheetName) {
  const sheet = getSheet(sheetName);
  const range = sheet.getDataRange();
  const values = range.getValues();

  const headers = values.shift();
  return values.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}

function appendRow(sheetName, data) {
  const sheet = getSheet(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = headers.map(h => data[h] ?? "");
  sheet.appendRow(row);
}

function updateRowById(sheetName, id, data) {
  const sheet = getSheet(sheetName);
  const values = sheet.getDataRange().getValues();
  const headers = values[0];

  const idIndex = headers.indexOf("id");
  if (idIndex === -1) throw new Error("ID column not found");

  for (let i = 1; i < values.length; i++) {
    if (values[i][idIndex] === id) {
      headers.forEach((key, col) => {
        if (data[key] !== undefined) {
          sheet.getRange(i + 1, col + 1).setValue(data[key]);
        }
      });
      return;
    }
  }

  throw new Error("Row not found for id: " + id);
}

