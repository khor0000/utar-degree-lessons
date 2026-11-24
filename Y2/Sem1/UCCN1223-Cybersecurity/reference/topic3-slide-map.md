# Topic 3a / 3b slide map (read-only research)

Source decks: `lecture/Topic_3a.pdf` (53 pages), `lecture/Topic_3b.pdf` (79 pages), plus `lecture/Topic 4.pdf` for the keyword grep only.
Word counts come from the PyMuPDF text layer (`page.get_text("text")`, whitespace split). IMAGE-ONLY = fewer than 12 words in the text layer.
Rendered PNGs (110 dpi): `C:/Users/User/AppData/Local/Temp/claude/a1e7c391a5786c5c/6f3d3519-d13d-48a8-9a24-4b5ac23a4a8a/scratchpad/render/3a-pNN.png` and `.../render/3b-pNN.png`.
"viewed" = I opened the PNG with Read. "not opened" = rendered but only the text layer was read.

## 1. Page table: Topic_3a

| p | words | flag | summary |
|---|---|---|---|
| 1 | 10 | IMAGE-ONLY (cover, not rendered) | Title slide: Topic 3a, Basic Cryptography, Concept |
| 2 | 23 | | Outline: substitution techniques, Caesar, monoalphabetic, Playfair, Hill |
| 3 | 2 | IMAGE-ONLY | Section divider "CRYPTOGRAPHY" (rendered, not opened) |
| 4 | 81 | | Attacker can block, intercept, modify or fabricate messages |
| 5 | 42 | | Terminology: cryptography, cryptology and cryptanalysis defined |
| 6 | 55 | | Terminology: encryption, decryption, cryptosystem, encipher/decipher synonyms |
| 7 | 70 | | Five elements: plaintext, ciphertext, key, encryption and decryption algorithms |
| 8 | 1 | IMAGE-ONLY | Diagram: plaintext to encryption E to ciphertext, C = E(P), P = D(C) (viewed) |
| 9 | 43 | | Symmetric (authenticity, key distribution) vs asymmetric (key management) |
| 10 | 70 | | Block ciphers (DES 64 bits, AES 128 bits) vs stream ciphers; Caesar, columnar examples |
| 11 | 80 | | Two primitives: substitution replaces, transposition shuffles |
| 12 | 11 | IMAGE-ONLY | Table: substitution vs transposition; Caesar HELLO to KHOOR; rail fence HELLO (viewed) |
| 13 | 6 | IMAGE-ONLY | Caesar worked example: CYBER SECURITY, key 3, answer FBEHU VHFXULWB (viewed) |
| 14 | 73 | | Columnar transposition: keyword GERMAN, DEFEND THE EAST WALL, grid and ciphertext |
| 15 | 105 | | Confusion (substitution) and diffusion (transposition) defined |
| 16 | 77 | | Shannon 1949: secrecy amount and simple key/algorithm characteristics |
| 17 | 97 | | Trustworthy encryption: sound mathematics, expert review, test of time |
| 18 | 57 | | Attacks: cryptanalysis using algorithm knowledge; brute-force tries every key |
| 19 | 6 | IMAGE-ONLY | Section divider "ADDITIONAL EXAMPLE OF SUBSTITUTION TECHNIQUE" (viewed) |
| 20 | 78 | | Caesar worked example: SECURITY IS AMAZING, K=8, answer AMKCZQBG QA IUIHQVO |
| 21 | 28 | | Caesar rule: key 3 shifts right to encrypt, left to decrypt |
| 22 | 54 | | Exercise 1 Caesar: KNOWLEDGE IS THE KEY TO SUCCESS, K=6; answer blank (viewed) |
| 23 | 50 | | Exercise 2 Caesar: decrypt IEHKX YKIAXOZE OY YCKKZ, K=4; answer blank (viewed) |
| 24 | 5 | IMAGE-ONLY | Section divider "TYPES OF SUBSTITUTION TECHNIQUE" (rendered, not opened) |
| 25 | 22 | | Cipher defined: encryption algorithm converting plaintext to ciphertext |
| 26 | 1 | IMAGE-ONLY | Slide number only; no text (rendered, not opened) |
| 27 | 3 | IMAGE-ONLY | Section divider "MONOALPHABETIC CIPHERS" (viewed) |
| 28 | 14 | | Monoalphabetic list: keyword, keyword mixed, keyword transposed, interrupted keyword |
| 29 | 72 | | Keyword cipher, WIRELESS: STUDENTS answer PQTEJQP; VKOF answer WORK |
| 30 | 48 | | Keyword cipher exercise, PROGRESS: CYBERSECURITY, CQ AKKG; answers blank (viewed) |
| 31 | 103 | | Keyword mixed, WIRELESS: TEAM answer FYWK; SEUR answer WORK (viewed) |
| 32 | 52 | | Keyword mixed exercise, ASSESS: CRYPTOGRAPHY, LKJU; answers blank (viewed) |
| 33 | 103 | | Keyword transposed, WIRELESS: NETWORK answer RIOACSF; GIMXSZOP answer SECURITY (viewed) |
| 34 | 78 | | Keyword transposed exercise, ASSETS: CISCO, IEGP; answers blank (viewed) |
| 35 | 105 | | Interrupted keyword, WIRELESS: ORANGE answer OFWDMI; DRKI answer NICE (viewed) |
| 36 | 52 | | Interrupted keyword exercise, RESEARCH: UTAR, RUAT; answers blank (viewed) |
| 37 | 3 | IMAGE-ONLY | Section divider "PLAYFAIR CIPHER" (viewed) |
| 38 | 109 | | Playfair key square 5x5 with keyword MONARCHY; J omitted; fill rules |
| 39 | 58 | | Playfair digraph split: instruments becomes in st ru me nt sz |
| 40 | 45 | | Playfair same-column rule; "me" gives "cl" (viewed) |
| 41 | 46 | | Playfair same-row rule; "st" gives "tl" (viewed) |
| 42 | 44 | | Playfair rectangle rule; "nt" gives "rq" (viewed) |
| 43 | 39 | | Playfair exercise: complete in, ru, sz; AT, TA, CK with MONARCHY |
| 44 | 0 | IMAGE-ONLY | Solved slide: INSTRUMENTS, MONARCHY, pairs to GATLMZCLRQTX (viewed) |
| 45 | 0 | IMAGE-ONLY | Solved slide: ATTACK, MONARCHY, pairs to RS SR DE = RSSRDE (viewed) |
| 46 | 3 | IMAGE-ONLY | Example 2: TREE IS GREEN, ENVIRONMENT, ciphertext BV VU NR QH EN NV (viewed) |
| 47 | 3 | IMAGE-ONLY | Section divider "Hill Cipher" (viewed) |
| 48 | 0 | IMAGE-ONLY | Hill step 1/2: key [[3,3],[2,5]], det 9, HELLO to HE LL OX (viewed) |
| 49 | 0 | IMAGE-ONLY | Hill step 2/2: block encryption gives HI, OZ, HN; HIOZHN (viewed) |
| 50 | 65 | | Symmetric problem: key distribution and key management for many pairs |
| 51 | 107 | | Private key protection: nine rules on lifetime, storage, destruction, transport |
| 52 | 22 | | Repeat of outline slide (substitution, Caesar, monoalphabetic, Playfair, Hill) |
| 53 | 0 | IMAGE-ONLY | Q and A closing slide (viewed) |

IMAGE-ONLY pages in 3a: 1, 3, 8, 12, 13, 19, 24, 26, 27, 37, 44, 45, 46, 47, 48, 49, 53 (17 pages). Page 1 is the cover and was not rendered.

## 2. Page table: Topic_3b

| p | words | flag | summary |
|---|---|---|---|
| 1 | 13 | | Title slide: Topic 3(b), Basic Cryptography, Asymmetric Ciphers |
| 2 | 22 | | Outline: asymmetric, RSA, digital signatures, hash, authentication, protocols |
| 3 | 2 | IMAGE-ONLY | Section divider "INTRODUCTION" (rendered, not opened) |
| 4 | 63 | | Asymmetric (public key) cryptography uses a public and private key pair |
| 5 | 67 | | Diffie and Hellman 1976: solves key distribution and digital signatures |
| 6 | 60 | | Either key can encrypt and the other decrypts; confidentiality, authentication |
| 7 | 1 | IMAGE-ONLY | Slide number only; no text (rendered, not opened) |
| 8 | 80 | | Public key gives confidentiality; private key signing gives authenticity |
| 9 | 5 | IMAGE-ONLY | Section divider "ASYMMETRIC ENCRYPTION WITH RSA" (rendered, not opened) |
| 10 | 73 | | RSA history: Rivest, Shamir, Adleman, MIT 1977; patent and public domain |
| 11 | 36 | | RSA relies on number theory and difficulty of factoring; arithmetic mod n |
| 12 | 48 | | RSA formulas: C = M^e mod n (encrypt), M = C^d mod n (decrypt) |
| 13 | 156 | | RSA key generation: p=3, q=11, n=33, z=20, e=7; PU = {7, 33} |
| 14 | 101 | | RSA private key: (d x 7) mod 20 = 1 gives d=3; PR = {3, 33} |
| 15 | 97 | | Browser requests server public key {7, 33}; plaintext M=14 |
| 16 | 1 | IMAGE-ONLY | Summary diagram "RSA: Generating a key pair" with p, q, n, e, d (viewed) |
| 17 | 55 | | Encryption formula C = M^e mod n with PU = {7, 33} |
| 18 | 86 | | Worked: 14^7 = 105413504; 105413504 mod 33 = 20; C = 20 |
| 19 | 69 | | Decryption formula M = C^d mod n with d=3, n=33 |
| 20 | 67 | | Worked: 20^3 = 8000; 8000 mod 33 = 14, recovers plaintext |
| 21 | 40 | | Example 1: p=5, q=11, e=3, M=4; (a) find d [4 marks], (b) verify [6 marks] |
| 22 | 103 | | Example 1 (a): z=40; d=27 because (3 x 27) mod 40 = 1 |
| 23 | 52 | | Example 1 (b): n=55; C = 4^3 mod 55 = 64 mod 55 = 9 |
| 24 | 37 | | Example 1 (b): M = 9^27 mod 55 = 4 (deck shows "927 mod 55") |
| 25 | 42 | | Example 2: p=13, q=23, e=35, M=2; questions only, no solution text (viewed) |
| 26 | 3 | IMAGE-ONLY | Section divider "PASSWORD SECURITY" (rendered, not opened) |
| 27 | 1 | IMAGE-ONLY | Slide number only; no text (rendered, not opened) |
| 28 | 1 | IMAGE-ONLY | Slide number only; no text (rendered, not opened) |
| 29 | 3 | IMAGE-ONLY | Section divider "DIGITAL SIGNATURE" (rendered, not opened) |
| 30 | 78 | | Digital signature: private key signs, public key verifies; three properties |
| 31 | 46 | | Digital signature computed by public key encryption with the private key |
| 32 | 68 | | Requirements: unforgeable, authentic; desirable: not alterable, not reusable |
| 33 | 74 | | Features: integrity via hashing, authentication, non-repudiation |
| 34 | 18 | | Two signature processes: Digital Signature Standard (DSS) and RSA |
| 35 | 63 | | Generic model: sign with private key; verify with public key |
| 36 | 90 | | RSA signature: encrypt message digest with private key; compare hash values |
| 37 | 62 | | DSA uses two keys: one from hash (SHA-1 originally), one from private key |
| 38 | 64 | | DSA signs only, not encryption; faster than RSA; NIST standard |
| 39 | 49 | | DSA advantages, disadvantages and applications (certificates, document signing) |
| 40 | 76 | | ECDSA: elliptic curve, smaller keys, faster; blockchain, TLS, IoT |
| 41 | 136 | | Properties: easy to sign, easy to verify, hard to forge |
| 42 | 26 | | Applications: email/SMS, online banking, software updates, Bitcoin |
| 43 | 45 | | Electronic signature vs digital signature: consent vs cryptographic proof |
| 44 | 46 | | Long messages: hash the message first, then sign the digest |
| 45 | 3 | IMAGE-ONLY | Section divider "HASH FUNCTION" (rendered, not opened) |
| 46 | 47 | | Hash function: variable-length input gives fixed-length hash value |
| 47 | 79 | | Hashing uses: file integrity, database indexing, security features |
| 48 | 44 | | Hash features: starts with data; each algorithm computes it differently |
| 49 | 4 | IMAGE-ONLY | Login diagram: password through #MOD# hashing algorithm to hd23dd23 (viewed) |
| 50 | 43 | | Property 1: condenses arbitrary-length input to fixed-length output |
| 51 | 74 | | Properties 2 and 3: one-way; hard to find collisions |
| 52 | 51 | | HMAC: secret key added to input, then hashed |
| 53 | 43 | | HMAC size equals hash size; HMAC-MD5 128-bit, HMAC-SHA-1 160-bit |
| 54 | 59 | | Common hashes: MD4, MD5, SHA; MD4/MD5 by Rivest, 1990-1992 |
| 55 | 44 | | MD5 gives 128-bit (32 hex); SHA-1 gives 160-bit; sample hash values |
| 56 | 48 | | SHA-0, SHA-1, SHA-2 (224/256/384/512 bits), SHA-3 |
| 57 | 6 | IMAGE-ONLY | Table "Current secure hash standard properties" (MD5 to SHA-3-512) (viewed) |
| 58 | 16 | | Hash is one-way; salt is random data added before hashing |
| 59 | 36 | | CSPRNG generates a long random salt for hashed passwords in a database |
| 60 | 3 | IMAGE-ONLY | Section divider "AUTHENTICATION TECHNOLOGIES" (rendered, not opened) |
| 61 | 79 | | Identity from 3 factors: something you have, know, are; examples listed |
| 62 | 46 | | Ownership factor: smart cards, hardware tokens, OTP generators, USB keys |
| 63 | 47 | | Ownership: device stores secret or OTP; can be lost or stolen |
| 64 | 30 | | Knowledge factor: passwords, PIN numbers, passphrases, secret questions |
| 65 | 41 | | Knowledge: brute-force, phishing, credential-stuffing; weak or reused passwords |
| 66 | 25 | | Inherence factor: biometric traits (fingerprint, face, iris, voice, DNA) |
| 67 | 47 | | Biometric system: sensor reads trait, compares to stored templates |
| 68 | 44 | | Requirements: universality, distinctiveness, permanence, collectability |
| 69 | 14 | | Diagram: feature vector compared with reference vector; match or no match (viewed) |
| 70 | 47 | | Examples to score: iris, fingerprint, DNA, face, voice, signature (no scores in text) |
| 71 | 8 | IMAGE-ONLY | Section divider "Cryptography protocols and their real-world applications" (rendered, not opened) |
| 72 | 39 | | Protocols define how algorithms are applied: secure communication over untrusted networks |
| 73 | 43 | | SSL/TLS: encryption, authentication, integrity; HTTPS, banking, SMTP over TLS |
| 74 | 41 | | HTTPS: TLS-encrypted HTTP; protects data in transit, prevents man-in-the-middle |
| 75 | 38 | | IPsec: authentication, encryption, integrity at network layer; VPNs |
| 76 | 30 | | Digital signatures protocol: authenticity, integrity, non-repudiation; software updates |
| 77 | 39 | | SSH: encrypted communication and strong authentication; remote administration, SFTP |
| 78 | 25 | | Importance of protocols: protect data, secure public networks, prevent tampering |
| 79 | 5 | IMAGE-ONLY | Q and A closing slide (not rendered) |

IMAGE-ONLY pages in 3b: 3, 7, 9, 16, 26, 27, 28, 29, 45, 49, 57, 60, 71, 79 (14 pages). All of them except p79 (Q and A, closing slide) were rendered. p25 was rendered as a check although it has 42 words.

## 3. Keyword grep (case-insensitive, text layer)

| term | Topic_3a | Topic_3b | Topic 4 |
|---|---|---|---|
| "authentication factor" | none | none | none |
| "something you know" | none | p61 (caption "Something you know") | none |
| "something you have" | none | p61 (caption "Something you have") | none |
| "biometric" | none | p66, 67, 68, 69, 70 | none |
| "password" | none | p26 ("PASSWORD SECURITY" header), p59, p61, p62, p64, p65 | p21 ("Weak or default passwords"), p45 ("passwords, usernames, credit cards") |

Notes: p61 uses the wording "three factors" and "Ownership / Knowledge / Inherence" in the body, and the captions "Something you are / know / have". The exact phrase "authentication factor" does not appear in any deck. Topic 4 hits are in unrelated vulnerability and phishing slides; the grep did not read Topic 4 beyond those lines.

## 4. Planned lessons (a) to (l)

### (a) Encryption basics, cipher parts, substitution vs transposition, symmetric vs asymmetric, attacks
- Pages: 3a 4-11, 15-18, 25; 3b 4-6, 8 (asymmetric intro).
- Key slide text: "Cryptography is the practice and study of hiding information." (3a p5); "Encryption is the process of encoding a message so that its meaning is not obvious" (3a p6).
- Five elements (3a p7): "Plaintext", "Ciphertext", "Key", "Encryption algorithm", "Decryption algorithm".
- Formal notation (3a p8, viewed): "C = E(P) and P = D(C)".
- Substitution vs transposition (3a p11): "Substitution: One set of bits is exchanged for another." "Transposition: Rearranging the order of the ciphertext to break any repeating patterns". Weakness on substitution: "frequency of the ciphertext p will match that of plaintext".
- Symmetric vs asymmetric (3a p9): Symmetric advantage "Authenticity - as long as the key remains secret"; disadvantage "Key management - require key distribution". Asymmetric advantage "Excel in key management".
- Types (3a p10): "Stream Ciphers: Encrypt one bit or one byte or one character at a time. E.g.: Caesar Cipher"; "Block Ciphers: E.g: Columnar Transposition Cipher".
- Confusion and diffusion (3a p15): "Substitution achieves confusion"; "Transposition achieves diffusion."
- Secure algorithm criteria (3a p16-17): Shannon 1949; commercial-grade: "sound mathematics", "analyzed by competent experts", "stood the test of time".
- Attacks (3a p4): block, intercept, modify, fabricate. Cryptanalysis and brute-force (3a p18): "The attacker tries every possible key on a piece of ciphertext".
- Worked examples: none in this group.

### (b) Caesar
- Pages: 3a 12 (table, rail fence and Caesar), 13, 19-23; 3a 10 (classified as stream cipher).
- Worked examples (exact values):
  - p13: "Encrypt the following message using Caesar Cipher with key 3", M = CYBER SECURITY, K = 3. Answer: FBEHU VHFXULWB (viewed).
  - p12 (diagram): HELLO with shift 3 gives KHOOR (viewed).
  - p20: M = SECURITY IS AMAZING, K = 8. Answer: AMKCZQBG QA IUIHQVO (text layer).
  - p21: rule "Encryption (+3): Shift RIGHT. Decryption (-3): Shift LEFT."
  - p22 Exercise 1: M = KNOWLEDGE IS THE KEY TO SUCCESS, K = 6. ANSWER: blank in deck (viewed).
  - p23 Exercise 2 (decrypt): IEHKX YKIAXOZE OY YCKKZ, K = 4. ANSWER: blank in deck (viewed).
- The deck spells the title "Ceaser Cipher" on p13.

### (c) Keyword cipher family
- Slide 28 (3a p28) lists the monoalphabetic variants, exactly: "Keyword cipher", "Keyword mixed Cipher", "Keyword Transposed Cipher", "Interrupted keyword Cipher". Each has a worked example on the page after it (p29, p31, p33, p35) and an unanswered exercise (p30, p32, p34, p36).
- Keyword cipher, p29, keyword WIRELESS: STUDENTS, ANSWER: PQTEJQP. VKOF, ANSWER: WORK (viewed).
  - Check (my arithmetic, not on the slide): using the printed alphabet row W I R E L S A B C D F G H J K M N O P Q T U V X Y Z, STUDENTS encrypts to PQTELJQP (8 letters). The printed answer PQTEJQP has 7 letters and omits the L (E maps to L). Possible typo on the slide.
  - p30 Exercise 1, keyword PROGRESS: CYBERSECURITY and CQ AKKG; answers blank.
- Keyword mixed, p31, keyword WIRELESS (grid columns W, I, R, E, L, S with the rows shown): TEAM, ANSWER: FYWK. SEUR, ANSWER: WORK (viewed).
  - p32 Exercise 1, keyword ASSESS: CRYPTOGRAPHY and LKJU; answers blank (viewed).
- Keyword transposed, p33, keyword WIRELESS: NETWORK, ANSWER: RIOACSF. GIMXSZOP, ANSWER: SECURITY (viewed).
  - p34 Exercise 1, keyword ASSETS: CISCO and IEGP; answers blank (viewed).
- Interrupted keyword, p35, keyword WIRELESS (grid has * cells): ORANGE, ANSWER: OFWDMI. DRKI, ANSWER: NICE (viewed).
  - p36 Exercise 1, keyword RESEARCH: UTAR and RUAT; answers blank (viewed).
- Monoalphabetic header on p27 is "MONOALPHABETIC CIPHERS".

### (d) Columnar transposition
- Pages: 3a 14 (worked example), 10 (block cipher example), 12 (keyed transposition form).
- p14 text: "Columnar Transposition Cipher. Keyword: GERMAN. Message: DEFEND THE EAST WALL." Grid is shown letter by letter; the ciphertext is "read off along the columns": NALEHWDTTEELDSXFEA.
- My check (not on slide): the grid rows are DEFEND / THEEAS / TWALLX (X padding), and reading columns in the alphabetical order of GERMAN (A, E, G, M, N, R) gives NAL EHW DTT EEL DSX FEA = the printed ciphertext.
- p12: "Keyed transposition, Keyless transposition (e.g. columnar, rail fence cipher)".

### (e) Playfair
- Pages: 3a 37 (header), 38-45, 46 (Example 2).
- p38 key square: keyword MONARCHY; "one letter of the alphabet (usually J) is omitted"; "If the plaintext contains J, then it is replaced by I."; grid rows: M O N A R / C H Y B D / E F G I K / L P Q S T / U V W X Z (from p44 image; the same grid is on p40-42).
- p39 digraph rule (text): "If there is repeated letters, put X" and "If there is an odd number of letters, a Z is added to the last letter." Plaintext split: 'in' 'st' 'ru' 'me' 'nt' 'sz' from "instruments".
- Rules, text and images:
  - p40 same column: take the letter below each (wrapping): me to cl (M to C, E to L).
  - p41 same row: take the letter to the right (wrapping): st to tl (S to T, T to L).
  - p42 rectangle: take horizontal opposite corners: nt to rq (N to R, T to Q).
  - The CT row on p40 shows 'xx' for in, st, ru, nt, sz and 'cl' for me. p41 fills st with 'tl' and p42 fills nt with 'rq'. The deck leaves in, ru and sz unfilled (p43 asks for them).
- p43 exercise: complete in, ru, sz; AT, TA, CK with MONARCHY. Answers blank in deck.
- p44 solved (viewed): INSTRUMENTS, MONARCHY, pairs IN GA, ST TL, RU MZ, ME CL, NT RQ, SZ TX; ciphertext GATLMZCLRQTX. Slide bullet on p44: "If a pair has the same letter, insert Z between them."
- p45 solved (viewed): ATTACK, MONARCHY, pairs AT RS, TA SR, CK DE; ciphertext RSSRDE. Same bullet: "insert Z between them."
- p46 Example 2 (viewed): TREE IS GREEN, keyword ENVIRONMENT. Pairs TR, EX, EI, SG, RE, EN; ciphertext BV VU NR QH EN NV. Matrix on slide: E N V I/J R / O M T A B / C D F G H / K L P Q S / U W X Y Z.
- Inconsistency: p39 text says repeated letters get X, while p44 and p45 say Z, and p46 uses X.

### (f) Hill and matrices
- Pages: 3a 2 (outline), 47 (header), 48, 49, 52 (outline).
- p48 (viewed), "Hill Cipher (matrix substitution cipher), Step-by-Step Example (1/2): Preparation":
  - Mapping A=0 ... Z=25.
  - Key K = [[3, 3], [2, 5]].
  - det(K) = (3x5) - (3x2) = 15 - 6 = 9; gcd(9, 26) = 1; "K is valid".
  - Message HELLO; H=7, E=4, L=11, L=11, O=14; split into HE, LL, OX (pad X).
- p49 (viewed), "Step-by-Step Example (2/2): Encryption", C = K x P mod 26:
  - HE (7,4): [33, 34] mod 26 = (7, 8) gives HI.
  - LL (11,11): [66, 77] mod 26 = (14, 25) gives OZ.
  - OX (14,23): [111, 143] mod 26 = (7, 13) gives HN.
  - Combined ciphertext: HIOZHN.
  - Key takeaway on slide: "The key matrix must be invertible modulo 26."

### (g) Modulo and inverse content
- 3b p11: "The RSA algorithm operates with arithmetic mod n".
- 3b p13: choose e co-prime to z: "We have several choices for e: 7, 11, 13, 17, 19 (we cannot use 5, because 20 is divisible by 5)".
- 3b p14: "(d * e) mod z = 1; (d * 7) mod 20 = 1; (3 * 7) mod 20 = 1; ... d * 7 = 21, and d = 3".
- 3b p22: a table of 3d mod 40 by d values, ending "(27 * 3) mod 40 = 1" and "81 mod 40 = 1".
- 3a p48 (Hill): "The matrix must be invertible (det(K) must have a modular inverse mod 26)"; "gcd(9, 26) = 1 -> K is valid".
- 3b p18, p20, p23, p24: repeated "mod 33", "mod 55" steps (see (h)).

### (h) RSA
- Pages: 3b 9-25.
- Background (p10-11): "By Ron Rivest, Adi Shamir & Leonard Adleman of MIT in 1977."; "RSA encryption algorithm incorporates results from number theory, combined with the difficulty of determining the prime factors of a target."
- Formulas (p12): Encryption "C = M^e mod n"; Decryption "M = C^d mod n"; "Only the receiver knows the value of d."
- Worked example on p13-20, the slides' own numbers:
  - p13: p = 3, q = 11; n = p x q = 33; z = (3-1)(11-1) = 20; e = 7; PU = {7, 33}.
  - p14: (d x 7) mod 20 = 1; d = 3; PR = {3, 33}.
  - p15: Browser has plaintext M = 14.
  - p17-18: C = 14^7 mod 33. Slide shows "147 mod 33" (superscript lost in text layer). Slide: 105413504 / 33 remainder 20; C = 20. (14^7 = 105413504 is my check.)
  - p19-20: M = C^d mod n = 20^3 mod 33 = 8000 mod 33 = 14 ("exactly the Plaintext message that the Browser started with").
- Worked example 1 (p21-24), from the slide:
  - Given p = 5, q = 11, e = 3, M = 4. Marks: (a) 4 marks, (b) 6 marks.
  - p22 (a): z = (5-1)(11-1) = 40; d = 27 ("(27 * 3) mod 40 = 1").
  - p23 (b): n = 55; C = 4^3 mod 55 = 64 mod 55 = 9.
  - p24 (b): M = 9^27 mod 55 = 4 (deck shows "927 mod 55" and the large integer 58149737003040059690390169, then "= 4").
- Example 2 (p25, viewed): p = 13, q = 23, e = 35, M = 2; asks (a) d [4 marks] and (b) verify M from C [6 marks]. No solution in the deck.
- Key-management note (3b p5): "Key distribution - how to have secure communications in general without having to trust a key distribution center (KDC)".
- Image: 3b p16 (viewed) "RSA: Generating a key pair", summary with the same numbers (p=3, q=11, n=33, z=20, e=7, d=3). It says "Small numbers are used only for learning. Real RSA uses much larger numbers and secure padding."

### (i) Digital signatures
- Pages: 3b 8 (encrypt with private key = authentication), 29-44; 3b 76 (protocol summary).
- p30: "A digital signature is a cryptographic technique that uses a sender's private key to sign data and the corresponding public key to verify its authenticity, integrity, and non-repudiation."
- p31: "The general way of computing digital signatures is with public key encryption."
- p32 mandatory: "Unforgeable", "Authentic"; desirable: "not alterable", "not reusable".
- p33: three features: Integrity (data is hashed), Authentication, Non-repudiation.
- p34: "2 main digital signature processes - Digital Signature Standard (DSS) and the RSA algorithm".
- p35: Bob signs with private key; Alice verifies with message, signature, Bob's public key.
- p36 RSA signature: "RSA encrypts only the hash value or message digest of the data ... with the private key ... The encrypted message digest is the digital signature."
- p37-40 DSA and ECDSA: DSA uses two keys (first from the hash, SHA-1 originally; second from private key); DSA "used only for digital signatures"; ECDSA "smaller key sizes".
- p41: properties: easy to sign, easy to verify, hard to forge.
- p42: applications: Communications (Emails/SMS), Online Banking, Software Updates, Bitcoin Transactions.
- p43: electronic signature vs digital signature comparison.
- p44: "Digest the message using a hash function; Sign the digested message".
- No numeric worked signature example in the deck.

### (j) Hash functions
- Pages: 3b 45-59.
- p46: "A hash function is a mathematical program that takes variable-length data and produces a Fixed-length value."
- p47: uses: "File integrity, database indexing, and security features."
- p48: "Each hashing algorithm computes the data differently."
- p49 (viewed, login diagram): USERNAME Henry, PASSWORD 12345678 -> Hashing Algorithm #MOD# -> hd23dd23, checked against stored hash in the Company User DB; "If the same they are let in."
- p50-51 properties: condense to fixed length; "Is one-way"; "hard to find two inputs with the same output"; "collision free".
- p52-53 HMAC: "a secret key is added"; HMAC-MD5 gives 128-bit; HMAC-SHA-1 gives 160-bit.
- p54-56: MD4, MD5, SHA; "MD5 ... 128-bit (16-byte) or 32-character hexadecimal hash value"; "SHA-1 ... 160-bit (20-byte) or 40-character"; sample hashes on p55: MD5 d41d8cd98f00b204e9800998ecf8427e and SHA-1 a9993e364706816aba3e25717850c26c9cd0d89d (the input is not stated in the deck).
- p57 table (viewed): MD5 max 2^64 bits, block 512, rounds 64, digest 128; SHA-1 2^64, 512, 80, 160; SHA-2-224 2^64, 512, 64, 224; SHA-2-256 2^64, 512, 64, 256; SHA-2-384 2^128, 1024, 80, 384; SHA-2-512 2^128, 1024, 80, 512; SHA-3-256 unlimited, 1088, 24, 256; SHA-3-512 unlimited, 576, 24, 512.
- p58: "Hash: One-way transformation. Salt: Random data added before hashing for more hardening."
- p59: CSPRNG; "To secure hashed passwords in the database: Generate a long random salt using a CSPRNG".

### (k) Authentication factors
- Pages: 3b 60-70. Factor wording in the deck: "The determination of identity, usually based on the combination of 3 factors" (p61). Captions: "Something you are", "Something you know", "Something you have" (p61).
- p61 examples: have = "smart card, token, ID radio key for storing secret keys"; know = "password, PIN, passphrase, secret question"; are = "fingerprint, retinal, voice, DNA, face". Image captions: "radio token with secret keys", "password=ucI", "mother=Jones", "pet=Caesar", "human with fingers and eyes" (text layer).
- p62-63 ownership: examples smart cards, hardware security tokens, OTP generators, USB security keys (FIDO), RFID cards; advantages "Difficult to duplicate"; limitation "Can be lost or stolen".
- p64-65 knowledge: "This is the most widely used authentication method."; examples passwords, PIN numbers, passphrases, secret questions; limitations "Vulnerable to brute-force, phishing, and credential-stuffing attacks".
- p66-70 inherence and biometrics: examples fingerprints, facial recognition, retina/iris, voice, DNA. Requirements (p68): universality, distinctiveness, permanence, collectability. p69 diagram (viewed): feature vector, reference vector, comparison algorithm, matches / doesn't match. p70 lists iris, fingerprints, DNA, "Blue-ink" signature, voice, face, hair; scores are not in the text layer and p70 was not opened.
- "authentication factor" (singular phrase) does not appear; the deck uses "factors".

### (l) Everything else in 3a/3b
- 3a p18: cryptanalysis and brute-force attacks (see (a)).
- 3a p50-51: symmetric key distribution (p50) and "PRIVATE KEY PROTECTION" rules 1-9 (p51) including "No copies of the key should be made if it is used for digital signatures" and "It should never be exposed in clear text".
- 3a p12: rail fence HELLO example (diagram): H, L, O on row 1; E, L on row 2; ciphertext HLOEL (viewed).
- 3b p4-6: asymmetric intro: "Asymmetric encryption also called public key cryptography (PKC)"; Diffie and Hellman 1976; "Both the public and private keys can be used for encryption and decryption."
- 3b p8: "ENCRYPTION WITH PUBLIC KEY (CONFIDENTIALITY)" and "ENCRYPTION WITH PRIVATE KEY (AUTHENTICATION)".
- 3b p72-78 cryptographic protocols: SSL/TLS (p73), HTTPS (p74), IPsec (p75), Digital Signatures protocol (p76), SSH (p77), importance list (p78).
- 3b p79: Q and A, not rendered.

## 5. Render list

Rendered and saved under `scratchpad/render/` (names as required):
- 3a: 3a-p03, 3a-p08, 3a-p12, 3a-p13, 3a-p19, 3a-p24, 3a-p26, 3a-p27, 3a-p37, 3a-p44, 3a-p45, 3a-p46, 3a-p47, 3a-p48, 3a-p49, 3a-p53 (.png).
- 3a extra renders for the keyword and Playfair answers: 3a-p21, p22, p23, p29-p36, p40-p42 (.png).
- 3b: 3b-p03, 3b-p07, 3b-p09, 3b-p16, 3b-p26, 3b-p27, 3b-p28, 3b-p29, 3b-p45, 3b-p49, 3b-p57, 3b-p60, 3b-p71 (.png), plus 3b-p25 (Example 2 check, not image-only).
- Not opened visually: 3a-p03, 3a-p24, 3a-p26, 3b-p03, 3b-p07, 3b-p09, 3b-p26, 3b-p27, 3b-p28, 3b-p29, 3b-p45, 3b-p60, 3b-p71, 3a-p21 (divider or blank slides, or not needed for the answers).

## 6. Summary of issues to check

1. 3b p18 writes "147 mod 33"; the superscript is lost in the text layer (14^7).
2. 3a p29 keyword answer PQTEJQP does not match the printed alphabet for STUDENTS (see (c)).
3. Repeated-letter rule: 3a p39 says X, 3a p44 and p45 say Z, 3a p46 uses X.
4. Exercises with blank answers in the deck: 3a p22, p23 (Caesar), p30 (keyword), p32 (keyword mixed), p34 (keyword transposed), p36 (interrupted keyword), p43 (Playfair). Their answers are not in the decks.
5. 3b p25 gives Example 2 values with no solution slide.
