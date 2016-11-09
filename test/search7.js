import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Brooklyn, NYC';

const results = {
  "predictions": [
    {
      "description": "Brooklyn, NYC, NY, United States",
      "id": "ad98f8c32a1fb55f32ebe9dfc011bac77c382bdd",
      "matched_substrings": [
        {
          "length": 8,
          "offset": 0
        },
        {
          "length": 3,
          "offset": 10
        }
      ],
      "place_id": "ChIJCSF8lBZEwokRhngABHRcdoI",
      "reference": "CkQ4AAAAvj9o9TTM5wuxvl7guV72fWRZCgZf9V96vfpg4G1wt_J6wC30vxanIQo5LvfEDN-qxjhi7ga8FYVVCLehxHZ3zxIQImRLooB9bOkt3yE7y4bf8RoUlJwmRkzYunDVC93WVJinrpBx3Xo",
      "structured_formatting": {
        "main_text": "Brooklyn",
        "main_text_matched_substrings": [
          {
            "length": 8,
            "offset": 0
          }
        ],
        "secondary_text": "NYC, NY, United States",
        "secondary_text_matched_substrings": [
          {
            "length": 3,
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
          "value": "NYC"
        },
        {
          "offset": 15,
          "value": "NY"
        },
        {
          "offset": 19,
          "value": "United States"
        }
      ],
      "types": [
        "sublocality_level_1",
        "sublocality",
        "political",
        "geocode"
      ]
    }
  ],
  "status": "OK"
};

const expected = [
  {
    neighborhood: 'Brooklyn',
    city: 'NYC',
    county: null,
    state: 'NY',
    postal: null,
    country: 'United States'
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
