function createSheet() {
  // テンプレートファイル
   var TemplateFile = DriveApp.getFileById('1Q4Z_m4HNcOwEJdTGNAyBBMSMGZgnSP3BToc2RARFSkQ');
  // 出力フォルダ
   var OutputFolder = DriveApp.getFolderById('1jDbL915r3yLn9gjGZE9-Bd7rZZGXH9z0');
  // 出力ファイル名
   var OutputFileName = TemplateFile.getName().replace('_template', '')+'_'+Utilities.formatDate(new Date(), 'JST', 'yyyyMM')
   
   TemplateFile.makeCopy(OutputFileName, OutputFolder);
}
