import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Svoboda';

const results = {
  "predictions": [
    {
      "description": "Svoboda nad Úpou, Czech Republic",
      "id": "7075f15d65d2deaf99bbb25b7b529bf4aa827250",
      "matched_substrings": [
        {
          "length": 7,
          "offset": 0
        }
      ],
      "place_id": "ChIJx3QH5mntDkcRXVQssqh2eKE",
      "reference": "CkQ5AAAAyZb6BAmQKbu9dJWW9OIvQGUvPAp54h-Rr6kuXAi_xXIc_xOIgrFR8maCV295kEKCVLue8VqqEIG9xmu6DdKIwBIQZUZhUV9xjnkT512BTSD1HhoUmneIN1pOI9gbaS4LQn0yePUf2m8",
      "structured_formatting": {
        "main_text": "Svoboda nad Úpou",
        "main_text_matched_substrings": [
          {
            "length": 7,
            "offset": 0
          }
        ],
        "secondary_text": "Czech Republic"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Svoboda nad Úpou"
        },
        {
          "offset": 18,
          "value": "Czech Republic"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Svoboda, Zakarpats'ka oblast, Ukraine",
      "id": "57d7608fb3c0404bbb46e8f476443571d7e249d1",
      "matched_substrings": [
        {
          "length": 7,
          "offset": 0
        }
      ],
      "place_id": "ChIJV2la0cP7OEcR1lNTcYPXE58",
      "reference": "CkQ9AAAAStzhwaWOPgt66y-ZxEnzees4-lqQos6yBOd21e10MQsQb2gz3XLvqJqhyuSVYV6OKjLWhSz2T7eMzsXXHebupBIQKhHyWyYLVbbqrePrGZMXDhoU6QhQ2F7ztJPX91BFxwedgc5HeLs",
      "structured_formatting": {
        "main_text": "Svoboda",
        "main_text_matched_substrings": [
          {
            "length": 7,
            "offset": 0
          }
        ],
        "secondary_text": "Zakarpats'ka oblast, Ukraine"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Svoboda"
        },
        {
          "offset": 9,
          "value": "Zakarpats'ka oblast"
        },
        {
          "offset": 30,
          "value": "Ukraine"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Svoboda, Bulgaria",
      "id": "941014a6c52802b8dd75f267ea120990b8268143",
      "matched_substrings": [
        {
          "length": 7,
          "offset": 0
        }
      ],
      "place_id": "ChIJB9BenIz8qUARoAwPzRSgAAo",
      "reference": "CjQpAAAAmvXWnD23DJw3NAbmZROkzNAXLtY69Zt-QQC8J0vcTHBuM_uaqyAUtLMYpxk0ArcvEhAFulxkuYem7ZCK36WWYoAnGhRyvefXNfJSj_H5Nk6ZT9IPSFFzZQ",
      "structured_formatting": {
        "main_text": "Svoboda",
        "main_text_matched_substrings": [
          {
            "length": 7,
            "offset": 0
          }
        ],
        "secondary_text": "Bulgaria"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Svoboda"
        },
        {
          "offset": 9,
          "value": "Bulgaria"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Svoboda, Mykolaivs'ka oblast, Ukraine",
      "id": "e96f22a1153c1c308b0cb3bb8b340bdac9dcdd94",
      "matched_substrings": [
        {
          "length": 7,
          "offset": 0
        }
      ],
      "place_id": "ChIJezA631cJxUARaGAhv5lgzI0",
      "reference": "CkQ9AAAApYmqAPS0r6mTcBUtkv3Y7Ss8otchq3tOzbtGoqlbNVQWnvXwGtdmPUf1-KCCR3e9f053EZhm_L_9PnwZAqi4rhIQuQNi0Vd3hwsd9xHTcBHL5RoUr1Gf6yHxSj9WtCKZmhq93rH8rjc",
      "structured_formatting": {
        "main_text": "Svoboda",
        "main_text_matched_substrings": [
          {
            "length": 7,
            "offset": 0
          }
        ],
        "secondary_text": "Mykolaivs'ka oblast, Ukraine"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Svoboda"
        },
        {
          "offset": 9,
          "value": "Mykolaivs'ka oblast"
        },
        {
          "offset": 30,
          "value": "Ukraine"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Svoboda, Kyivs'ka oblast, Ukraine",
      "id": "d1ece8c7b5406a0c5a296683ca16a92df25a239e",
      "matched_substrings": [
        {
          "length": 7,
          "offset": 0
        }
      ],
      "place_id": "ChIJ_z0VF-Ou1UARiOZ-nhLI_wg",
      "reference": "CkQ5AAAA97OyITiSf6HpwSRa8Q9jZHWZ8XzsePWrCYs-1_yc_w5L4qNC2b8NZzLGixmHWiAq8X-xADD3M5eCXy3XBjzm_RIQ98j3FuSYhz2gmYr7nfndaBoUqeq_oxZPok2N9if8iGjdCi5ovRI",
      "structured_formatting": {
        "main_text": "Svoboda",
        "main_text_matched_substrings": [
          {
            "length": 7,
            "offset": 0
          }
        ],
        "secondary_text": "Kyivs'ka oblast, Ukraine"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Svoboda"
        },
        {
          "offset": 9,
          "value": "Kyivs'ka oblast"
        },
        {
          "offset": 26,
          "value": "Ukraine"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    }
  ],
  "status": "OK"
};

const expected = [
  {
    neighborhood: null,
    city: 'Svoboda nad Úpou',
    county: null,
    state: null,
    postal: null,
    country: 'Czech Republic',
  },
  {
    neighborhood: null,
    city: 'Svoboda',
    county: null,
    state: "Zakarpats'ka oblast",
    postal: null,
    country: 'Ukraine',
  },
  {
    neighborhood: null,
    city: 'Svoboda',
    county: null,
    state: null,
    postal: null,
    country: 'Bulgaria',
  },
  {
    neighborhood: null,
    city: 'Svoboda',
    county: null,
    state: "Mykolaivs'ka oblast",
    postal: null,
    country: 'Ukraine',
  },
  {
    neighborhood: null,
    city: 'Svoboda',
    county: null,
    state: "Kyivs'ka oblast",
    postal: null,
    country: 'Ukraine',
  },
];

results.predictions.forEach((result, idx) => {
  test(`${searchString}`, t => {
    const actualResult = parseResult(results.predictions[idx]);
    // console.log('actual result', actualResult);
    const expectedResult = expected[idx];
    // console.log('expectedResult', expectedResult);
    for (let k in expectedResult) {
      // console.log('k', k);
      const actualVal = actualResult[k];
      // console.log('actual', actual);
      const expectedVal = expectedResult[k];
      // console.log('expected', expected);
      t.is(actualVal, expectedVal);
    }
  });
});
