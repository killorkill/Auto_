var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://107.20.213.223/process.php?file=Generics/index.nsp', 'dir': '_m0/0', 'linked': 2, 'len': 3073 },
    { 'url': 'http://107.20.213.223/auth/login.php', 'dir': '_m0/1', 'linked': 2, 'len': 3057 },
    { 'url': 'http://107.20.213.223/auth/Login', 'dir': '_m0/2', 'linked': 0, 'len': 620 },
    { 'url': 'http://107.20.213.223/auth/xss.php', 'dir': '_m0/3', 'linked': 2, 'len': 1131 },
    { 'url': 'http://107.20.213.223/process.php', 'dir': '_m0/4', 'linked': 2, 'len': 1380 },
    { 'url': 'http://107.20.213.223/control.php', 'dir': '_m0/5', 'linked': 5, 'len': 297 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://107.20.213.223/auth/style.css', 'dir': '_m1/0', 'linked': 2, 'len': 8411 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://107.20.213.223/', 'dir': '_m2/0', 'linked': 2, 'len': 136 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://107.20.213.223/auth/xss', 'dir': '_m3/0', 'linked': 0, 'len': 256 },
    { 'url': 'http://107.20.213.223/auth/logout', 'dir': '_m3/1', 'linked': 0, 'len': 49 } ]
  }
];

var issue_samples = [
  { 'severity': 4, 'type': 50201, 'samples': [
    { 'url': 'http://107.20.213.223/control.php', 'extra': '', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40402, 'samples': [
    { 'url': 'http://107.20.213.223/hello.php?name=9876sfi', 'extra': 'PHP parse error (HTML)', 'sid': '22010', 'dir': '_i1/0' },
    { 'url': 'http://107.20.213.223/hello.php?name=.\x5cVisitor', 'extra': 'PHP warning (HTML)', 'sid': '22018', 'dir': '_i1/1' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://107.20.213.223/artist.php?s=1', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/10' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/11' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/12' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/13' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/14' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/15' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/16' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/17' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': '', 'sid': '0', 'dir': '_i2/18' },
    { 'url': 'http://107.20.213.223/hello.php?aaaa/=Invicti%21', 'extra': '', 'sid': '0', 'dir': '_i2/19' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]=com&irc=', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://107.20.213.223/artist.php?id=1', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://107.20.213.223/artist.php?s=1', 'extra': 'Too many previous fetch failures', 'sid': '0', 'dir': '_i3/2' } ]
  },
  { 'severity': 1, 'type': 20101, 'samples': [
    { 'url': 'http://107.20.213.223/', 'extra': 'XSS injection', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27sfish\x27]=%20DAST&irc=', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]\x27]\x27]\x27]\x27]\x27]=D1D1D1&irc=', 'extra': 'during try list fetches', 'sid': '0', 'dir': '_i4/2' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]\x27]\x27]\x27]\x27]\x27]=none&irc=', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i4/3' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]\x27]\x27]=%26apos%3Bskip%26apos%3B%26apos%3B%26apos%3B%26quot%3Bfish%26quot%3B%26quot%3B%26quot%3B&irc=', 'extra': 'Redirect injection', 'sid': '0', 'dir': '_i4/4' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]\x27]=%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/5' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]\x27]=6px&irc=', 'extra': 'during parameter brute-force tests', 'sid': '0', 'dir': '_i4/6' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27[0][\x27sfish\x27]\x27]\x27]=file:%252F%252F%252Fetc%252Fpasswd%2500%252ejs&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/7' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27pp\x27]\x27]=9876sfi&irc=', 'extra': 'param behavior', 'sid': '0', 'dir': '_i4/8' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27[0][\x27sfish\x27]\x27]=file:///boot.ini&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/9' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27pp\x27]=%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/10' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&[0][\x27sfish\x27]=%252f%252e%252e/WEB-INF%252fweb%252exml&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/11' },
    { 'url': 'http://107.20.213.223/hello.php?aaaa/=9876sfi', 'extra': 'param behavior', 'sid': '0', 'dir': '_i4/12' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js&pp=%20DAST&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/13' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&pp=%20DAST&irc=9876sfi', 'extra': 'param behavior', 'sid': '0', 'dir': '_i4/14' },
    { 'url': 'http://107.20.213.223/hello.php?hpp=Netsparker&pp=%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js&irc=', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/15' },
    { 'url': 'http://107.20.213.223/process.php', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i4/16' },
    { 'url': 'http://107.20.213.223/process.php?file=9876sfi', 'extra': 'param behavior', 'sid': '0', 'dir': '_i4/17' },
    { 'url': 'http://107.20.213.223/products.php', 'extra': 'User agent behavior', 'sid': '0', 'dir': '_i4/18' },
    { 'url': 'http://107.20.213.223/products.php?[0][\x27pp\x27]=%20DAST', 'extra': 'param OGNL', 'sid': '0', 'dir': '_i4/19' },
    { 'url': 'http://107.20.213.223/products.php?pro=%252f%252e%252e%252f%252e%252e%252f%252e%252e%252f%252e%252e/WEB-INF%252fweb%252exml%2500.js', 'extra': 'local file inclusion', 'sid': '0', 'dir': '_i4/20' },
    { 'url': 'http://107.20.213.223/artist.php', 'extra': 'during initial resource fetch', 'sid': '0', 'dir': '_i4/21' },
    { 'url': 'http://107.20.213.223/nslookup.php', 'extra': 'during initial resource fetch', 'sid': '0', 'dir': '_i4/22' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://107.20.213.223/', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://107.20.213.223/auth/style.css', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://107.20.213.223/auth/xss', 'extra': '', 'sid': '0', 'dir': '_i5/2' },
    { 'url': 'http://107.20.213.223/auth/logout', 'extra': '', 'sid': '0', 'dir': '_i5/3' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://107.20.213.223/auth/xss', 'extra': 'text/plain', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://107.20.213.223/auth/Login', 'extra': 'application/xhtml+xml', 'sid': '0', 'dir': '_i7/0' },
    { 'url': 'http://107.20.213.223/auth/logout', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/1' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://107.20.213.223/control.php', 'extra': '', 'sid': '0', 'dir': '_i8/0' },
    { 'url': 'http://107.20.213.223/auth/control.php', 'extra': '', 'sid': '0', 'dir': '_i8/1' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://107.20.213.223/process.php?file=Generics/index.nsp', 'extra': 'id', 'sid': '0', 'dir': '_i9/0' },
    { 'url': 'http://107.20.213.223/auth/login.php', 'extra': 's', 'sid': '0', 'dir': '_i9/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://107.20.213.223/auth/Login', 'extra': '', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://107.20.213.223/auth/xss', 'extra': '', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://107.20.213.223/auth/control', 'extra': '', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://107.20.213.223/auth/logout', 'extra': '', 'sid': '0', 'dir': '_i10/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://107.20.213.223/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://107.20.213.223/lpt9', 'extra': '', 'sid': '0', 'dir': '_i11/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://107.20.213.223/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://107.20.213.223/auth/session/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i12/1' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://107.20.213.223/', 'extra': 'Apache/2.2.8 (Win32) PHP/5.2.6', 'sid': '0', 'dir': '_i13/0' } ]
  }
];

