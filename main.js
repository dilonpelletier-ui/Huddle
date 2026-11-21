const { app, BrowserWindow, session } = require('electron');
app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((w, p, cb) => cb(true));
  const win = new BrowserWindow({ width: 1280, height: 800, autoHideMenuBar: true, title: 'Huddle' });
  win.loadFile('index.html');
});
app.on('window-all-closed', () => app.quit());
