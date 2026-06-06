import"./style-Zwzf4h3l.js";var e=localStorage.getItem(`siteLang`)||`ru`;function t(){let t=document.getElementById(`app`);t.innerHTML=`
        <div class="container">
            <header>
                <div class="header-inner">
                    <div class="logo">
                        <a href="index.html">Uncle Griff</a>
                    </div>
                    <div class="top-right">
                        <div class="contacts-icons">
                            <a href="tel:+79136175303">📞 Тел</a>
                            <a href="mailto:uncle.griff.studio@mail.ru">✉️ Email</a>
                            <a href="https://t.me/dBobikov" target="_blank">💬 TG</a>
                            <a href="https://vk.com/ug_studio" target="_blank">📱 VK</a>
                        </div>
                        <div class="lang-switch">
                            <button class="lang-btn ${e===`ru`?`active`:``}" data-lang="ru">RU</button>
                            <button class="lang-btn ${e===`en`?`active`:``}" data-lang="en">EN</button>
                        </div>
                    </div>
                    <div class="burger" id="burger">
                        <span></span><span></span><span></span>
                    </div>
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="index.html">${e===`ru`?`Главная`:`Home`}</a></li>
                        <li><a href="3d.html">${e===`ru`?`3D и Motion`:`3D & Motion`}</a></li>
                        <li><a href="dev.html" class="active">${e===`ru`?`Программирование`:`Programming`}</a></li>
                    </ul>
                </div>
            </header>

            <main>
                <div class="page-title">${e===`ru`?`Разработка (Kotlin / Android)`:`Development (Kotlin / Android)`}</div>
                <div class="section">
                    <h2>${e===`ru`?`Мои проекты`:`My Projects`}</h2>
                    <div class="grid-3cols">
                        <div class="project-card" style="cursor: default;">
                            <div class="thumbnail"><div class="thumbnail-placeholder">📱 Приложение в Rustore</div></div>
                            <h3>${e===`ru`?`Приложение в Rustore`:`App on Rustore`}</h3>
                        </div>
                        <div class="project-card" style="cursor: default;">
                            <div class="thumbnail"><div class="thumbnail-placeholder">⚙️ Второе приложение</div></div>
                            <h3>${e===`ru`?`Второе приложение`:`Second App`}</h3>
                        </div>
                        <div class="project-card" style="cursor: default;">
                            <div class="thumbnail"><div class="thumbnail-placeholder">🎮 Low‑poly головоломка</div></div>
                            <h3>${e===`ru`?`Low‑poly головоломка (Unity)`:`Low‑poly Puzzle Game (Unity)`}</h3>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <p>© 2026 Dmitry Bobikov / Uncle Griff</p>
            </footer>
        </div>
    `,n()}function n(){let n=document.getElementById(`burger`),r=document.getElementById(`navMenu`);n&&r&&n.addEventListener(`click`,()=>{r.classList.toggle(`show`)}),document.querySelectorAll(`.lang-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e=n.getAttribute(`data-lang`),localStorage.setItem(`siteLang`,e),t()})})}t();