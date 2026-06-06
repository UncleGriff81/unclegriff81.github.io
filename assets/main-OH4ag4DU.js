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
                            <a href="https://t.me/@dBobikov" target="_blank">💬 TG</a>
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
                        <li><a href="index.html" class="active">${e===`ru`?`Главная`:`Home`}</a></li>
                        <li><a href="3d.html">${e===`ru`?`3D и Motion`:`3D & Motion`}</a></li>
                        <li><a href="dev.html">${e===`ru`?`Программирование`:`Programming`}</a></li>
                    </ul>
                </div>
            </header>

            <main>
                <div class="profile">
                    <div class="avatar-circle">
                         <img src="/avatar.jpg" alt="Dmitry Bobikov" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
                </div>
                    <div class="info">
                        <h1>${e===`ru`?`Дмитрий Бобиков`:`Dmitry Bobikov`} <span class="lastname">/ Uncle Griff</span></h1>
                        <div class="tagline">${e===`ru`?`3D-художник / Motion Designer / Blender`:`3D Artist / Motion Designer / Blender`}</div>
                    </div>
                </div>
                <div class="bio">
                    ${e===`ru`?`
        <p>Меня зовут Дмитрий (Uncle Griff). Я 3D-художник и motion-дизайнер, который находится в начале профессионального пути, но уже сформировал своё визуальное мышление и подход к кадру.</p>
        <p>Моё прошлое, которое помогает мне сейчас — это образование режиссёра театра и давнее увлечение музыкальной группой. Именно они помогли мне понять, что свет, ритм и движение могут рассказывать истории лучше слов.</p>
        <p>Сегодня я переношу это в 3D: стараюсь делать так, чтобы каждый кадр работал на задачу, а не просто был «красивым». При этом одинаково комфортно чувствую себя как в свободном эксперименте, так и в жёстких рамках технического задания — могу работать строго по референсам и требованиям.</p>
        <p>Мои инструменты — Blender (моделинг, скульптинг, анимация, Cycles/Eevee), композитинг в After Effects, Sony Vegas Pro, Adobe Photoshop, а также AI-инструменты (Midjourney, Runway). Я люблю экспериментировать: смешивать AI с традиционной 3D-графикой, искать неочевидные визуальные решения, пробовать новое там, где нет готовых инструкций.</p>
        <p>Сейчас я активно практикуюсь, собираю портфолио и ищу первую коммерческую работу в 3D. Спокойно отношусь к правкам, быстро разбираюсь в том, чего не знаю. Из сильных сторон — чувство ритма (спасибо музыке) и понимание драматургии кадра (спасибо театру).</p>
        <p>Параллельно развиваюсь в мобильной разработке на Kotlin: у меня есть приложения в Rustore и сейчас в работе low-poly головоломка от первого лица на платформе Unity. Также для себя разработал утилиту на Python, которая интегрируется с Blender и автоматизирует учёт рабочего времени — помогает отслеживать, сколько реально уходит на моделирование, анимацию и рендер, без ручного заполнения тайм-логов.</p>
        <p>Буду рад интересным задачам, адекватной критике и возможности расти вместе с проектом. Готов к тестовым заданиям.</p>
    `:`
        <p>My name is Dmitry (Uncle Griff). I'm a 3D artist and motion designer at the start of my professional journey — but I've already developed my own visual thinking and approach to storytelling through imagery.</p>
        <p>What helps me today is my background: a degree in theatre directing and a long‑time passion for playing in a band. That's where I learned that light, rhythm, and motion can tell stories better than words.</p>
        <p>Now I bring that into 3D: I focus on making every shot serve its purpose, not just look "pretty". I'm equally comfortable with creative experimentation and strict technical briefs — I can work precisely from references and requirements.</p>
        <p>My toolkit includes Blender (modeling, sculpting, animation, Cycles/Eevee), compositing in After Effects, Sony Vegas Pro, Adobe Photoshop, and AI tools like Midjourney and Runway. I love experimenting — mixing AI with traditional 3D, finding unexpected visual solutions, and exploring uncharted territory without ready‑made tutorials.</p>
        <p>Right now I'm actively practicing, building my portfolio, and looking for my first commercial job in 3D. I take feedback calmly and I'm a fast learner. My strengths: a strong sense of rhythm (thanks to music) and an understanding of visual dramaturgy (thanks to theatre).</p>
        <p>In parallel, I'm developing mobile apps in Kotlin: I have apps published on Rustore, and I'm currently working on a low‑poly first‑person puzzle game in Unity. I also built a Python tool that integrates with Blender to automate time tracking — it helps me see how much time actually goes into modeling, animation, and rendering, without manual log‑filling.</p>
        <p>I'm excited about interesting challenges, honest feedback, and the chance to grow together with a project. Ready for test tasks.</p>
    `}
                </div>
            </main>

            <footer>
                <p>© 2026 Dmitry Bobikov / Uncle Griff</p>
            </footer>
        </div>
    `,n()}function n(){let n=document.getElementById(`burger`),r=document.getElementById(`navMenu`);n&&r&&n.addEventListener(`click`,()=>{r.classList.toggle(`show`)}),document.querySelectorAll(`.lang-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e=n.getAttribute(`data-lang`),localStorage.setItem(`siteLang`,e),t()})})}t();