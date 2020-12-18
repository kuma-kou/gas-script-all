function createSheet() {
  // テンプレートファイル
   var TemplateFile = DriveApp.getFileById('ファイルID');
  // 出力フォルダ
   var OutputFolder = DriveApp.getFolderById('フォルダID');
  // 出力ファイル名
   var OutputFileName = TemplateFile.getName().replace('_template', '')+'_'+Utilities.formatDate(new Date(), 'JST', 'yyyyMM')
   
   TemplateFile.makeCopy(OutputFileName, OutputFolder);
}
