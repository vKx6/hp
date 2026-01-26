const services = [
  {
    name: 'にゃんこGPT',
    description: 'にゃんことチャットできるLINE公式アカウント。',
    url: 'https://line.me/R/ti/p/@190ghxig',
    status: 'live',
    link_text: 'LINE で友だち追加 →',
    icon: 'main_icon.png'
  },
  {
    name: 'かっこいいキーボ',
    description: 'キーボード専門の情報検索サイト。',
    url: 'https://cool-keyboards.com/',
    status: 'live',
    link_text: 'Visit →',
    icon: 'favicon.png'
  },
  {
    name: 'New Service',
    description: '準備中',
    url: '',
    status: 'coming-soon',
    link_text: '',
    icon: ''
  },
  {
    name: 'New Service',
    description: '準備中',
    url: '',
    status: 'coming-soon',
    link_text: '',
    icon: ''
  }
];

function renderServices() {
  const grid = document.querySelector('.services-grid');
  grid.innerHTML = services.map(s => {
    const iconHtml = s.icon ? `<img src="${s.icon}" alt="${s.name}" class="service-icon">` : '';
    if (s.status === 'live') {
      return `
        <a href="${s.url}" class="service-card" target="_blank" rel="noopener">
          <div class="service-status live">Live</div>
          ${iconHtml}
          <h3>${s.name}</h3>
          <p>${s.description}</p>
          <span class="service-link">${s.link_text}</span>
        </a>
      `;
    } else {
      return `
        <div class="service-card coming-soon">
          <div class="service-status soon">Coming Soon</div>
          ${iconHtml}
          <h3>${s.name}</h3>
          <p>${s.description}</p>
        </div>
      `;
    }
  }).join('');
}

renderServices();
