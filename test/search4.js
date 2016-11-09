import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Singapore';

const results = {
  "predictions": [
    {
      "description": "Singapore",
      "id": "40c4b38e02b2cbbc038a8f25974c482dd9ee466f",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJdZOLiiMR2jERxPWrUs9peIg",
      "reference": "CjQhAAAAdw05EHNKl4zk1oGfjUY3RlB7yY-dUZL2D7zQOvXVERDYnmFMwcetjKBqci7hoqwoEhAXyLrnLwwD2QUFrbwJz4zkGhSx5DKyzxqrTEfiRmiyYuXZI7JBWg",
      "structured_formatting": {
        "main_text": "Singapore",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "Singapore"
        }
      ],
      "types": [
        "country",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Singapore Gardens and Green Fields, Bengaluru, Karnataka, India",
      "id": "0f05ffcbf0d33aa575cdf8df6cccf94470b35482",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJBW9xrfE_rjsRI4VRGrTGYMc",
      "reference": "CmRXAAAANg-wZ9rdhuCPChVn8jfktjyzD1hBftdEq1ONNdoFfs06y5RLj2BxHkbJk9y9-BLNuvAIRqnwxxbQ45ZTLSJdffI0YslSg-3Cjkr5EwbOFhQeXfU2LYQv2AjMy2bHkCAGEhDVG2tv-I5fxjFLtntkfKDJGhRw7eDGCPiuLjN99SzbSrPVKUhBfg",
      "structured_formatting": {
        "main_text": "Singapore Gardens and Green Fields",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "Bengaluru, Karnataka, India"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Singapore Gardens and Green Fields"
        },
        {
          "offset": 36,
          "value": "Bengaluru"
        },
        {
          "offset": 47,
          "value": "Karnataka"
        },
        {
          "offset": 58,
          "value": "India"
        }
      ],
      "types": [
        "sublocality_level_2",
        "sublocality",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Singapore, Limpopo, South Africa",
      "id": "54e27d431bbd47278c631ce70b07b5c0f302c5b0",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJJxomzLHmwB4RTtq1SUfQcj8",
      "reference": "CkQ4AAAAAZQqflLxN7Nhtel79PGEdwnVQyi_oOYwa2dYh4TaA1whLEh4m_tTM_BHupD_AG7EOv3kJ0CaLC1l0OGQD5C3fhIQdxfdRwM0CAgY-nGyC8GUHRoUIBCwDHmBf2Y6hNsVcvJxYsZodWs",
      "structured_formatting": {
        "main_text": "Singapore",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "Limpopo, South Africa"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Singapore"
        },
        {
          "offset": 11,
          "value": "Limpopo"
        },
        {
          "offset": 20,
          "value": "South Africa"
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
    city: null,
    county: null,
    state: null,
    postal: null,
    country: 'Singapore'
  },
  {
    neighborhood: 'Singapore Gardens and Green Fields',
    city: 'Bengaluru',
    county: null,
    state: 'Karnataka',
    postal: null,
    country: 'India'
  },
  {
    neighborhood: null,
    city: 'Singapore',
    county: null,
    state: 'Limpopo',
    postal: null,
    country: 'South Africa'
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
