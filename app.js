const programs = [
  {
    name: 'Rekayasa Perangkat Lunak',
    short: 'RPL',
    icon: '⌘',
    image: 'Rekayasa Perangkat Lunak.jpeg',
    logo: 'Logo Rekayasa Perangkat Lunak.png',
    text: 'Rancang aplikasi, website, dan solusi digital masa depan.',
    tags: ['Pemrograman', 'Web & aplikasi', 'UI/UX'],
  },
  {
    name: 'Teknik Komputer & Jaringan',
    short: 'TKJ',
    icon: '⌁',
    image: 'Teknik Komputer dan Jaringan.jpeg',
    logo: 'Logo Teknik  Komputer dan Jaringan.png',
    text: 'Pelajari jaringan, server, dan infrastruktur teknologi.',
    tags: ['Jaringan', 'Server', 'Keamanan siber'],
  },
  {
    name: 'Desain Komunikasi Visual',
    short: 'DKV',
    icon: '✳',
    image: 'Desain Komunikasi dan Visual.jpeg',
    logo: 'Logo Desain Komunikasi Visual.png',
    text: 'Ubah ide jadi karya visual yang bercerita dan berdampak.',
    tags: ['Desain', 'Ilustrasi', 'Fotografi'],
  },
  {
    name: 'Akuntansi & Keuangan',
    short: 'AKL',
    icon: '▤',
    image: 'Akuntansi dan Keuangan.jpeg',
    logo: 'Logo Akuntansi & Keuangan.png',
    text: 'Kelola keuangan bisnis dengan ketelitian dan teknologi.',
    tags: ['Akuntansi', 'Pajak', 'Keuangan'],
  },
  {
    name: 'Teknik Kendaraan Ringan',
    short: 'TKR',
    icon: '⚙',
    image: 'Teknik Kendaraan Ringan.jpeg',
    logo: 'Logo Teknik Kendaraan Ringan.png',
    text: 'Pelajari teknologi kendaraan dan perawatan otomotif.',
    tags: ['Otomotif', 'Mesin', 'Diagnostik'],
  },
  {
    name: 'Bisnis Digital',
    short: 'BDP',
    icon: '↗',
    image: 'Jurusan Bisnis Digital.jpeg',
    logo: 'Logo Bisnis Digital.png',
    text: 'Bangun bisnis, pemasaran, dan toko online masa depan.',
    tags: ['E-commerce', 'Marketing', 'Bisnis'],
  },
];

// Kredensial hanya untuk pratinjau frontend, bukan untuk produksi.
const ADMIN_DEMO = { username: 'admin', password: 'admin123' };
const app = document.getElementById('app');
const activityPhotos = [
  'Kegiatan sedang belajar bersama.jpeg',
  'Kegiatan Belajar Mengajar.jpeg',
  'Kegiatab Belajar Mengajar.jpeg',
  'kerja kelompok.jpeg',
];
let activitySlideshowTimer;

const sample = [
  {
    name: 'Aditya Pratama',
    nisn: '0062841932',
    major: 'Rekayasa Perangkat Lunak',
    status: 'Menunggu',
  },
  {
    name: 'Nabila Putri',
    nisn: '0063917824',
    major: 'Desain Komunikasi Visual',
    status: 'Terverifikasi',
  },
  {
    name: 'Rizky Ramadhan',
    nisn: '0065172938',
    major: 'Teknik Komputer & Jaringan',
    status: 'Menunggu',
  },
  {
    name: 'Siti Aulia',
    nisn: '0064291857',
    major: 'Akuntansi & Keuangan',
    status: 'Terverifikasi',
  },
];

function route() {
  return location.hash.slice(1) || '/';
}

function go(path) {
  location.hash = path;
}

function header(active = '') {
  return `<header class="topbar shell"><a class="brand" href="#/"><img class="brand-logo" src="Images/Logo/Logo%20Sekolah.png" alt="Logo sekolah"><span>SMK CAKRAWALA<small>SEKOLAH MASA DEPAN</small></span></a><nav class="navlinks"><a class="${active === 'home' ? 'active' : ''}" href="#/">Beranda</a><a class="${active === 'programs' ? 'active' : ''}" href="#/kejuruan">Program Keahlian</a><a href="#/daftar">Pendaftaran</a></nav><div class="navright"><a class="btn outline sm" href="#/login-siswa">Masuk siswa</a><a class="btn sm" href="#/daftar">Daftar sekarang <span>↗</span></a></div></header>`;
}

function footer() {
  return `<footer class="footer shell"><span>© 2025 SMK Cakrawala. Tumbuh, berkarya, berdampak.</span><span>PPDB Tahun Ajaran 2025/2026</span><a href="#/login-admin">Masuk admin</a></footer>`;
}

function programCards() {
  return programs
    .slice(0, 4)
    .map(
      (program) =>
        `<article class="program"><img class="program-image" src="Images/${encodeURIComponent(program.image)}" alt="Jurusan ${program.name}" loading="lazy"><img class="program-logo" src="Images/Logo/${encodeURIComponent(program.logo)}" alt="Logo ${program.name}" loading="lazy"><h3>${program.name}</h3><p>${program.text}</p><a href="#/kejuruan">Kenali jurusannya →</a></article>`
    )
    .join('');
}

function home() {
  return `${header('home')}<main class="home"><section class="hero shell"><div><span class="eyebrow"><i class="dot"></i> PPDB 2025 / 2026 TELAH DIBUKA</span><h1>Mulai langkah.<br>Wujudkan <em>masa depan.</em></h1><p class="hero-copy">Temukan potensi, asah keterampilan, dan siapkan dirimu menghadapi dunia kerja bersama SMK Cakrawala.</p><div class="hero-actions"><a class="btn" href="#/daftar">Mulai pendaftaran <span>↗</span></a><a class="btn outline" href="#/kejuruan">Jelajahi jurusan</a></div><div class="trust"><div class="faces"><span class="face">☺</span><span class="face">☺</span><span class="face">☺</span></div><span>Tempat tumbuh untuk generasi berdaya</span></div></div><div class="visual"><img id="activity-slideshow" alt="Kegiatan belajar siswa SMK" src="Images/Kegiatan%20sedang%20belajar%20bersama.jpeg"><div class="float-card"><strong>6 pilihan</strong><small>program keahlian unggulan</small></div><div class="visual-caption"><b>Belajar yang punya arah.</b><span>Keterampilan nyata. Kesempatan terbuka.</span></div></div></section><section class="section shell"><div class="section-head"><div><span class="eyebrow">TEMUKAN MINATMU</span><h2>Pilih jalurmu.</h2></div><p>Program yang dirancang untuk membekali kamu dengan ilmu dan keterampilan yang relevan.</p></div><div class="programs">${programCards()}</div></section><section class="shell" style="padding-bottom:65px"><div class="band"><div><h2>Masa depan dimulai dari satu langkah.</h2><p>Pendaftaran siswa baru telah dibuka. Yuk, jadi bagian dari kami.</p></div><a class="btn lime" href="#/daftar">Daftar sekarang ↗</a></div></section></main>${footer()}`;
}

function programsPage() {
  return `${header('programs')}<main class="programs-page shell"><div class="page-title"><span class="eyebrow">PROGRAM KEAHLIAN</span><h1>Temukan yang kamu suka.</h1><p>Belajar melalui praktik, bimbingan guru berpengalaman, dan kurikulum yang selaras dengan kebutuhan industri.</p></div><div class="program-detail">${programs.map((program) => `<article class="program"><img class="program-image" src="Images/${encodeURIComponent(program.image)}" alt="Jurusan ${program.name}" loading="lazy"><img class="program-logo" src="Images/Logo/${encodeURIComponent(program.logo)}" alt="Logo ${program.name}" loading="lazy"><h3>${program.name}</h3><p>${program.text}</p><a href="#/daftar">Pilih program ini →</a></article>`).join('')}</div></main>${footer()}`;
}

function registration() {
  return `${header()}<main class="shell"><div class="page-title"><span class="eyebrow">PPDB TAHUN AJARAN 2025/2026</span><h1>Formulir pendaftaran.</h1><p>Lengkapi data dirimu dengan benar. Pastikan dokumen yang diunggah jelas dan dapat dibaca.</p></div><form id="registration" class="form-layout"><section class="panel"><div class="panel-head"><h2>Data calon siswa</h2><span class="step">LANGKAH 1 DARI 1</span></div><div class="fields"><div class="field"><label for="fullname">Nama lengkap *</label><input id="fullname" name="fullname" required placeholder="Nama sesuai ijazah"></div><div class="field"><label for="nisn">NISN *</label><input id="nisn" name="nisn" required inputmode="numeric" pattern="[0-9]{10}" maxlength="10" placeholder="10 digit NISN"><span class="help">NISN terdiri dari 10 angka.</span></div><div class="field"><label for="birth">Tempat lahir *</label><input id="birth" name="birth" required placeholder="Kota kelahiran"></div><div class="field"><label for="date">Tanggal lahir *</label><input id="date" name="date" type="date" required></div><div class="field"><label>Jenis kelamin *</label><div class="radio-row"><label class="radio-option"><input type="radio" name="gender" value="Laki-laki" required> Laki-laki (L)</label><label class="radio-option"><input type="radio" name="gender" value="Perempuan"> Perempuan (P)</label></div></div><div class="field"><label for="religion">Agama *</label><select id="religion" name="religion" required><option value="">Pilih agama</option><option>Islam</option><option>Kristen</option><option>Katolik</option><option>Hindu</option><option>Buddha</option><option>Konghucu</option><option>Lainnya</option></select></div><div class="field"><label for="phone">Nomor HP / WhatsApp *</label><input id="phone" name="phone" type="tel" required placeholder="08xxxxxxxxxx"></div><div class="field"><label for="email">Email aktif</label><input id="email" name="email" type="email" placeholder="nama@email.com"></div><div class="field"><label for="school">Asal SMP / MTs *</label><input id="school" name="school" required placeholder="Nama sekolah asal"></div><div class="field"><label for="major">Pilihan kejuruan *</label><select id="major" name="major" required><option value="">Pilih program keahlian</option>${programs.map((program) => `<option>${program.name}</option>`).join('')}</select></div><div class="field full"><label for="address">Alamat lengkap *</label><textarea id="address" name="address" required placeholder="Jalan, RT/RW, kelurahan, kecamatan, kota/kabupaten"></textarea></div><div class="field"><label for="parent">Nama orang tua / wali *</label><input id="parent" name="parent" required placeholder="Nama orang tua atau wali"></div><div class="field"><label for="parentphone">Nomor HP orang tua / wali *</label><input id="parentphone" name="parentphone" type="tel" required placeholder="08xxxxxxxxxx"></div><div class="field"><label for="photo">Pas foto calon siswa *</label><div class="upload"><input id="photo" type="file" name="photo" required accept="image/jpeg,image/png"><div class="upload-status" id="photo-status">Format JPG atau PNG · Maks. 2 MB</div></div></div><div class="field"><label for="skl">Scan SKL dari SMP *</label><div class="upload"><input id="skl" type="file" name="skl" required accept="image/jpeg,image/png,application/pdf"><div class="upload-status" id="skl-status">Format JPG, PNG, atau PDF · Maks. 5 MB</div></div></div></div><div class="form-submit"><span class="help">* Wajib diisi</span><button class="btn" type="submit">Kirim pendaftaran ↗</button></div><div class="note">🔒 Data pendaftaran disimpan di browser untuk demo frontend ini.</div></section><aside class="side-info"><section class="panel"><h3>Yang perlu disiapkan</h3><div class="checkline"><b>✓</b><span>NISN aktif dan data diri sesuai ijazah</span></div><div class="checkline"><b>✓</b><span>Pas foto formal berlatar sederhana</span></div><div class="checkline"><b>✓</b><span>Scan SKL jelas, format PDF atau gambar</span></div><div class="checkline"><b>✓</b><span>Nomor HP siswa dan orang tua aktif</span></div></section><section class="panel"><h3>Butuh bantuan?</h3><p class="notice">Tim PPDB siap membantu proses pendaftaran kamu.</p><a class="text-link" href="mailto:ppdb@smkcakrawala.sch.id">Hubungi panitia →</a></section></aside></form></main>${footer()}`;
}

function login(student) {
  return `${header()}<main class="auth-wrap"><form class="auth-card" id="login" data-role="${student ? 'student' : 'admin'}"><span class="eyebrow">${student ? 'PORTAL SISWA' : 'PANEL ADMIN'}</span><h1>${student ? 'Selamat datang kembali.' : 'Masuk ke dashboard.'}</h1><p>${student ? 'Masuk untuk melihat informasi pendaftaran siswa.' : 'Silakan masuk untuk mengelola data PPDB.'}</p><div class="field"><label for="user">${student ? 'NISN atau email' : 'Nama pengguna'}</label><input id="user" name="username" required autocomplete="username" placeholder="${student ? 'Masukkan NISN atau email' : 'admin'}"></div><div class="field"><label for="password">Kata sandi</label><input id="password" name="password" type="password" required autocomplete="current-password" placeholder="Masukkan kata sandi"></div><button class="btn" type="submit">Masuk ↗</button>${student ? '<div class="demo-note">Portal siswa demo: akun belum terhubung.</div>' : '<div class="demo-note"><strong>Akun demo admin</strong><br>Nama pengguna: <code>admin</code><br>Kata sandi: <code>admin123</code><br>Hanya untuk demo frontend; autentikasi server belum tersedia.</div>'}<div class="auth-switch">${student ? 'Belum mendaftar?' : 'Portal siswa?'} <a class="text-link" href="#/${student ? 'daftar' : 'login-siswa'}">${student ? 'Daftar PPDB' : 'Masuk siswa'}</a></div></form></main>${footer()}`;
}

function dashboard() {
  const students = JSON.parse(localStorage.getItem('ppdb-students') || '[]');
  const all = [...students, ...sample];
  return `${header()}<div class="dash"><aside class="sidebar"><div class="side-label">MENU UTAMA</div><a class="side-link active" href="#/dashboard">▦ <span>Ringkasan</span></a><a class="side-link" href="#/dashboard">♙ <span>Data pendaftar</span></a><a class="side-link" href="#/kejuruan">⌘ <span>Program keahlian</span></a><div class="side-label">LAINNYA</div><a class="side-link" href="#/">↪ <span>Kembali ke website</span></a><a class="side-link" href="#/logout">⇥ <span>Keluar</span></a></aside><main class="dash-main"><div class="dash-title"><div><h1>Ringkasan pendaftaran</h1><p>Selamat datang di panel pengelolaan PPDB SMK Cakrawala.</p></div><span class="status">● Tahun ajaran 2025/2026</span></div><div class="stats"><article class="stat"><div class="stat-top"><span>Total pendaftar</span><span class="stat-icon">♙</span></div><strong>${all.length}</strong><small>Data pendaftaran</small></article><article class="stat"><div class="stat-top"><span>Menunggu verifikasi</span><span class="stat-icon">◷</span></div><strong>${all.filter((student) => student.status === 'Menunggu').length}</strong><small>Perlu ditinjau panitia</small></article><article class="stat"><div class="stat-top"><span>Terverifikasi</span><span class="stat-icon">✓</span></div><strong>${all.filter((student) => student.status === 'Terverifikasi').length}</strong><small>Data sudah dikonfirmasi</small></article><article class="stat"><div class="stat-top"><span>Program keahlian</span><span class="stat-icon">⌘</span></div><strong>6</strong><small>Program tersedia</small></article></div><section class="table-panel"><div class="table-head"><h2>Pendaftar terbaru</h2><input id="search" placeholder="Cari nama atau NISN..." aria-label="Cari pendaftar"></div><div class="table-scroll"><table><thead><tr><th>NAMA SISWA</th><th>NISN</th><th>PROGRAM KEAHLIAN</th><th>STATUS</th></tr></thead><tbody id="student-rows">${rows(all)}</tbody></table></div></section></main></div>`;
}

function rows(students) {
  if (!students.length)
    return '<tr><td colspan="4" class="empty">Belum ada data pendaftar.</td></tr>';
  return students
    .map(
      (student) =>
        `<tr><td><div class="student"><span class="avatar">${escapeHTML(student.name.trim().charAt(0).toUpperCase())}</span><b>${escapeHTML(student.name)}</b></div></td><td>${escapeHTML(student.nisn)}</td><td>${escapeHTML(student.major)}</td><td><span class="status ${student.status === 'Menunggu' ? 'wait' : ''}">${escapeHTML(student.status)}</span></td></tr>`
    )
    .join('');
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]
  );
}

function toast(message) {
  const element = document.getElementById('toast');
  if (!element) return;
  element.textContent = message;
  element.classList.add('show');
  setTimeout(() => element.classList.remove('show'), 2800);
}

function render() {
  clearInterval(activitySlideshowTimer);
  const currentRoute = route();
  if (currentRoute === '/logout') {
    sessionStorage.removeItem('ppdb-admin-auth');
    go('/login-admin');
    return;
  }
  if (currentRoute === '/dashboard' && sessionStorage.getItem('ppdb-admin-auth') !== 'true') {
    go('/login-admin');
    return;
  }
  app.innerHTML =
    currentRoute === '/daftar'
      ? registration()
      : currentRoute === '/kejuruan'
        ? programsPage()
        : currentRoute === '/login-admin'
          ? login(false)
          : currentRoute === '/login-siswa'
            ? login(true)
            : currentRoute === '/dashboard'
              ? dashboard()
              : home();
  window.scrollTo(0, 0);
  bind();
  startActivitySlideshow();
}

function startActivitySlideshow() {
  const image = document.getElementById('activity-slideshow');
  if (!image) return;
  let index = 0;
  activitySlideshowTimer = setInterval(() => {
    const nextIndex = (index + 1) % activityPhotos.length;
    const nextImage = new Image();
    nextImage.onload = () => {
      if (image.isConnected) {
        image.src = nextImage.src;
        index = nextIndex;
      }
    };
    nextImage.src = `Images/${encodeURIComponent(activityPhotos[nextIndex])}`;
  }, 4000);
}

function bind() {
  for (const id of ['photo', 'skl']) {
    const input = document.getElementById(id);
    if (!input) continue;
    input.addEventListener('change', () => {
      const file = input.files[0];
      const status = document.getElementById(`${id}-status`);
      const maxSize = id === 'photo' ? 2 : 5;
      if (!file || !status) return;
      if (file.size > maxSize * 1024 * 1024) {
        input.value = '';
        status.textContent = `Ukuran berkas melebihi ${maxSize} MB.`;
        status.style.color = '#c44838';
        return;
      }
      status.textContent = `✓ ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
      status.style.color = '#3673bf';
    });
  }

  const registrationForm = document.getElementById('registration');
  if (registrationForm)
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!registrationForm.reportValidity()) return;
      const data = Object.fromEntries(new FormData(registrationForm).entries());
      const students = JSON.parse(localStorage.getItem('ppdb-students') || '[]');
      students.unshift({
        name: data.fullname,
        nisn: data.nisn,
        major: data.major,
        status: 'Menunggu',
      });
      localStorage.setItem('ppdb-students', JSON.stringify(students));
      toast('Pendaftaran berhasil disimpan di browser ini.');
      registrationForm.reset();
    });

  const loginForm = document.getElementById('login');
  if (loginForm)
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!loginForm.reportValidity()) return;
      if (loginForm.dataset.role !== 'admin') {
        toast('Portal siswa demo — akun siswa belum terhubung.');
        return;
      }
      const username = loginForm.elements.username.value.trim();
      const password = loginForm.elements.password.value;
      if (username !== ADMIN_DEMO.username || password !== ADMIN_DEMO.password) {
        toast('Nama pengguna atau kata sandi admin salah.');
        return;
      }
      sessionStorage.setItem('ppdb-admin-auth', 'true');
      go('/dashboard');
    });

  const search = document.getElementById('search');
  if (search)
    search.addEventListener('input', () => {
      const students = [...JSON.parse(localStorage.getItem('ppdb-students') || '[]'), ...sample];
      const query = search.value.toLowerCase();
      const results = students.filter(
        (student) => student.name.toLowerCase().includes(query) || student.nisn.includes(query)
      );
      document.getElementById('student-rows').innerHTML = rows(results);
    });
}

window.addEventListener('hashchange', render);
render();
