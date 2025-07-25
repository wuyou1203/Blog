// 主题切换
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 显示用户信息弹窗
document.addEventListener('DOMContentLoaded', function () {
  var userInfoBtn = document.getElementById('me');
  var userInfoModal = document.createElement('div');
  userInfoModal.id = "userInfoModal";
  userInfoModal.innerHTML = `
    <div id="userInfoContent">
      <span class="close">&times;</span>
      <h2>优酱的小屋</h2>
      <p class="text-lg text-slate-700 dark:text-gray-300 space-y-2">
        📮 Email: <a href="mailto:765029758@qq.com" class="text-cyan-600 dark:text-cyan-400 underline">765029758@qq.com</a><br />
        🐱 GitHub: <a href="https://github.com/wuyou1203" class="text-cyan-600 dark:text-cyan-400 underline" target="_blank">wuyou1203</a>
      </p>
    </div>`;
  document.body.appendChild(userInfoModal);

  var span = userInfoModal.querySelector('.close');
  userInfoBtn.onclick = () => userInfoModal.style.display = "block";
  span.onclick = () => userInfoModal.style.display = "none";
  window.onclick = event => {
    if (event.target == userInfoModal) {
      userInfoModal.style.display = "none";
    }
  };
});

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('✅ Service Worker 注册成功：', reg))
    .catch(err => console.error('❌ 注册失败：', err));
}
