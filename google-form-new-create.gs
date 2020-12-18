function createForm() {
  var formTitle = '勤怠報告フォーム';
  var form = FormApp.create(formTitle);
  var folderId = "1jDbL915r3yLn9gjGZE9-Bd7rZZGXH9z0";
  
  // 作成したフォームをrootフォルダから対象フォルダへ移動
  var file = DriveApp.getFileById(form.getId());
  var folder = DriveApp.getFolderById(folderId);
  file.moveTo(folder);
  
  // フォームの概要
  form.setDescription('出勤時と退勤時にこちらのフォームから報告をお願い致します');

  // 社員IDのプルダウンリスト
  var form_open = FormApp.openById(form.getId());
  var item = form_open.addListItem();  
  item.setTitle('■社員ID選択')
  .setChoices([
  item.createChoice('NUDP-001'),
  item.createChoice('NUDP-002'),
  item.createChoice('NUDP-003'),
  item.createChoice('NUDP-004'),
  item.createChoice('NUDP-005'),
  item.createChoice('NUDP-006'),
  item.createChoice('NUDP-007'),
  item.createChoice('NUDP-008'),
  item.createChoice('NUDP-009'),
  item.createChoice('NUDP-010'),
  item.createChoice('NUDP-011'),
  item.createChoice('NUDP-012'),
  item.createChoice('NUDP-013'),
  item.createChoice('NUDP-014'),
  item.createChoice('NUDP-015'),
  item.createChoice('NUDP-016'),
  item.createChoice('NUDP-017'),
  item.createChoice('NUDP-018'),
  item.createChoice('NUDP-019'),
  item.createChoice('NUDP-020'),
  item.createChoice('NUDP-021'),
  item.createChoice('NUDP-022'),
  item.createChoice('NUDP-023')
  ]);
  item.setRequired(true);
  
  // 社員名テキスト入力
  form.addTextItem()
  .setTitle('■名前（スペース無しで漢字フルネーム）')
  .setRequired(true);

  // 打刻用ラジオボタン追加
  form.addMultipleChoiceItem()
  .setTitle('■打刻')
  .setChoiceValues(['出勤', '退勤'])
  .setRequired(true);
  
  // 連絡事項用のテキスト入力
  form.addTextItem()
  .setTitle('■その他連絡事項など')
}
