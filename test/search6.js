import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Brooklyn, Kings County';

const results = {
  "predictions": [
    {
      "description": "Brooklyn, Kings, NY, United States",
      "id": "ad98f8c32a1fb55f32ebe9dfc011bac77c382bdd",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        },
        {
          "length": 5,
          "offset": 10
        }
      ],
      "place_id": "ChIJCSF8lBZEwokRhngABHRcdoI",
      "reference": "CkQ6AAAAY_3zqixKokZ6z2QEaKrTFPFdXKX8dfLnEbkXaXBIL2CFAyESfJcRlDiLC_MV1rWfdnWwvVcmhDw019lW_0G0yBIQDfLCAV1kr9pSTLT6iT_9uBoUBI975rQt1nFiP7Wi1BLV_9i2DQI",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "Kings, NY, United States",
        "secondary_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn"
        },
        {
          "offset": 10,
          "value": "Kings"
        },
        {
          "offset": 17,
          "value": "NY"
        },
        {
          "offset": 21,
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
      "description": "Brooklyn, Kings County, PE, Canada",
      "id": "1f93c4d99cc2de4b051bc1bba2bbff855ea9a400",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        },
        {
          "length": 12,
          "offset": 10
        }
      ],
      "place_id": "ChIJ_T6-FcZmXksRHCUCc9Xkn6Y",
      "reference": "CkQ6AAAAY_-HpqBZwOj-NVDwCpMF_iNax7jY1JZpaJ0QQhAeCJKp1byRE6T_QRXtXFFZtdCbZbV9OH3ZePFUDZAzObzNZhIQf-gGodaOvgVdNHhJaowh9BoUwlCmCh3pdZYI8BKUEYbTo851CsI",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "Kings County, PE, Canada",
        "secondary_text_matched_substrings": [
          {
            "length": 12,
            "offset": 0
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "Brooklyn"
        },
        {
          "offset": 10,
          "value": "Kings County"
        },
        {
          "offset": 24,
          "value": "PE"
        },
        {
          "offset": 28,
          "value": "Canada"
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
}

const expected = [
  {
    neighborhood: 'Brooklyn',
    city: null,
    county: 'Kings',
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Brooklyn',
    county: 'Kings County',
    state: 'PE',
    postal: null,
    country: 'Canada'
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
