# Huddle

Free voice calls and text messages between friends, for **Windows, Mac and Android**. No accounts, no sign-up and no server to run.

> Huddle numbers are **not real phone numbers**. You can only call and message other Huddle users.

## Features

- **Voice calls** with mute, hold, a ringing tone and a pop-up bar to accept or decline
- **Messages** with blue and grey bubbles, Sent / Delivered / Read, and retry if one fails
- **Contacts**, a keypad, and a normal 10-digit number like `+1 (555) 123-4567`
- **Caller ID** (changeable once a week) and **profile pictures**
- **Notifications** for calls and messages
- Optional **rainbow effect** when you call someone

## Get the app

1. Open the **Actions** tab above and click the latest green build.
2. Scroll to **Artifacts** and download the one for your device:

| Device | Download | Then |
|---|---|---|
| Windows | `Huddle-Windows` | Unzip and run the `.exe`. If Windows warns you, click **More info**, then **Run anyway**. |
| Mac | `Huddle-Mac` | Unzip, pick the **arm64** file for M1/M2/M3/M4 Macs (the other for Intel), drag Huddle to Applications, then **right-click, Open**. If it says "damaged", run `xattr -cr /Applications/Huddle.app` in Terminal. |
| Android | `Huddle-Android` | Unzip and tap `app-debug.apk`. Allow installs from unknown sources, and tap **Install anyway** if Play Protect warns you. |

The warnings appear because the apps aren't signed with paid developer accounts.

## First-time setup

1. Open Huddle and allow the **microphone** and **notifications**.
2. Open **Settings** and enter a **group code**. Everyone who should be able to reach each other uses the **same code**.
3. Set your number and caller ID, then give your number to your friends.
4. Add their numbers as contacts, then call or message them.

The dot at the top turns green when you're connected.

## How it works

There is no Huddle server. Devices find each other through the free public relay [ntfy.sh](https://ntfy.sh), and then the call audio goes **directly between the two devices**.

## Limits

- Both people need to be **online** for a call to ring. Messages sent while you were away arrive when you reconnect (up to about 12 hours).
- **Android** can pause the app in the background, so calls and messages may not arrive until you open it.
- Some strict networks (school, work, some mobile carriers) block direct calls.
- The free relay limits how much one internet connection can send per day, so very heavy use may stop working for a while.
- Text messages are **not end-to-end encrypted**. See [SECURITY.md](SECURITY.md).

## Build it yourself

Every push to this repository builds all three apps automatically with GitHub Actions. To run it on your own computer:

```
npm install
npm start
```

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app (screens, calling and messaging) |
| `main.js`, `preload.js` | Windows and Mac app wrapper (Electron) |
| `capacitor.config.json` | Android app wrapper |
| `package.json` | Project settings |
| `.github/workflows/build.yml` | Builds the apps |
| `SECURITY.md` | Security notes and how to report a problem |
