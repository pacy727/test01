// ページが読み込まれたら実行する
document.addEventListener("DOMContentLoaded", function() {
  // ボタン要素を取得
  const myButton = document.getElementById("myButton");

  // ボタンがクリックされたときの処理を設定
  myButton.addEventListener("click", function() {
    alert("ボタンがクリックされました！");
  });
});
