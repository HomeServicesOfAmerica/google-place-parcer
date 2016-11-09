import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Brooklyn';

const results = {
  "predictions": [
    {
      "description": "Brooklyn, MS, United States",
      "id": "4d6883ea8cd39d812c8e14a9497806882c23dc08",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        }
      ],
      "place_id": "ChIJ6xDC-7_xnIgROLrM0GPT6YY",
      "reference": "CkQzAAAAmKsjOfCKu2qSXmPE_0Cca0z0QrrzDT4TROaoS4lVQrVkp9wqgpyf8nxd5WW5iTVlkHnFaUsexKkzVYAYO3oUJBIQUGSo35xNZy_4Wv5bDgzD2BoUceQxEZFGzVqzeaOGr1aUn-6zU7o",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "MS, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn"
        },
        {
          "offset": 10,
          "value": "MS"
        },
        {
          "offset": 14,
          "value": "United States"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Brooklyn, NY, United States",
      "id": "ad98f8c32a1fb55f32ebe9dfc011bac77c382bdd",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        }
      ],
      "place_id": "ChIJCSF8lBZEwokRhngABHRcdoI",
      "reference": "CkQzAAAAOqw_XIlRaJdCrtArkqLVrT6wtRHvn33P_LLLqYCJvhTvi_F-0oxpciaoKIQQ4K0879st64ZcHpPZnF-A0gqCqhIQ9NsJ7yYUeS2XL9IAktXGwRoUarwcns98Y1Cl7y394mNXfG9v6xA",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "NY, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn"
        },
        {
          "offset": 10,
          "value": "NY"
        },
        {
          "offset": 14,
          "value": "United States"
        }
      ],
      "types": [
        "sublocality_level_1",
        "sublocality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Brooklyn Park, MN, United States",
      "id": "25d9ff5f0a1cebff579fbd4a7d448a660c44e940",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        }
      ],
      "place_id": "ChIJN_KXqwQ6s1IRiBVk5CprsuQ",
      "reference": "CkQ4AAAArZLwsXyopkPTv4dbmCf7Q3SZQlOBMderLdDI1-RyE72VvuRa7xWca6xgtp5Jpnh7U-ZvtqljNIpz8w1aXG3QzBIQiJ4Uz8z_pSIDmTeCFLWPKRoUPDH1SkTWtTZSdPVY5WjPXgCh-es",
      "structured_formatting": {
        "main_text": "Brooklyn Park",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "MN, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn Park"
        },
        {
          "offset": 15,
          "value": "MN"
        },
        {
          "offset": 19,
          "value": "United States"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Brooklyn Center, MN, United States",
      "id": "61e78d2abbed604e820f8e0a27de49dbad837987",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        }
      ],
      "place_id": "ChIJt8oT9_sws1IRWAjnn_n39ZQ",
      "reference": "CkQ6AAAA0bXnwpF7h94TxpPWms_pXBLL-I5ge_7rTdsG8Ej0FUXCWvVlCZQBU2bt8qGXqnbLfy37Y3etw9vX6JPlwK0kKxIQVeFAA5uyjzZ5Q3Zr3l-tixoUdPMTuEzBScOgufKqOxnWJpR0VwI",
      "structured_formatting": {
        "main_text": "Brooklyn Center",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "MN, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn Center"
        },
        {
          "offset": 17,
          "value": "MN"
        },
        {
          "offset": 21,
          "value": "United States"
        }
      ],
      "types": [
        "locality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Brooklyn, MI, United States",
      "id": "94bfa48e0252e7320649bba6c9d11a227c5486ab",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        }
      ],
      "place_id": "ChIJj5nmdsLfPIgRrYz81rLZVZ0",
      "reference": "CkQzAAAAyAfSQCAZWgKrMh7WnJvzbV4rfhfQEPBbt_s84hU-dQE25YV6ybonLgHmaJ3WGMe4so-YGMiH2vN7MM-IoaQCihIQjjF980dKW60X8POfHfKYWhoUkY2zwI3RbNHxRR-8CA3oAuHq_9w",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "MI, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn"
        },
        {
          "offset": 10,
          "value": "MI"
        },
        {
          "offset": 14,
          "value": "United States"
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
    city: 'Brooklyn',
    county: null,
    state: 'MS',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: 'Brooklyn',
    city: null,
    county: null,
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Brooklyn Park',
    county: null,
    state: 'MN',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Brooklyn Center',
    county: null,
    state: 'MN',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Brooklyn',
    county: null,
    state: 'MI',
    postal: null,
    country: 'United States'
  }
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
