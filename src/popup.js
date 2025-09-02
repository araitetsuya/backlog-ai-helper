document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('clickBtn');
  const message = document.getElementById('message');
  
  button.addEventListener('click', function() {
    const messages = [
      'AI機能を準備中です！',
      'Backlogの作業を効率化します',
      '課題の作成をサポートします',
      'コメントの下書きを提案します',
      'タスクの優先順位を分析します'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
    message.style.color = '#42CE9F';
  });
});