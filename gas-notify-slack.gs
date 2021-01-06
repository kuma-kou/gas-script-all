function TimeSheetNotifySlack() {
 let postUrl  = "https://hooks.slack.com/services/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"

 let userName = "月末提出物フォローbot"   // Slackに通知する時の名前になります
 let icon     = ":innocent:"    // 表示されるアイコン
 let message  = "今日は月末最終日です！"
 let message1 = "勤務表等の提出をお忘れなく！！" // 送信するメッセージ

 
 // ここで以下をオプションに設定できます
 // username(通知者の名前)
 // icon_emoji(アイコン)
 // text (送信するメッセージ)
 let jsonData = {
   "username" : userName,
   "icon_emoji" : icon,
   "text" : "<!channel>" + "\n " + message + "\n" +message1
 }  

 // 上の送信内容を設定  
 let payload = JSON.stringify(jsonData)

 // オプションを設定
 let options =
 {
   "method" : "post",
   "contentType" : "application/json",
   "payload" : payload
 };

 // Slackに通知する
 UrlFetchApp.fetch(postUrl, options);  
}

function trigger() {
  date = new Date();
  date.setDate(date.getDate()+1);
  if (date.getDate() === 1){//最終日の判定
    TimeSheetNotifySlack();
  };
}
