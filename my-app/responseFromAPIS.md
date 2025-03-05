```js
// 📒📒📒 ============ RESPONSE FROM SNAPPING AT FIRST===========📒📒📒

        // 👇👇========FAILURE I WAS GETTING INITIALLY================👇👇
        // image properties: {"height": 4160, "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fbook-scanner-b4b8ce5c-fc5e-4554-b723-ef7cf433db11/Camera/87a4df6e-7163-48ff-abf5-35ca80c8bc99.jpg", "width": 3120}
        //  (NOBRIDGE) LOG  OCR Result: {"message": "Mimetype is not supported."}
        //  (NOBRIDGE) LOG  extracted text: No text found

        // 👇👇===================SUCCESSFULL===================================👇👇
        // OCR Result: {"all_text": "OSWORTH
        //   Tydineal
        //   creme
        //   Kétoconazole Sulfate de Néomycine Propionate de Clobetasole
        //   20", "annotations": ["OSWORTH", "Tydineal", "creme", "Kétoconazole", "Sulfate", "de", "Néomycine", "Propionate", "de", "Clobetasole", "20"], "lang": "fr"}
        // 📒📒📒 ================= RESPONSE FROM SNAPPING===========📒📒📒

```

```js
console.log("image properties:", newPhoto):
```
```bash
image properties: {"height": 4160, "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fbook-scanner-b4b8ce5c-fc5e-4554-b723-ef7cf433db11/Camera/a3c3a462-313b-409b-b555-b1e76dfc0d81.jpg", "width": 3120}
```


```js
console.log("OCR Result:", data):
```
```bash
 (NOBRIDGE) LOG  OCR Result: {"all_text": "SHOCK
THE BOOK
THAT MAKES
SENSE
OF THE
EXPLODING
EIGHTIES
THE
THIRD
WAVE
ALVIN TOFFLER", "annotations": ["SHOCK", "THE", "BOOK", "THAT", "MAKES", "SENSE", "OF", "THE", "EXPLODING", "EIGHTIES", "THE", "THIRD", "WAVE", "ALVIN", "TOFFLER"], "lang": "en"}
```

```js
console.log("Extracted text:", extractedText);
```
```bash
 (NOBRIDGE) LOG  Extracted text: SHOCK
THE BOOK
THAT MAKES
SENSE
OF THE
EXPLODING
EIGHTIES
THE
THIRD
WAVE
ALVIN TOFFLER
```

```js
console.log("googleBookAPIResponse:", googleBookAPIResponse);
```
```bash
 (NOBRIDGE) LOG  {"data": {"items": [[Object], [Object], [Object], [Object]], "kind": "books#volumes", "totalItems": 4}}
 (NOBRIDGE) LOG  
 
 googleBookAPIResponse: {"data": {"items": [[Object], [Object], [Object], [Object]], "kind": "books#volumes", "totalItems": 4}}
 (NOBRIDGE) LOG  
``` 

```js
console.log(
          "googleBookAPIResponse:",
          JSON.stringify(googleBookAPIResponse, null, 2)
        );
 ```       

```bash
 googleBookAPIResponse: {
  "data": {
    "kind": "books#volumes",
    "totalItems": 4,
    
    "items": [
    🚨🚨✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️First Book✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
      {
        "kind": "books#volume",
        "id": "11EiAQAAMAAJ",
        "etag": "JOxRuKV+4VQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/11EiAQAAMAAJ",
        "volumeInfo": {
          "title": "Boekblad",
          "publishedDate": "1983",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "MINN:31951001380004S"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 952,
          "printType": "BOOK",
          "categories": [
            "Netherlands"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.7.9.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=11EiAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=11EiAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "nl",
          "previewLink": "http://books.google.com/books?id=11EiAQAAMAAJ&q=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=11EiAQAAMAAJ&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Boekblad.html?hl=&id=11EiAQAAMAAJ"       
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=11EiAQAAMAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "... <b>SHOCK THE BOOK THAT MAKES SENSE OF THE EXPLODING EIGHTIES THE THIRD WAVE ALVIN TOFFLER</b> GAIL SHEEM FINDE THE STUNNING TRESTSELLER MOW A BREATHTAKING MOTION PICIL K TOY BESTSELLER PAVILIONS A NOVEL ABOUT BEING DIFFERENT AND LOVING IT&nbsp;..."
        }
      },

    🚨🚨✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️Second Book✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
      {
        "kind": "books#volume",
        "id": "B2y6AAAAIAAJ",
        "etag": "XqQFfpzUD+8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/B2y6AAAAIAAJ",
        "volumeInfo": {
          "title": "Future Shock",
          "authors": [
            "Alvin Toffler"
          ],
          "publisher": "Bantam",
          "publishedDate": "1970",
          "description": "\"The best study of our times that I know. . . . Of all the books that I have read in the last 20 years, it is by far the one that has taught me the most.\"--Le Figaro Future Shock is about the present. Future Shock is about what is happening today to people and groups who are overwhelmed by change. Change affects our products, communities, organizations--even our patterns of friendship and love. Future Shock vividly describes the emerging global civilization: tomorrow's family life, the rise of new businesses, subcultures, life-styles, and human relationships--all of them temporary. Future Shock illuminates the world of tomorrow by exploding countless clich s about today. Future Shock will intrigue, provoke, frighten, encourage, and, above all, change everyone who reads it. Praise for Future Shock \"Explosive . . . brilliantly formulated.\"--The Wall Street Journal \"A spectacular outcrop of a formidable, organized intellectual effort.\"--Manchester Guardian \"Revealing, exciting, encouraging, brilliant.\"--The Christian Science Monitor \"Immensely readable.\"--Newsweek \"Alvin Toffler has sent something of a shock-wave through Western society.\"--London Daily Express \"To the elite . . . who often get committed to age-old institutions or material goals alone, let Toffler's Future Shock be a lesson and a warning.\"--The Times of India",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "STANFORD:36105039142273"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 528,
          "printType": "BOOK",
          "categories": [
            "History"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=B2y6AAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=B2y6AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=B2y6AAAAIAAJ&q=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&cd=2&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=B2y6AAAAIAAJ&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Future_Shock.html?hl=&id=B2y6AAAAIAAJ"   
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=B2y6AAAAIAAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "&quot;The best study of our times that I know. . . . Of all the books that I have read in the last 20 years, it is by far the one that has taught me the most.&quot;--Le Figaro Future Shock is about the present."
        }
      },

    🚨🚨✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️Third Book✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
      {
        "kind": "books#volume",
        "id": "UmOTEAAAQBAJ",
        "etag": "AHGxB/20xmE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/UmOTEAAAQBAJ",
        "volumeInfo": {
          "title": "Powershift",
          "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century",
          "authors": [
            "Alvin Toffler"
          ],
          "publisher": "Bantam",
          "publishedDate": "1991-11-01",
          "description": "Alvin Toffler’s Future Shock and The Third Wave are among the most influential books of our time. Now, in Powershift, he brings to a climax the ideas set forth in his previous works to offer a stunning vision of the future that will change your life. In Powershift, Toffler argues that while headlines focus on shifts of power at the global level, equally significant shifts are taking place in the everyday world we all inhabit—the world of supermarkets and hospitals, banks and business offices, television and telephones, politics and personal life. The very nature of power is changing under our eyes. Powershift maps the “info-wars” of tomorrow and outlines a new system of wealth creation based on individualism, innovation, and information. As old political antagonisms fade, Toffler identifies where the next, far more important world division will arise—not between East and West or North and South, but between the “fast” and the “slow.” In Powershift, Alvin Toffler has formulated the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780553292152"
            },
            {
              "type": "ISBN_10",
              "identifier": "0553292153"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 0,
          "printType": "BOOK",
          "categories": [
            "Social Science"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=UmOTEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=UmOTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=UmOTEAAAQBAJ&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=UmOTEAAAQBAJ&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Powershift.html?hl=&id=UmOTEAAAQBAJ"     
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=UmOTEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Alvin Toffler’s Future Shock and The Third Wave are among the most influential books of our time."
        }
      },

    🚨🚨✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️Fourth Book✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️ 
      {
        "kind": "books#volume",
        "id": "aObzkaVp3qIC",
        "etag": "jARLrQuoYoo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/aObzkaVp3qIC",
        "volumeInfo": {
          "title": "Powershift",
          "subtitle": "Knowledge, Wealth, and Violence at the Edge of the 21st Century",
          "authors": [
            "Alvin Toffler"
          ],
          "publisher": "Bantam",
          "publishedDate": "1990",
          "description": "Describes how \"a new system of wealth creation\" is transforming \"power at every level of society.\"",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0553057766"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780553057768"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 616,
          "printType": "BOOK",
          "categories": [
            "Civilization, Modern"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.9.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=aObzkaVp3qIC&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=aObzkaVp3qIC&dq=SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESTHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Powershift.html?hl=&id=aObzkaVp3qIC"     
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=aObzkaVp3qIC&hl=&source=gbs_api",
          },
          },
          "webReaderLink": "http://play.google.com/books/reader?id=aObzkaVp3qIC&hl=&source=gbs_api",
          },
          "webReaderLink": "http://play.google.com/books/reader?id=aObzkaVp3qIC&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=aObzkaVp3qIC&hl=&source=gbs_api",
          "webReaderLink": "http://play.google.com/books/reader?id=aObzkaVp3qIC&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
          "quoteSharingAllowed": false
        },
        },
        "searchInfo": {
          "textSnippet": "Describes how &quot;a new system of wealth creation&quot; is transforming &quot;power         "searchInfo": {
          "textSnippet": "Describes how &quot;a new system of wealth creation&quot; is transforming &quot;power at every level of society.&quot;"
at every level of society.&quot;"
        }
      }
    ]
  }
}
```

```js
setBookData(googleBookAPIResponse?.data?.items || []);
```
```bash
 (NOBRIDGE) LOG  Stored book data: []
```
























































































# Results for DAVINCI CODE:


"imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=XJkqfFY6q38C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=XJkqfFY6q38C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=XJkqfFY6q38C&printsec=frontcover&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=XJkqfFY6q38C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Discussing_the_Da_Vinci_Code.html?hl=&id=XJkqfFY6q38C"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=XJkqfFY6q38C&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This outreach book is designed so readers can give multiple copies to friends, family, coworkers---anyone who may be struggling with the misconceptions fostered by The Da Vinci Code."
        }
      },
      {
        "kind": "books#volume",
        "id": "6-pmDwAAQBAJ",
        "etag": "0WWJmp94KC4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/6-pmDwAAQBAJ",
        "volumeInfo": {
          "title": "The Da Vinci Code (Republish)",
          "authors": [
            "Dan Brown"
          ],
          "publisher": "Bentang Pustaka",
          "publishedDate": "2018-08-02",
          "description": "Robert Langdon menerima telepon misterius yang mengundangnya ke Museum Louvre Paris pada tengah malam. Sesampai di sana, yang ditemui Langdon adalah mayat telanjang sang kurator museum dengan posisi dan tato aneh di perutnya. Langdon terkejut ketika menyadari bahwa teka-teki itu mengarah ke misteri terbesar sepanjang sejarah yang petunjuknya tersembunyi dalam karya-karya Da Vinci. Misteri tentang persaudaraan rahasia yang melibatkan nama-nama besar. Persaudaraan yang menjaga sebuah fakta sejarah yang sangat mengejutkan. Fakta yang bisa mengguncang keyakinan miliaran manusia di dunia. Dengan bantuan kriptolog Sophie Neveu, Langdon berusaha memecahkan misteri itu sambil berusaha menghindari kejaran polisi sepanjang Paris, London, dan kota lainnya. Langdon harus segera memecahkan misteri itu dan mengalahkan musuh tersembunyi yang menghadang di setiap langkah mereka dan mengancam nyawa. [Mizan, Mizan Publishing, Novel, Misteri, Thriller, Terjemahan, Indonesia]",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9786022911845"
            },
            {
              "type": "ISBN_10",
              "identifier": "6022911842"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 681,
          "printType": "BOOK",
          "categories": [
            "Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "2.3.4.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=6-pmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=6-pmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "id",
          "previewLink": "http://books.google.com/books?id=6-pmDwAAQBAJ&pg=PP1&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=6-pmDwAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Da_Vinci_Code_Republish.html?hl=&id=6-pmDwAAQBAJ"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Da_Vinci_Code_Republish-sample-epub.acsm?id=6-pmDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=6-pmDwAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Langdon harus segera memecahkan misteri itu dan mengalahkan musuh tersembunyi yang menghadang di setiap langkah mereka dan mengancam nyawa. [Mizan, Mizan Publishing, Novel, Misteri, Thriller, Terjemahan, Indonesia]"
        }
      },
      {
        "kind": "books#volume",
        "id": "WWizDQAAQBAJ",
        "etag": "BLPhvh+kCLQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WWizDQAAQBAJ",
        "volumeInfo": {
          "title": "Dan Brown’s Robert Langdon Series",
          "subtitle": "Ebook Bundle",
          "authors": [
            "Dan Brown"
          ],
          "publisher": "Random House",
          "publishedDate": "2017-01-12",
          "description": "For the first time, all four Robert Langdon thrillers are now available as one ebook bundle. If you haven't read a Dan Brown yet, now's the time. ANGELS AND DEMONS The countdown to oblivion has started - who will stop the clock? A famous scientist is found dead, a mysterious symbol burned into his skin. Many miles away in Rome, the world’s cardinals gather to elect a new pope. Little do they know that beneath their feet, a vast bomb has started to tick. Professor Robert Langdon must work out the link between these two seemingly unconnected events if he is stop the Vatican being blown sky high. THE DA VINCI CODE The race to uncover the oldest secret has begun . . . An eminent man is brutally murdered in the world’s most famous museum. Around his body are a ring of codes, hastily drawn in blood. He died to protect a long-kept secret which Professor Robert Langdon must now uncover. It will be a race against time to decipher this final message. Can he get there before the killers do? THE LOST SYMBOL To save a life, you must first crack the code . . . A mysterious invitation brings Professor Robert Langdon to Washington DC. But all is not as it seems in this powerful city. An ancient organization plans to reassert itself. And he is the only man standing in its way. If he is to prevent a terrible plan being executed, Langdon must decipher a series of increasingly bloody clues. But first he has to make sure he stays alive . . . INFERNO The world is in danger - who will save it? Robert Langdon wakes up in a Florence hospital with no clue how he got there. But another attack on his life makes it very clear – someone wants him dead. And fast. To survive, Langdon must work out who it is. And then he must answer the next question – why?",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781473543201"
            },
            {
              "type": "ISBN_10",
              "identifier": "1473543207"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 2476,
          "printType": "BOOK",
          "categories": [
            "Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.6.6.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=WWizDQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=WWizDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=WWizDQAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=WWizDQAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Dan_Brown_s_Robert_Langdon_Series.html?hl=&id=WWizDQAAQBAJ"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=WWizDQAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "For the first time, all four Robert Langdon thrillers are now available as one ebook bundle. If you haven&#39;t read a Dan Brown yet, now&#39;s the time. ANGELS AND DEMONS The countdown to oblivion has started - who will stop the clock?"
        }
      },
      {
        "kind": "books#volume",
        "id": "e94RxKSLGeoC",
        "etag": "Xh2DGoJ+2rA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/e94RxKSLGeoC",
        "volumeInfo": {
          "title": "The Keys to the Da Vinci Code",
          "subtitle": "The Hidden Lineage of Jesus and Other Mysteries",
          "authors": [
            "Mariano Fernández Urresti",
            "Lorenzo Fernández Bueno"
          ],
          "publisher": "Select Books (NY)",
          "publishedDate": "2006",
          "description": "Examines the background material for the secret history of early Christianity as presented in \"The Da Vinci Code,\" including the role of secret societies, the contents of hidden manuscripts, and the history of the Merovingian bloodline.",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "1590791010"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781590791011"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 220,
          "printType": "BOOK",
          "categories": [
            "Literary Criticism"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.4.3.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=e94RxKSLGeoC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=e94RxKSLGeoC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=e94RxKSLGeoC&q=MOTIONPICTURETHEDAVINCICODETHE&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=e94RxKSLGeoC&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Keys_to_the_Da_Vinci_Code.html?hl=&id=e94RxKSLGeoC"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=e94RxKSLGeoC&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Examines the background material for the secret history of early Christianity as presented in &quot;The Da Vinci Code,&quot; including the role of secret societies, the contents of hidden manuscripts, and the history of the Merovingian bloodline."
        }
      },
      {
        "kind": "books#volume",
        "id": "QHsF2134iY0C",
        "etag": "Vx+mA2WPbow",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/QHsF2134iY0C",
        "volumeInfo": {
          "title": "The Lost Symbol",
          "authors": [
            "Dan Brown"
          ],
          "publisher": "Random House",
          "publishedDate": "2010",
          "description": "Symbologist Robert Langdon returns in this new thriller follow-up to The Da Vinci Code.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780552161237"
            },
            {
              "type": "ISBN_10",
              "identifier": "0552161233"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 690,
          "printType": "BOOK",
          "categories": [
            "Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.97.6.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=QHsF2134iY0C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=QHsF2134iY0C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=QHsF2134iY0C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=QHsF2134iY0C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Lost_Symbol.html?hl=&id=QHsF2134iY0C"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=QHsF2134iY0C&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Symbologist Robert Langdon returns in this new thriller follow-up to The Da Vinci Code."
        }
      },
      {
        "kind": "books#volume",
        "id": "3rKPEAAAQBAJ",
        "etag": "zkRpAbfGNAM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/3rKPEAAAQBAJ",
        "volumeInfo": {
          "title": "The Da Vinci Code (The Young Adult Adaptation)",
          "authors": [
            "Dan Brown"
          ],
          "publisher": "National Geographic Books",
          "publishedDate": "2016-09-13",
          "description": "Dan Brown’s mega-bestseller is now available for a new generation of readers. This young adult adaptation is the perfect way to get ready for Origin, the latest novel featuring the character Robert Langdon. It will remind fans everywhere why the New York Times calls The Da Vinci Code “blockbuster perfection.” Includes over twenty color photos showing important locations, landmarks, and artwork, taking readers from Paris to London and beyond! The greatest conspiracy of the past two thousand years is about to unravel. Robert Langdon, professor of religious symbology at Harvard, is in Paris to give a lecture. At the reception that follows, he is scheduled to meet with a revered curator from the world-famous Louvre museum. But the curator never shows up, and later that night Langdon is awakened by authorities and told that the curator has been found dead. He is then taken to the Louvre—the scene of the crime—where he finds out that baffling clues have been left behind. Thus begins a race against time, as Robert Langdon becomes a suspect and, with the help of French cryptologist Sophie Neveu, must decipher a mystifying trail of clues that the two come to realize have been left specifically for them. If Robert and Sophie cannot solve the puzzle in time, an ancient truth could be lost forever—and they themselves might end up as collateral damage. Praise for the adult edition of The Da Vinci Code “WOW . . . Blockbuster perfection. An exhilaratingly brainy thriller. Not since the advent of Harry Potter has an author so flagrantly delighted in leading readers on a breathless chase and coaxing them through hoops.”—The New York Times “A new master of smart thrills. A pulse-quickening, brain-teasing adventure.”—People",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781524715823"
            },
            {
              "type": "ISBN_10",
              "identifier": "1524715824"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 0,
          "printType": "BOOK",
          "categories": [
            "Young Adult Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=3rKPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=3rKPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=3rKPEAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=8&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=3rKPEAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Da_Vinci_Code_The_Young_Adult_Adapta.html?hl=&id=3rKPEAAAQBAJ"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=3rKPEAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "If Robert and Sophie cannot solve the puzzle in time, an ancient truth could be lost forever—and they themselves might end up as collateral damage. Praise for the adult edition of The Da Vinci Code “WOW . . . Blockbuster perfection."
        }
      },
      {
        "kind": "books#volume",
        "id": "KOSmsuNbDJ4C",
        "etag": "cl48kuWT590",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/KOSmsuNbDJ4C",
        "volumeInfo": {
          "title": "Angels and Demons",
          "authors": [
            "Dan Brown"
          ],
          "publisher": "Random House",
          "publishedDate": "2013-03",
          "description": "Robert Langdon is called upon to identify a mysterious symbol seared onto a dead man's chest. It belongs to the Illuminati, a secret brotherhood with a vendetta against the Catholic Church.",       
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780552170000"
            },
            {
              "type": "ISBN_10",
              "identifier": "0552170003"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 642,
          "printType": "BOOK",
          "categories": [
            "College teachers"
          ],
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.7.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=KOSmsuNbDJ4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=KOSmsuNbDJ4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=KOSmsuNbDJ4C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=9&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=KOSmsuNbDJ4C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Angels_and_Demons.html?hl=&id=KOSmsuNbDJ4C"
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=KOSmsuNbDJ4C&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "Robert Langdon is called upon to identify a mysterious symbol seared onto a dead man&#39;s chest. It belongs to the Illuminati, a secret brotherhood with a vendetta against the Catholic Church."    
        }
      },
      {
        "kind": "books#volume",
        "id": "lJ3ABAAAQBAJ",
        "etag": "QIhS86TBx0E",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/lJ3ABAAAQBAJ",
        "volumeInfo": {
          "title": "In God's Name",
          "authors": [
            "David Yallop"
          ],
          "publisher": "Robinson",
          "publishedDate": "2012-08-23",
          "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei and the Mafia and the murder of the 'Pope's Banker' Roberto Calvi. When first published in 1984 In God's Name was denounced by the Vatican yet became an award-winning international bestseller. In this new edition, Yallop brings the story up to date and reveals new evidence that has been long buried concerning the truth behind the Vatican cover-up. This is a classic work of investigative writing whose revelations will continue to reverberate around the world.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781472105158"
            },
            {
              "type": "ISBN_10",
              "identifier": "147210515X"
            }
          ],
          "readingModes": {
            "text": true,
            "image": false
          },
          "pageCount": 394,
          "printType": "BOOK",
          "categories": [
            "True Crime"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "1.4.4.0.preview.2",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=lJ3ABAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=lJ3ABAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=lJ3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=lJ3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/In_God_s_Name.html?hl=&id=lJ3ABAAAQBAJ"  
        },
        "saleInfo": {
          "country": "NG",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "NG",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": true
          },
          "pdf": {
            "isAvailable": true
          },
          "webReaderLink": "http://play.google.com/books/reader?id=lJ3ABAAAQBAJ&hl=&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This is a classic work of investigative writing whose revelations will continue to reverberate around the world."
        }
      }
    ]
  }
}
 (NOBRIDGE) LOG  response from CameraScreen: [{"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=z6QXAAAACAAJ&hl=&source=gbs_api"}, "etag": "oA8jWX9XCy8", "id": "z6QXAAAACAAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Presents the complete screenplay for &quot;The Da Vinci Code&quot; as well as behind-the-scenes photographs and details from the production of the film."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/z6QXAAAACAAJ", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Da_Vinci_Code_Illustrated_Screenplay.html?hl=&id=z6QXAAAACAAJ", "categories": [Array], "contentVersion": "preview-1.0.0", "description": "Presents the complete screenplay for \"The Da Vinci Code\" as well as behind-the-scenes photographs and details from the production of the film.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=z6QXAAAACAAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 0, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=z6QXAAAACAAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=1&source=gbs_api", "printType": "BOOK", "publishedDate": "2006", "publisher": "Broadway", "readingModes": [Object], "subtitle": "Behind the Scenes of the Major Motion Picture", "title": "The Da Vinci Code Illustrated Screenplay"}}, {"accessInfo": {"accessViewStatus": "SAMPLE", "country": "NG", "embeddable": true, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY", "viewability": "PARTIAL", "webReaderLink": "http://play.google.com/books/reader?id=pwvyM66XoJ0C&hl=&source=gbs_api"}, "etag": "x5gkCtEE7Cc", "id": "pwvyM66XoJ0C", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Painstakingly researched and thoroughly documented, The Templar Revelation presents a secret history, preserved through the centuries but encoded in works of art and even in the great Gothic cathedrals of Europe, whose final chapter could ..."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/pwvyM66XoJ0C", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "averageRating": 3.5, "canonicalVolumeLink": "https://books.google.com/books/about/The_Templar_Revelation.html?hl=&id=pwvyM66XoJ0C", "categories": [Array], "contentVersion": "0.13.14.0.preview.2", "description": "The most closely guarded secret of the western world is about to be revealed—and you will never see Christianity in the same light again. In a remarkable achievement of historical detective work that is destined to become a classic, authors Lynn Picknett and Clive Prince delve into the mysterious world of the Freemasons, the Cathars, the Knights Templar, and the occult to discover the truth behind an underground religion with roots in the first century that survives even today. Chronicling their fascinating quest for truth through time and space, the authors reveal an astonishing new view of the real motives and character of the founder of Christianity, as well as the actual historical—and revelatory—roles of John the Baptist and Mary Magdalene. Painstakingly researched and thoroughly documented, The Templar Revelation presents a secret history, preserved through the centuries but encoded in works of art and even in the great Gothic cathedrals of Europe, whose final chapter could shatter the foundation of the Christian Church.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=pwvyM66XoJ0C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 534, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=pwvyM66XoJ0C&printsec=frontcover&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=2&source=gbs_api", "printType": "BOOK", "publishedDate": "2004-09-21", "publisher": "Simon and Schuster", "ratingsCount": 4, "readingModes": [Object], "subtitle": "Secret Guardians of the True Identity of Christ", "title": "The Templar Revelation"}}, {"accessInfo": {"accessViewStatus": "SAMPLE", "country": "NG", "embeddable": true, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "PARTIAL", "webReaderLink": "http://play.google.com/books/reader?id=XJkqfFY6q38C&hl=&source=gbs_api"}, "etag": "NzR4WeP5Yk0", "id": "XJkqfFY6q38C", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "This outreach book is designed so readers can give multiple copies to friends, family, coworkers---anyone who may be struggling with the misconceptions fostered by The Da Vinci Code."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/XJkqfFY6q38C", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/Discussing_the_Da_Vinci_Code.html?hl=&id=XJkqfFY6q38C", "categories": [Array], "contentVersion": "0.3.2.0.preview.0", "description": "Exploring the Da Vinci Code takes you on a fascinating journey to London, Paris, and California with Lee Strobel and Garry Poole as they investigate the claims made by Dan Brown in his novel, The Da Vinci Code. It provides quick, straightforward answers to the most troubling aspects of the popular novel and major motion picture, which is scheduled to release in theatres May 19, 2006. This outreach book is designed so readers can give multiple copies to friends, family, coworkers---anyone who may be struggling with the misconceptions fostered by The Da Vinci Code. Exploring the Da Vinci Code is not to be confused with Zondervan's DVD Group discussion resource, Discussing the Da Vinci Code. The latter links a DVD to a group discussion guide and equips group members to personally combat the misunderstandings that many readers of The Da Vinci Code have.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=XJkqfFY6q38C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 116, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=XJkqfFY6q38C&printsec=frontcover&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=3&source=gbs_api", "printType": "BOOK", "publishedDate": "2005-12", "publisher": "Zondervan", "readingModes": [Object], "subtitle": "Examining the Issues Raised by the Book & Movie", "title": "Discussing the Da Vinci Code"}}, {"accessInfo": {"accessViewStatus": "SAMPLE", "country": "NG", "embeddable": true, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "PARTIAL", "webReaderLink": "http://play.google.com/books/reader?id=6-pmDwAAQBAJ&hl=&source=gbs_api"}, "etag": "0WWJmp94KC4", "id": "6-pmDwAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Langdon harus segera memecahkan misteri itu dan mengalahkan musuh tersembunyi yang menghadang di setiap langkah mereka dan mengancam nyawa. [Mizan, Mizan Publishing, Novel, Misteri, Thriller, Terjemahan, Indonesia]"}, "selfLink": "https://www.googleapis.com/books/v1/volumes/6-pmDwAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Da_Vinci_Code_Republish.html?hl=&id=6-pmDwAAQBAJ", "categories": [Array], "contentVersion": "2.3.4.0.preview.2", "description": "Robert Langdon menerima telepon misterius yang mengundangnya ke Museum Louvre Paris pada tengah malam. Sesampai di sana, yang ditemui Langdon adalah mayat telanjang sang kurator museum dengan posisi dan tato aneh di perutnya. Langdon terkejut ketika menyadari bahwa teka-teki itu mengarah ke misteri terbesar sepanjang sejarah yang petunjuknya tersembunyi dalam karya-karya Da Vinci. Misteri tentang persaudaraan rahasia yang melibatkan nama-nama besar. Persaudaraan yang menjaga sebuah fakta sejarah yang sangat mengejutkan. Fakta yang bisa mengguncang keyakinan miliaran manusia di dunia. Dengan bantuan kriptolog Sophie Neveu, Langdon berusaha memecahkan misteri itu sambil berusaha menghindari kejaran polisi sepanjang Paris, London, dan kota lainnya. Langdon harus segera memecahkan misteri itu dan mengalahkan musuh tersembunyi yang menghadang di setiap langkah mereka dan mengancam nyawa. [Mizan, Mizan Publishing, Novel, Misteri, Thriller, Terjemahan, Indonesia]", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=6-pmDwAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "id", "maturityRating": "NOT_MATURE", "pageCount": 681, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=6-pmDwAAQBAJ&pg=PP1&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=4&source=gbs_api", "printType": "BOOK", "publishedDate": "2018-08-02", "publisher": "Bentang Pustaka", "readingModes": [Object], "title": "The Da Vinci Code (Republish)"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=WWizDQAAQBAJ&hl=&source=gbs_api"}, "etag": "BLPhvh+kCLQ", "id": "WWizDQAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "For the first time, all four Robert Langdon thrillers are now available as one ebook bundle. If you haven&#39;t read a Dan Brown yet, now&#39;s the time. ANGELS AND DEMONS The countdown to oblivion has started - who will stop the clock?"}, "selfLink": "https://www.googleapis.com/books/v1/volumes/WWizDQAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/Dan_Brown_s_Robert_Langdon_Series.html?hl=&id=WWizDQAAQBAJ", "categories": [Array], "contentVersion": "1.6.6.0.preview.2", "description": "For the first time, all four Robert Langdon thrillers are now available as one ebook bundle. If you haven't read a Dan Brown yet, now's the time. ANGELS AND DEMONS The countdown to oblivion has started - who will stop the clock? A famous scientist is found dead, a mysterious symbol burned into his skin. Many miles away in Rome, the world’s cardinals gather to elect a new pope. Little do they know that beneath their feet, a vast bomb has started to tick. Professor Robert Langdon must work out the link between these two seemingly unconnected events if he is stop the Vatican being blown sky high. THE DA VINCI CODE The race to uncover the oldest secret has begun . . . An eminent man is brutally murdered in the world’s most famous museum. Around his body are a ring of codes, hastily drawn in blood. He died to protect a long-kept secret which Professor Robert Langdon must now uncover. It will be a race against time to decipher this final message. Can he get there before the killers do? THE LOST SYMBOL To save a life, you must first crack the code . . . A mysterious invitation brings Professor Robert Langdon to Washington DC. But all is not as it seems in this powerful city. An ancient organization plans to reassert itself. And he is the only man standing in its way. If he is to prevent a terrible plan being executed, Langdon must decipher a series of increasingly bloody clues. But first he has to make sure he stays alive . . . INFERNO The world is in danger - who will save it? Robert Langdon wakes up in a Florence hospital with no clue how he got there. But another attack on his life makes it very clear – someone wants him dead. And fast. To survive, Langdon must work out who it is. And then he must answer the next question – why?", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=WWizDQAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 2476, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=WWizDQAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=5&source=gbs_api", "printType": "BOOK", "publishedDate": "2017-01-12", "publisher": "Random House", "readingModes": [Object], "subtitle": "Ebook Bundle", "title": "Dan Brown’s Robert Langdon Series"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=e94RxKSLGeoC&hl=&source=gbs_api"}, "etag": "Xh2DGoJ+2rA", "id": "e94RxKSLGeoC", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Examines the background material for the secret history of early Christianity as presented in &quot;The Da Vinci Code,&quot; including the role of secret societies, the contents of hidden manuscripts, and the history of the Merovingian bloodline."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/e94RxKSLGeoC", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Keys_to_the_Da_Vinci_Code.html?hl=&id=e94RxKSLGeoC", "categories": [Array], "contentVersion": "0.4.3.0.preview.0", "description": "Examines the background material for the secret history of early Christianity as presented in \"The Da Vinci Code,\" including the role of secret societies, the contents of hidden manuscripts, and the history of the Merovingian bloodline.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=e94RxKSLGeoC&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 220, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=e94RxKSLGeoC&q=MOTIONPICTURETHEDAVINCICODETHE&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=6&source=gbs_api", "printType": "BOOK", "publishedDate": "2006", "publisher": "Select Books (NY)", "readingModes": [Object], "subtitle": "The Hidden Lineage of Jesus and Other Mysteries", "title": "The Keys to the Da Vinci Code"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=QHsF2134iY0C&hl=&source=gbs_api"}, "etag": "Vx+mA2WPbow", "id": "QHsF2134iY0C", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Symbologist Robert Langdon returns in this new thriller follow-up to The Da Vinci Code."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/QHsF2134iY0C", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Lost_Symbol.html?hl=&id=QHsF2134iY0C", "categories": [Array], "contentVersion": "0.97.6.0.preview.0", "description": "Symbologist Robert Langdon returns in this new thriller follow-up to The Da Vinci Code.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=QHsF2134iY0C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 690, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=QHsF2134iY0C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=7&source=gbs_api", "printType": "BOOK", "publishedDate": "2010", "publisher": "Random House", "readingModes": [Object], "title": "The Lost Symbol"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=3rKPEAAAQBAJ&hl=&source=gbs_api"}, "etag": "zkRpAbfGNAM", "id": "3rKPEAAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "If Robert and Sophie cannot solve the puzzle in time, an ancient truth could be lost forever—and they themselves might end up as collateral damage. Praise for the adult edition of The Da Vinci Code “WOW . . . Blockbuster perfection."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/3rKPEAAAQBAJ", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Da_Vinci_Code_The_Young_Adult_Adapta.html?hl=&id=3rKPEAAAQBAJ", "categories": [Array], "contentVersion": "preview-1.0.0", "description": "Dan Brown’s mega-bestseller is now available for a new generation of readers. This young adult adaptation is the perfect way to get ready for Origin, the latest novel featuring the character Robert Langdon. It will remind fans everywhere why the New York Times calls The Da Vinci Code “blockbuster perfection.” Includes over twenty color photos showing important locations, landmarks, and artwork, taking readers from Paris to London and beyond! The greatest conspiracy of the past two thousand years is about to unravel. Robert Langdon, professor of religious symbology at Harvard, is in Paris to give a lecture. At the reception that follows, he is scheduled to meet with a revered curator from the world-famous Louvre museum. But the curator never shows up, and later that night Langdon is awakened by authorities and told that the curator has been found dead. He is then taken to the Louvre—the scene of the crime—where he finds out that baffling clues have been left behind. Thus begins a race against time, as Robert Langdon becomes a suspect and, with the help of French cryptologist Sophie Neveu, must decipher a mystifying trail of clues that the two come to realize have been left specifically for them. If Robert and Sophie cannot solve the puzzle in time, an ancient truth could be lost forever—and they themselves might end up as collateral damage. Praise for the adult edition of The Da Vinci Code “WOW . . . Blockbuster perfection. An exhilaratingly brainy thriller. Not since the advent of Harry Potter has an author so flagrantly delighted in leading readers on a breathless chase and coaxing them through hoops.”—The New York Times “A new master of smart thrills. A pulse-quickening, brain-teasing adventure.”—People", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=3rKPEAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 0, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=3rKPEAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=8&source=gbs_api", "printType": "BOOK", "publishedDate": "2016-09-13", "publisher": "National Geographic Books", "readingModes": [Object], "title": "The Da Vinci Code (The Young Adult Adaptation)"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=KOSmsuNbDJ4C&hl=&source=gbs_api"}, "etag": "cl48kuWT590", "id": "KOSmsuNbDJ4C", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Robert Langdon is called upon to identify a mysterious symbol seared onto a dead man&#39;s chest. It belongs to the Illuminati, a secret brotherhood with a vendetta against the Catholic Church."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/KOSmsuNbDJ4C", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "averageRating": 5, "canonicalVolumeLink": "https://books.google.com/books/about/Angels_and_Demons.html?hl=&id=KOSmsuNbDJ4C", "categories": [Array], "contentVersion": "0.7.0.0.preview.0", "description": "Robert Langdon is called upon to identify a mysterious symbol seared onto a dead man's chest. It belongs to the Illuminati, a secret brotherhood with a vendetta against the Catholic Church.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=KOSmsuNbDJ4C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 642, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=KOSmsuNbDJ4C&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=9&source=gbs_api", "printType": "BOOK", "publishedDate": "2013-03", "publisher": "Random House", "ratingsCount": 1, "readingModes": [Object], "title": "Angels and Demons"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=lJ3ABAAAQBAJ&hl=&source=gbs_api"}, "etag": "QIhS86TBx0E", "id": "lJ3ABAAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "This is a classic work of investigative writing whose revelations will continue to reverberate around the world."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/lJ3ABAAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/In_God_s_Name.html?hl=&id=lJ3ABAAAQBAJ", "categories": [Array], "contentVersion": "1.4.4.0.preview.2", "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei ank of investigative writing whose revelations will continue to reverberate around the world."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/lJ3ABAAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/In_God_s_Name.html?hl=&id=lJ3ABAAAQBAJ", "categories": [Array], "contentVersion": "1.4.4.0.preview.2", "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei ans://www.googleapis.com/books/v1/volumes/lJ3ABAAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/In_God_s_Name.html?hl=&id=lJ3ABAAAQBAJ", "categories": [Array], "contentVersion": "1.4.4.0.preview.2", "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei any], "canonicalVolumeLink": "https://books.google.com/books/about/In_God_s_Name.html?hl=&id=lJ3ABAAAQBAJ", "categories": [Array], "contentVersion": "1.4.4.0.preview.2", "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei anories": [Array], "contentVersion": "1.4.4.0.preview.2", "description": "Only thirty-three days after his election, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei ann, Pope John Paul I,Albino Luciani, died in strange circumstances. Almost immediately rumours of a cover-up began to circulate around the Vatican. In his researches David Yallop uncovered an extraordinary story: behind the Pope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei anope's death lay a dark and complex web of corruption within the Church that involved the Freemasons, Opus Dei and the Mafia and the murder of the 'Pope's Banker' Roberto Calvi. When first published in 1984 In God's Name was denounced by the Vatican yet became an award-winning international bestseller. In this new edition, Yallop bringd the Mafia and the murder of the 'Pope's Banker' Roberto Calvi. When first published in 1984 In God's Name was denounced by the Vatican yet became an award-winning international bestseller. In this new edition, Yallop bringdenounced by the Vatican yet became an award-winning international bestseller. In this new edition, Yallop brings the story up to date and reveals new evidence that has been long buried concerning the truth behind the Vatican cover-up. This is a classic work of investigative writing whose revelations will continue to reverberate around the world.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books the story up to date and reveals new evidence that has been long buried concerning the truth behind the Vatican cover-up. This is a classic work of investigative writing whose revelations will continue to reverberate around the world.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/bookn cover-up. This is a classic work of investigative writing whose revelations will continue to reverberate around the world.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=lJ3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOs?id=lJ3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 394, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=lT_MATURE", "pageCount": 394, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=lJ3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=10&source=gbs_api", "printType": "BOOK", "publishedDate": "J3ABAAAQBAJ&dq=MOTIONPICTURETHEDAVINCICODETHE&hl=&cd=10&source=gbs_api", "printType": "BOOK", "publishedDate": "2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
It is disabled in production builds, so you don't need to worry about that.
 (NOBRIDGE) LOG  books saved to storage





2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
It is disabled in production builds, so you don't need to worry about that.
 (NOBRIDGE) LOG  books saved to storage

2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
It is disabled in production builds, so you don't need to worry about that.
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a 2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a 2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 322012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
It is disabled in production builds, so you don't need to worry about that.
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a 2012-08-23", "publisher": "Robinson", "readingModes": [Object], "title": "In God's Name"}}]
 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32 (NOBRIDGE) WARN  SerializableStateInvariantMiddleware took 35ms, which is more than the warning threshold of 32ms.
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.       
It is disabled in production builds, so you don't need to worry about that.
 (NOBRIDGE) LOG  books saved to storage





```bash
OCR Result: {"all_text": "THE BRILLIANT BESTSELLER BY THE AUTHOR OF
FUTURE SHOCK
THE BOOK
THAT MAKES
SENSE
OF THE
EXPLODING
EIGHTIES
THE
THIRD
WAVE
ALVIN TOFFLER", "annotations": ["THE", "BRILLIANT", "BESTSELLER", "BY", "THE", "AUTHOR", "OF", "FUTURE", "SHOCK", "THE", "BOOK", "THAT", "MAKES", "SENSE", "OF", "THE", "EXPLODING", "EIGHTIES", "THE", "THIRD", "WAVE", "ALVIN", "TOFFLER"], "lang": "en"} Remaining Requests: 75
 (NOBRIDGE) LOG  Extracted text: undefined
 ```






 # LAST SUCCESSFUL ATTEMPT:
 ```JS
console.log("Extracted text:", extractedText);
const response =await getBook(extractedText).unwrap();
```
# TERMINAL RESPONSE:
```bash
 OCR Result: {"all_text": "THE BRILLIANT BESTSELLER BY THE AUTHOR OF
FUTURE SHOCK
THE BOOK
THAT MAKES
SENSE
OF THE
EXPLODING
EIGHTIES
HE
THIRD
WAVE
ALVIN TOFFLER", "annotations": ["THE", "BRILLIANT", "BESTSELLER", "BY", "THE", "AUTHOR", "OF", "FUTURE", "SHOCK", "THE", "BOOK", "THAT", "MAKES", "SENSE", "OF", "THE", "EXPLODING", "EIGHTIES", "HE", "THIRD", "WAVE", "ALVIN", "TOFFLER"], "lang": "en"} Remaining Requests: 73
 (NOBRIDGE) LOG  Extracted text: THE BRILLIANT BESTSELLER BY THE AUTHOR OF
FUTURE SHOCK
THE BOOK
THAT MAKES
SENSE
OF THE
EXPLODING
EIGHTIES
HE
THIRD
WAVE
ALVIN TOFFLER
 (NOBRIDGE) LOG  customBaseQuery: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2N2QxOTJmMGRlNDdkNTU1YTAwNDYiLCJ1c2VybmFtZSI6InZva2UiLCJpYXQiOjE3NDExMzY1ODEsImV4cCI6MTc0MTE0MDE4MX0.GsvxDp65jv0jn-lN19O18Fe2sEY87Wf4goHP8lsM-VY     
 (NOBRIDGE) LOG  googleBookAPIResponse: {"data": {"items": [[Object], [Object], [Object]], "kind": "books#volumes", "totalItems": 3}}
 (NOBRIDGE) LOG  response from CameraScreen: [{"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=srVWAAAAYAAJ&hl=&source=gbs_api"}, "etag": "YwswhUqaE6I", "id": "srVWAAAAYAAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Probes the future of various cultural institutions ranging from family to politics."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/srVWAAAAYAAJ", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/Future_Shock.html?hl=&id=srVWAAAAYAAJ", "categories": [Array], "contentVersion": "0.3.1.0.preview.0", "description": "Probes the future of various cultural institutions ranging from family to politics.", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=srVWAAAAYAAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 578, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=srVWAAAAYAAJ&q=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&cd=1&source=gbs_api", "printType": "BOOK", "publishedDate": "1971", "readingModes": [Object], "title": "Future Shock"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=yGKTEAAAQBAJ&hl=&source=gbs_api"}, "etag": "Kb5aX8RvYow", "id": "yGKTEAAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Praise for The Third Wave “Magnificent . . . an astonishing array of information.”—The Washington Post “Imperishably fresh.”—Business Week “Will mesmerize readers, and rightly so.”—Vogue “Alvin Toffler . . . has written ..."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/yGKTEAAAQBAJ", "volumeInfo": {"allowAnonLogging": false, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/The_Third_Wave.html?hl=&id=yGKTEAAAQBAJ", "categories": [Array], "contentVersion": "1.2.2.0.preview.0", "description": "From the author of Future Shock, a striking way out of today’s despair . . . a bracing, optimistic look at our new potentials. The Third Wave makes startling sense of the violent changes now battering our world. Its sweeping synthesis casts fresh light on our new forms of marriage and family, on today's dramatic changes in business and economics. It explains the role of cults, the new definitions of work, play, love, and success. It points toward new forms of twenty-first-century democracy. Praise for The Third Wave “Magnificent . . . an astonishing array of information.”—The Washington Post “Imperishably fresh.”—Business Week “Will mesmerize readers, and rightly so.”—Vogue “Alvin Toffler . . . has written another blockbuster . . . a powerful book.”—The Guardian “Fresh ideas, clearly explained. . . . Toffler has proven again that he is a master.”—United Press International “Toffler has imagination and an ability to think of various future possibilities by transcending prevailing values, assumptions and myths.”—Associated Press “Once you have walked into his version of the future, you may decide never again to whitewash some of the built-in frailties of the real present.”—Financial Post “Rich, stimulating and basically optimistic . . . will unquestionably aid many to a greater understanding of [today’s] puzzling social changes.”—The Globe & Mail “A detailed breathtakingly bold projection of the social changes required if we are to survive. . . . Toffler’s vision of a democratic, self-sustaining utopia is a brave alternative to recent grim warnings.”—Cosmopolitan", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=yGKTEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 558, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=yGKTEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&cd=2&source=gbs_api", "printType": "BOOK", "publishedDate": "1984-05-01", "publisher": "Bantam", "readingModes": [Object], "subtitle": "The Classic Study of Tomorrow", "title": "The Third Wave"}}, {"accessInfo": {"accessViewStatus": "NONE", "country": "NG", "embeddable": false, "epub": [Object], "pdf": [Object], "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "NO_PAGES", "webReaderLink": "http://play.google.com/books/reader?id=gEBQEAAAQBAJ&hl=&source=gbs_api"}, "etag": "cuEix50Z7Z8", "id": "gEBQEAAAQBAJ", "kind": "books#volume", "saleInfo": {"country": "NG", "isEbook": false, "saleability": "NOT_FOR_SALE"}, "searchInfo": {"textSnippet": "Alvin Toffler’s Future Shock and The Third Wave are among the most influential books of our time."}, "selfLink": "https://www.googleapis.com/books/v1/volumes/gEBQEAAAQBAJ", "volumeInfo": {"allowAnonLogging": true, "authors": [Array], "canonicalVolumeLink": "https://books.google.com/books/about/Powershift.html?hl=&id=gEBQEAAAQBAJ", "categories": [Array], "contentVersion": "1.3.3.0.preview.2", "description": "Alvin Toffler’s Future Shock and The Third Wave are among the most influential books of our time. Now, in Powershift, he brings to a climax the ideas set forth in his previous works to offer a stunning vision of the future that will change your life. In Powershift, Toffler argues that while headlines focus on shifts of power at the global level, equally significant shifts are taking place in the everyday world we all inhabit—the world of supermarkets and hospitals, banks and business offices, television and telephones, politics and personal life. The very nature of power is changing under our eyes. Powershift maps the “info-wars” of tomorrow and outlines a new system of wealth creation based on individualism, innovation, and information. As old political antagonisms fade, Toffler identifies where the next, far more important world division will arise—not between East and West or North and South, but between the “fast” and the “slow.” In Powershift, Alvin Toffler has formulated the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+ “info-wars” of tomorrow and outlines a new system of wealth creation based on individualism, innovation, and information. As old political antagonisms fade, Toffler identifies where the next, far more important world division will arise—not between East and West or North and South, but between the “fast” and the “slow.” In Powershift, Alvin Toffler has formulated the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+. As old political antagonisms fade, Toffler identifies where the next, far more important world division will arise—not between East and West or North and South, but between the “fast” and the “slow.” In Powershift, Alvin Toffler has formulated the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+between East and West or North and South, but between the “fast” and the “slow.” In Powershift, Alvin Toffler has formulated the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+ted the deepest, most comprehensive synthesis yet written about the civilization of the twenty-first century. It is one of the most important books you will ever read. Praise for Powershift “[A] sweeping synthesis . . . by placing the accelerated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+ated changes of our current information age in the larger perspective of history, Mr. Toffler helps us to face the future with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+ with less wariness and more understanding.”—The New York Times Book Review “An insightful guide to a bewildering present and a frightening future . . . thought-provoking on every page.”—Newsday", "imageLinks": [Object], "industryIdentifiers": [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api", "language": "en", "matur: [Array], "infoLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 787, "panelizationSummary": [Object], "previewLink": "http://books.google.com/bookSHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 787, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHityRating": "NOT_MATURE", "pageCount": 787, "panelizationSummary": [Object], "previewLink": "http://books.google.com/books?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&cd=3&source=gbs_api", "printType": "BOOK", "publishedDate": "2022-01-04", "publisher": "Bantas?id=gEBQEAAAQBAJ&dq=THE+BRILLIANT+BESTSELLER+BY+THE+AUTHOR+OFFUTURE+SHOCKTHE+BOOKTHAT+MAKESSENSEOF+THEEXPLODINGEIGHTIESHETHIRDWAVEALVIN+TOFFLER&hl=&cd=3&source=gbs_api", "printType": "BOOK", "publishedDate": "2022-01-04", "publisher": "BantaETHIRDWAVEALVIN+TOFFLER&hl=&cd=3&source=gbs_api", "printType": "BOOK", "publishedDate": "2022-01-04", "publisher": "Bantam", "readingModes": [Object], "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century", "title": "Powerm", "readingModes": [Object], "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century", "title": "Powerm", "readingModes": [Object], "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century", "title": "Powerm", "readingModes": [Object], "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century", "title": "Powershift"}}]
m", "readingModes": [Object], "subtitle": "Knowledge, Wealth, and Power at the Edge of the 21st Century", "title": "Powershift"}}]
 (NOBRIDGE) LOG  customBaseQuery: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2N2QxOTJmMGRlNDdkNTU1YTAwNDY (NOBRIDGE) LOG  customBaseQuery: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2N2QxOTJmMGRlNDdkNTU1YTAwNDYiLCJ1c2VybmFtZSI6InZva2UiLCJpYXQiOjE3NDExMzY1ODEsImV4cCI6MTc0MTE0MDE4MX0.GsvxDp65jv0jn-lN19O18Fe2sEY87Wf4goHP8lsM-VY     
 (NOBRIDGE) LOG  customBaseQuery: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2N2QxOTJmMGRlNDdkNTU1YTAwNDYiLCJ1c2VybmFtZSI6InZva2UiLCJpYXQiOjE3NDExMzY1ODEsImV4cCI6MTc0MTE0MDE4MX0.GsvxDp65jv0jn-lN19O18Fe2sEY87Wf4goHP8lsM-VY     
 (NOBRIDGE) LOG  books saved to storage
 (NOBRIDGE) LOG  customBaseQuery: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2M2N2QxOTJmMGRlNDdkNTU1YTAwNDYiLCJ1c2VybmFtZSI6InZva2UiLCJpYXQiOjE3NDExMzY1ODEsImV4cCI6MTc0MTE0MDE4MX0.GsvxDp65jv0jn-lN19O18Fe2sEY87Wf4goHP8lsM-VY     
```

