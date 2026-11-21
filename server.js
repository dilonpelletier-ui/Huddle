// Signaling server: maps phone numbers to connected devices and relays WebRTC setup.
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
const nums = new Map(), rooms = new Map(); let nextId = 1;
const tx = (w, o) => w && w.readyState === 1 && w.send(JSON.stringify(o));
function leave(ws) {
  const r = rooms.get(ws.room); if (!r) return;
  r.delete(ws); r.forEach(w => tx(w, { t: 'left', id: ws.id }));
  if (!r.size) rooms.delete(ws.room); ws.room = null;
}
wss.on('connection', ws => {
  ws.id = String(nextId++);
  ws.on('message', raw => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (m.t === 'reg') { ws.num = m.num; nums.set(m.num, ws); }
    else if (m.t === 'invite') {
      const p = nums.get(m.to);
      p ? tx(p, { t: 'ring', from: ws.num, room: m.room }) : tx(ws, { t: 'unavail' });
    }
    else if (m.t === 'decline') tx(nums.get(m.to), { t: 'declined' });
    else if (m.t === 'join') {
      const r = rooms.get(m.room) || new Set();
      tx(ws, { t: 'peers', ids: [...r].map(w => w.id) });
      r.add(ws); rooms.set(m.room, r); ws.room = m.room;
    }
    else if (m.t === 'sig') (rooms.get(ws.room) || []).forEach(w => w.id === m.to && tx(w, { t: 'sig', from: ws.id, d: m.d }));
    else if (m.t === 'leave') leave(ws);
  });
  ws.on('close', () => { if (ws.num && nums.get(ws.num) === ws) nums.delete(ws.num); leave(ws); });
});
console.log('Huddle server on port', process.env.PORT || 8080);
