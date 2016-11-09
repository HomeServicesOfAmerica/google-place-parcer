import test from 'ava';
import parseResult from '../src/index';

const searchString = 'Queens';

const results = {
  "predictions": [
    {
      "description": "Queens, NY, United States",
      "id": "67a1606c19107915729600db855d60e0d6045caf",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        }
      ],
      "place_id": "ChIJK1kKR2lDwokRBXtcbIvRCUE",
      "reference": "CkQxAAAAn9cXcYHOPOvZgDCPgUayDAasoU-eGzbSG_EakBdGmCUP7BRFa6M2jn_WfHngWFXHmLSAp1Icx2fYp3-BO0b7KxIQDrur-Ik7CzvBDXNdhIQhWxoU6rZp80xgrbglj5rUPyW8yqYhts4",
      "structured_formatting": {
        "main_text": "Queens",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "NY, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Queens"
        },
        {
          "offset": 8,
          "value": "NY"
        },
        {
          "offset": 12,
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
      "description": "Queens County, NY, United States",
      "id": "f8e1883bcae2248102f34d976fd88e7bd5369220",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        }
      ],
      "place_id": "ChIJgav5pFbxwokRno6Tc5x2GL8",
      "reference": "CkQ4AAAAOpdLkCtMwHVmdBZKotdE4eRj_7uUuKaSRFHuXvOt4uke8SRyuZuqKw_zNC67-jUMx4JyaJIkFG91O_xruVm18hIQRDRQ18wEBn_S5w51O59jkRoUNByIyBNyw8KXjp5C5AI7bo4Jj5A",
      "structured_formatting": {
        "main_text": "Queens County",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "NY, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Queens County"
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
        "administrative_area_level_2",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Queensland, Australia",
      "id": "255df6de3c60bdc715b7f15ac8469fab7b7529fb",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        }
      ],
      "place_id": "ChIJ_dxieiTf1GsRmb4SdiLQ8vU",
      "reference": "CjQtAAAA1hppjImkA28d2thuDvX3PDPkzUvx1KuvyjwvpdhGkcykwzLlNizWRPAj4-w3NorWEhANW-MBafJCq0DR_BWAnloJGhQZvo_xA2RYpUKDrZHcNzyXLdQx2Q",
      "structured_formatting": {
        "main_text": "Queensland",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "Australia"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Queensland"
        },
        {
          "offset": 12,
          "value": "Australia"
        }
      ],
      "types": [
        "administrative_area_level_1",
        "political",
        "geocode"
      ]
    },
    {
      "description": "Queensbury, NY, United States",
      "id": "f600cb0bad5e1c2b586d40e9f9f015d27ef3bf5b",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        }
      ],
      "place_id": "ChIJo3dFfovP34kR4egRtNPl2w8",
      "reference": "CkQ1AAAAd5O0KcRTOu74PCMmnoYqDEnfEJ8VY8KR8rZ6AaEUI22HLXEsyr7RakZaT93yXC5BujqgP8kXtevg6u6TUKqbGRIQVwJ6TEh2-OnjDMQgzkBHNxoU4ib1KvSM4hdK0mFk8v5uEdy6leE",
      "structured_formatting": {
        "main_text": "Queensbury",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "NY, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Queensbury"
        },
        {
          "offset": 12,
          "value": "NY"
        },
        {
          "offset": 16,
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
      "description": "Queenstown, MD, United States",
      "id": "e20e240539eff26130597fdf9738933f8402ef26",
      "matched_substrings": [
        {
          "length": 6,
          "offset": 0
        }
      ],
      "place_id": "ChIJxyV1VPUNuIkRbhfw4zy8E2g",
      "reference": "CkQ1AAAAtauOfLXlSiW_cAtYPbDOdwAtESifzuF8vTXTai1F4FcgDboxueViptGh0l3CKpbpOmESCEe2TUJjU-UgFsjWsBIQ6_4rHSbj3scuEyBMXZe_FhoUcuZo_yiWPV7dxc99ZhP4Oj40S1A",
      "structured_formatting": {
        "main_text": "Queenstown",
        "main_text_matched_substrings": [
          {
            "length": 6,
            "offset": 0
          }
        ],
        "secondary_text": "MD, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Queenstown"
        },
        {
          "offset": 12,
          "value": "MD"
        },
        {
          "offset": 16,
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
    neighborhood: 'Queens',
    city: null,
    county: null,
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: null,
    county: 'Queens County',
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: null,
    county: null,
    state: 'Queensland',
    postal: null,
    country: 'Australia'
  },
  {
    neighborhood: null,
    city: 'Queensbury',
    county: null,
    state: 'NY',
    postal: null,
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Queenstown',
    county: null,
    state: 'MD',
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
