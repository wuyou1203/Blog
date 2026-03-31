// 主题切换
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // 添加主题切换动画效果
  const button = document.getElementById('themeToggle');
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = '';
    button.textContent = isDark ? '☀️ Light' : '🌙 Theme';
  }, 150);
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
  userInfoBtn.onclick = () => {
    userInfoModal.style.display = "block";
    // 添加淡入动画
    setTimeout(() => {
      userInfoModal.style.opacity = "1";
      document.querySelector('#userInfoContent').style.transform = "translateY(0)";
    }, 10);
  };
  
  span.onclick = () => {
    // 添加淡出动画
    userInfoModal.style.opacity = "0";
    document.querySelector('#userInfoContent').style.transform = "translateY(-20px)";
    setTimeout(() => {
      userInfoModal.style.display = "none";
    }, 300);
  };
  
  window.onclick = event => {
    if (event.target == userInfoModal) {
      userInfoModal.style.opacity = "0";
      document.querySelector('#userInfoContent').style.transform = "translateY(-20px)";
      setTimeout(() => {
        userInfoModal.style.display = "none";
      }, 300);
    }
  };
  
  // 初始化弹窗样式
  userInfoModal.style.opacity = "0";
  document.querySelector('#userInfoContent').style.transition = "all 0.3s ease";
  document.querySelector('#userInfoContent').style.transform = "translateY(-20px)";
});

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('✅ Service Worker 注册成功：', reg))
    .catch(err => console.error('❌ 注册失败：', err));
}

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', function() {
  // 卡片渐入动画
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300 + index * 100);
  });
  
  // 特色文章渐入动画
  const featuredPost = document.querySelector('.featured-post');
  if (featuredPost) {
    featuredPost.style.opacity = '0';
    featuredPost.style.transform = 'translateX(-30px)';
    setTimeout(() => {
      featuredPost.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      featuredPost.style.opacity = '1';
      featuredPost.style.transform = 'translateX(0)';
    }, 200);
  }
});