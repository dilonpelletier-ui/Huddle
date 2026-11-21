const { app, BrowserWindow, session, systemPreferences } = require('electron');
const path = require('path');
app.setAppUserModelId('com.huddle.app');
app.disableHardwareAcceleration();
app.whenReady().then(() => {
  if (process.platform === 'darwin') systemPreferences.askForMediaAccess('microphone').catch(() => {});
  session.defaultSession.setPermissionRequestHandler((w, p, cb) => cb(true));
  const win = new BrowserWindow({ width: 1100, height: 760, autoHideMenuBar: true, title: 'Huddle', backgroundColor: '#ffffff', webPreferences: { webSecurity: false } });
  win.loadFile(path.join(__dirname, 'index.html')).catch(e => {
    win.loadURL('data:text/html,<h2 style="font-family:sans-serif">Could not load index.html</h2><p>' + encodeURIComponent(String(e)) + '</p>');
  });
  win.webContents.on('before-input-event', (e, i) => { if (i.key === 'F12' && i.type === 'keyDown') win.webContents.toggleDevTools(); });
});
app.on('window-all-closed', () => app.quit());
