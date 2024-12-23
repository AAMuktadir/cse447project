import forge from "node-forge";

// Example keys (public and private)
const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCLsYKOpd58WAfeBTew2abd6bte
CxdgSSNUF2ffATvT6dIdCoWKI/izdUCswRvmchEIvvrbpdhaUqinJJhD+aLeUErq
qMkp6tmlLk1QEUQ0MAPUaa7/FJhy3uNlle1XoEF6A0MS/rHVNdTvXAbgRcuCms0P
uazqGtpdMO5uSCpHvQIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCLsYKOpd58WAfeBTew2abd6bteCxdgSSNUF2ffATvT6dIdCoWK
I/izdUCswRvmchEIvvrbpdhaUqinJJhD+aLeUErqqMkp6tmlLk1QEUQ0MAPUaa7/
FJhy3uNlle1XoEF6A0MS/rHVNdTvXAbgRcuCms0PuazqGtpdMO5uSCpHvQIDAQAB
AoGAeDsBmXDdervxmX94HThXTGwdHaYCKpcIVxoGBoPzUELQ2rnxkaHALgTe81EJ
iF/olVR6aI3nFmZKTgFLJEY5jERVtTKC/oKYYB8YjPuwthHbdTt3+qVl3+eWGzNu
aNRBNJxoFD28yPZLN/LuRRw9rwl7yDnHQBy+vxDfr4qN7ykCQQDFFipn+EU2kHHc
aNpvpRaBZmiweFi/KIb7cPd5IqUh6I70/S46naK1Ej3VvU0los1M3a1Oxmell9H1
fgc5a6MTAkEAtXNk0a9QD3Oo3rzpEngDWydSzYNp8BlBxydeUgxw7VBouF1dKixB
4jhQEEjnH0+t5Gt1vp7UIiMzoZ2x9dbz7wJAP+wYhPA5QqFGzL4VWvCog/+7JMFj
x1xVq2fQXDGobX8IHt2fCNPn2eK4u4JSa0qKW8vqUgp3w3WiW4UswqrukQJAQc8F
PMuBlOkU0RvgyFMAnJnJfUHxNSRj5/AOVGGwv1FPebZa6MW+a2aTGyTltkR2xAZ5
YNZIB82Ol0oTVh9MvwJAL81AmlrGJyJrNf5NqyUr26kvkkZvFuJV/n7aA65EVJTd
vfpY0fBR8L5iLE5Rq6apfIovHynWJVlXy//MGpNs6Q==
-----END RSA PRIVATE KEY-----`;

export const encrypt = (text) => {
  const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);
  const encrypted = publicKeyObj.encrypt(text, "RSA-OAEP");
  return forge.util.encode64(encrypted);
};

export const decrypt = (ciphertext) => {
  const privateKeyObj = forge.pki.privateKeyFromPem(privateKey);
  const decrypted = privateKeyObj.decrypt(
    forge.util.decode64(ciphertext),
    "RSA-OAEP"
  );
  return decrypted;
};
