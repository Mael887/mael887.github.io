# fix_encoding.py
# Fixes mojibake and encoding issues in index.html

path = r'c:\Users\MED_CHALLENGE\Desktop\proyecto\index.html'

print("Reading index.html as raw bytes...")
with open(path, 'rb') as f:
    content = f.read()

# Define byte replacements
replacements = [
    # Double carriage return normalization
    (b'\r\r\n', b'\r\n'),
    
    # 🟢 GREEN CIRCLE (ðŸŸ¢)
    (b'\xc3\xb0\xc5\xb8\xc5\xb8\xc2\xa2', '🟢'.encode('utf-8')),
    
    # 👋 WAVING HAND (ðŸ‘‹)
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x98\xe2\x80\xb9', '👋'.encode('utf-8')),
    
    # 🔥 FIRE (ðŸ”¥)
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x9d\xc2\xa5', '🔥'.encode('utf-8')),
    
    # 🎓 GRADUATION CAP (ðŸŽ“)
    (b'\xc3\xb0\xc5\xb8\xc5\xbd\xe2\x80\x9c', '🎓'.encode('utf-8')),
    
    # 📚 BOOKS (ðŸ“š)
    (b'\xc3\xb0\xc5\xb8\xe2\x80\x9c\xc5\xa1', '📚'.encode('utf-8')),
    
    # 🌐Ÿ (globe + stray Ÿ)
    (b'\xf0\x9f\x8c\x90\xc5\xb8', '🌐'.encode('utf-8')),
    
    # ✦ (BLACK FOUR POINTED STAR, mojibake ✕¦)
    (b'\xe2\x9c\x95\xc2\xa6', '✦'.encode('utf-8')),
    
    # ✨ (SPARKLES, mojibake ✕¨)
    (b'\xe2\x9c\x95\xc2\xa8', '✨'.encode('utf-8')),
    
    # 💰° -> 💰
    (b'\xf0\x9f\x92\xb0\xc2\xb0', '💰'.encode('utf-8')),
    
    # ↑ (UPWARDS ARROW, mojibake ←‘)
    (b'\xe2\x86\x90\xe2\x80\x98', '↑'.encode('utf-8')),
    
    # × (multiplication sign, mojibake Ã—)
    (b'\xc3\x83\xe2\x80\x94', '×'.encode('utf-8')),
    
    # – (en dash, mojibake â€“)
    (b'\xc3\xa2\xe2\x82\xac\xe2\x80\x9c', '–'.encode('utf-8')),
]

print("Applying replacements...")
original_len = len(content)
for bad, good in replacements:
    occurrences = content.count(bad)
    if occurrences > 0:
        content = content.replace(bad, good)
        print(f"  Replaced {occurrences} occurrence(s) of {repr(bad)} with {repr(good)}")

print("Saving fixed index.html...")
with open(path, 'wb') as f:
    f.write(content)

print(f"Done! File size changed from {original_len} to {len(content)} bytes.")
