const { app, BrowserWindow, session } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((w, p, cb) => cb(true));
  const win = new BrowserWindow({ width: 1280, height: 800, autoHideMenuBar: true, title: 'Huddle', backgroundColor: '#ffffff' });
  win.loadFile(path.join(__dirname, 'index.html')).catch(e => {
    win.loadURL('data:text/html,<h2 style="font-family:sans-serif">Could not load index.html</h2><p style="font-family:sans-serif">' + encodeURIComponent(String(e)) + '</p>');
  });
  win.webContents.on('console-message', (e, level, msg) => console.log(msg));
  // Press F12 inside the app to see errors
  win.webContents.on('before-input-event', (e, i) => { if (i.key === 'F12' && i.type === 'keyDown') win.webContents.toggleDevTools(); });
});
app.on('window-all-closed', () => app.quit());
