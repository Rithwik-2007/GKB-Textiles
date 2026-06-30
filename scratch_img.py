import urllib.request

try:
    url = 'http://127.0.0.1:8080/css/style.css'
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        content = response.read().decode('utf-8')
    
    lines = content.split('\n')
    print("Fetched CSS successfully!")
    print("Lines 560-580:")
    for i in range(560, min(580, len(lines))):
        print(f"  [{i+1}] {lines[i]}")
except Exception as e:
    print("Error fetching CSS:", e)
