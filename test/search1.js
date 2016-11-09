import test from 'ava';
import parseResult from '../src/index';

const searchString = 'austin, tx'

const results = {
  "predictions": [
    {
      "description": "Austin, TX, United States",
      "id": "c5153b48ff062dcbd5e6bbb77bcaa3afb7458147",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        },
        {
          "length": 2,
          "offset": 8
        }
      ],
      "place_id": "ChIJLwPMoJm1RIYRetVp1EtGm10",
      "reference": "CkQxAAAAaRg3bU956ZN3DKeY71zJALUoUPUHaIj0Ny-00dbyIyECf6H8NOW_-_cPQu6cNUsHRYj_hnEb51qliLWswxfavhIQs0gbvbtzdwZx0OK3kczY_xoU7wlJqcd_nNMwwIG8-qZuGQ-VsCk",
      "structured_formatting": {
        "main_text": "Austin",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "TX, United States",
        "secondary_text_matched_substrings": [
          {
            "length": 2,
            "offset": 0
          }
        ]
      },
      "terms": [
        {
          "offset": 0,
          "value": "Austin"
        },
        {
          "offset": 8,
          "value": "TX"
        },
        {
          "offset": 12,
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
    city: 'Austin',
    county: null,
    state: 'TX',
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
