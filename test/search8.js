import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Manhattan';

const results = {
  "predictions": [
    {
      "description": "Manhattan, New York, NY, United States",
      "id": "476d37be9512ae1c37df40b54d55c5a911a413f1",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJYeZuBI9YwokRjMDs_IEyCwo",
      "reference": "CkQ-AAAAkR0mM4ZGMJFFc41nV31AHGNxf5R3Bw7uJpPvD29MSx5m4wDRE59-m33dt4ayrR3VDguyvrtZ_eM7FjVIf3SK6xIQyFErmvInmLJpKPwOtRidVRoUDxD4fG3P2a9E7biTMw6u64Fn_T4",
      "structured_formatting": {
        "main_text": "Manhattan",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "New York, NY, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Manhattan"
        },
        {
          "offset": 11,
          "value": "New York"
        },
        {
          "offset": 21,
          "value": "NY"
        },
        {
          "offset": 25,
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
      "description": "Manhattan, KS, United States",
      "id": "1d7c6ef6fe8f9418b813b69c8cf246058548b998",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJLWPDRO-3vYcR78cSc0hdGKk",
      "reference": "CkQ0AAAA635cr82BXIPghehO9SC_YPZWPl7OXLLSKSqjdpjBxEuP5F3s1jhrcZlbFD_n63G4w7KNxnJWc0ZAsYdgUyEDtRIQGd-tuWQnMV8bkubeXdpN8xoUjD6oMFeeYQ9X3atWOIupdAuFPDY",
      "structured_formatting": {
        "main_text": "Manhattan",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "KS, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Manhattan"
        },
        {
          "offset": 11,
          "value": "KS"
        },
        {
          "offset": 15,
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
      "description": "Manhattan Beach, CA, United States",
      "id": "1213ffa8982342d62c811126297d496d7c75a218",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJL2Ow4sWzwoARIEUV9NRRAwc",
      "reference": "CkQ6AAAAl4w9zQgwNGiAS8ad2wJHmy63FZUI4DP6yKV4Dxl9tNsRtDdajtPtppl7W19bQBj3NF40atnuWhqZCSiwGLFscRIQksJp4lAHWtqrdk5Zrv614BoUyHoMuqQcIGBvW4nyDmowSKQtVts",
      "structured_formatting": {
        "main_text": "Manhattan Beach",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "CA, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Manhattan Beach"
        },
        {
          "offset": 17,
          "value": "CA"
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
      "description": "Manhattan, IL, United States",
      "id": "fea70738952c6666dcdf9ff245cf7f64c3577633",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJ6RQeH99vDogRotU5CRw5ScI",
      "reference": "CkQ0AAAA_OCUGOoGL9ceeIN6_h0MxCHEDTnsV9Ahh5mqfrleSDhycWaPv13ei56mPajlwj2g_uJfcsBbwyR-q9RwPGiMQBIQVGLSUi4MmXrGeChFqjN_WxoUlLTvGpz3uhFaxU9llcMAXSXyS9s",
      "structured_formatting": {
        "main_text": "Manhattan",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "IL, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Manhattan"
        },
        {
          "offset": 11,
          "value": "IL"
        },
        {
          "offset": 15,
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
      "description": "Manhattan, MT, United States",
      "id": "190cabc06d4d43ef98c2336847b0548ea9c44dad",
      "matched_substrings": [
        {
          "length": 9,
          "offset": 0
        }
      ],
      "place_id": "ChIJKcHCq7wxRVMRpXSG4QzbudE",
      "reference": "CkQ0AAAA9Jh4kdgTMG8RfsLWt4Nr8Ew42c-H_SS9buKCkXEkVHZMl35H2Sbp1NEKuYflGb3q8ZdeOiMI6Fm7V3ftzsXsbBIQV-_X7aLz34UxctpmsJ0PORoUMjZkK96O4_P3fH1Jdex-LCE45ls",
      "structured_formatting": {
        "main_text": "Manhattan",
        "main_text_matched_substrings": [
          {
            "length": 9,
            "offset": 0
          }
        ],
        "secondary_text": "MT, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Manhattan"
        },
        {
          "offset": 11,
          "value": "MT"
        },
        {
          "offset": 15,
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
    neighborhood: 'Manhattan',
    city: 'New York',
    county: null,
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Manhattan',
    county: null,
    state: 'KS',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Manhattan Beach',
    county: null,
    state: 'CA',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Manhattan',
    county: null,
    state: 'IL',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Manhattan',
    county: null,
    state: 'MT',
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
