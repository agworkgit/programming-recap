import json
import sys
import requests

if len(sys.argv) != 2:
    sys.exit()

response = requests.get(
    "https://itunes.apple.com/search?entity=song&term=" + sys.argv[1]
)

# Pretty printed response
obj = response.json()
for result in obj["results"]:
    print(result["trackName"])
