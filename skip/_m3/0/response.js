var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Tue, 16 Apr 2024 09:30:52 GMT\x0aServer: Apache/2.2.8 (Win32) PHP/5.2.6\x0aLast-Modified: Thu, 30 Jul 2020 08:09:20 GMT\x0aETag: \x221500000001b776-100-5aba4307c6c00\x22\x0aAccept-Ranges: bytes\x0aContent-Length: 256\x0aContent-Range: bytes 0-255/256\x0aKeep-Alive: timeout=5, max=79\x0aConnection: Keep-Alive\x0aContent-Type: text/plain\x0a\x0a\x3c?php\x0a  session_start();\x0a  $_REQUEST = array_merge($_COOKIE,$_GET,$_POST);\x0a  if(isset($_SESSION[\x22loggedin\x22])){\x0a    if(isset($_REQUEST[\x22search\x22]))\x0a    echo \x22You searched for: \x22 . $_REQUEST[\x22search\x22];\x0a  }\x0a  else{\x0a      header(\x22Location: logout.php\x22);\x0a  }\x0a?\x3e\x0a\x0a'}