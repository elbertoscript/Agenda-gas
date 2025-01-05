function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
   return HtmlService.createHtmlOutputFromFile(nombre).getContent();
        
}

function obtenerContactos()
{
   let hoja =  SpreadsheetApp.openById('1OhREXivKSnYRfW7L1I-Le2zgH3vHGkIct6J61OuUHFo').getActiveSheet();
   let datos = hoja.getDataRange().getValues();
   return datos;
}