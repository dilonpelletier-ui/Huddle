Security

Huddle is a small hobby app for voice calls and text messages between friends. Here is what is protected, what isn't, and how to report a problem.

What is protected

Call audio is encrypted. Voice goes directly between the two devices using WebRTC, which encrypts it.

Connections use HTTPS. Everything sent to the relay travels over an encrypted connection.

No accounts or passwords are stored. There is no Huddle server and no database of users.

What is NOT protected

Text messages are not end-to-end encrypted. They pass through a free public relay (ntfy.sh). The relay's operator could read them, and so could anyone who knows both your group code and your number.

The group code is not a password. It only keeps strangers from guessing your inbox. Pick a long, unusual code and share it only with people you trust.

Your number and caller ID can be faked. Anyone with the group code can use any number or name. Don't treat a caller as verified.

Your IP address is visible to the person you call, because calls connect directly between devices.

Data on your device is not encrypted. Messages, contacts and your profile photo are saved in the app's local storage.

The apps are not code-signed. Windows and Mac will show an "unsafe" warning, and Android installs a test-signed file. Only install builds you made yourself from this repository.

Staying safe

Use a long group code and don't post it publicly.

Don't send passwords, bank details or anything private in messages.

Download Huddle only from this repository's Actions tab, never from a link someone sends you.

Reporting a security problem

Please don't post security problems in a public issue.

Open this repository's Security tab.
Click Report a vulnerability.
Describe what you found and how to reproduce it.

I'll reply as soon as I can. Only the latest version of Huddle gets fixes.
