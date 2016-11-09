import test from 'ava';
import parseResult from '../src/index';

const searchString = '90210';

const results = {
  "predictions": [
    {
      "description": "Beverly Hills, CA 90210, United States",
      "id": "56cd60da6d695f6fdc356bcf5ccc9cf6e6611773",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 18
        }
      ],
      "place_id": "ChIJ7xfS-zW8woARXNkAJzX5Hs8",
      "reference": "CkQ-AAAAiDVimRhe9twjyOH_R6CbG2UBPkogPnNXh6CYtGojaA3Di-vJdINJAb2Z8Aga0M9VT1ud7IijstQqVuFV7ippsRIQAujt7tOtPORoH0zvhGcCORoUz9lDNtyEwNxuSRDqyWMkvb1T1-s",
      "structured_formatting": {
        "main_text": "90210",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "Beverly Hills, CA, United States"
      },
      "terms": [
        {
          "offset": 0,
          "value": "Beverly Hills"
        },
        {
          "offset": 15,
          "value": "CA"
        },
        {
          "offset": 18,
          "value": "90210"
        },
        {
          "offset": 25,
          "value": "United States"
        }
      ],
      "types": [
        "postal_code",
        "geocode"
      ]
    },
    {
      "description": "90210 Oulu, Finland",
      "id": "2acac22a303e074179a0dc4ee9d338db6e18060c",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJG8Ws06vSgUYRgNRUYtlGARw",
      "reference": "CjQrAAAAJY_CAC0QXcnTjdO3RQuzhb3FXQ-KbF5k25ALlWc_7cCPuYSckRnVjPerZxAVhOBOEhChzO44XUCF9SZkYIA8jURaGhSy16OcKhqRmLvi-rudBwxMRx9IpA",
      "structured_formatting": {
        "main_text": "90210",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "Oulu, Finland"
      },
      "terms": [
        {
          "offset": 0,
          "value": "90210"
        },
        {
          "offset": 6,
          "value": "Oulu"
        },
        {
          "offset": 12,
          "value": "Finland"
        }
      ],
      "types": [
        "postal_code",
        "geocode"
      ]
    },
    {
      "description": "90210 Thailand",
      "id": "93ed0798c00fa0fae3f3c081d350926abe2bfee5",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 0
        }
      ],
      "place_id": "ChIJLb2aSghDszERIIIfUb8jAhw",
      "reference": "CjQmAAAAFFfZZg8WfmXVBU1oJE7rBgvqX8df3XUKhq8WyOZcNGiUYuk7qRZrMf7qfjMIz8NVEhAf9usWv_yVut0BDvxUwjxpGhSiS9_oNdbPX73z2fbHzF7JdyalNQ",
      "structured_formatting": {
        "main_text": "90210",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "Thailand"
      },
      "terms": [
        {
          "offset": 0,
          "value": "90210"
        },
        {
          "offset": 6,
          "value": "Thailand"
        }
      ],
      "types": [
        "postal_code",
        "geocode"
      ]
    },
    {
      "description": "Svoboda, Zakarpats'ka oblast, Ukraine, 90210",
      "id": "b636feaab9167f6acff52c50b7f585adf1323b9c",
      "matched_substrings": [
        {
          "length": 5,
          "offset": 39
        }
      ],
      "place_id": "ChIJu3SAmM77OEcRkulkeNl4RpQ",
      "reference": "ClREAAAAldMPOQ8TvgvdWpGpwSeZYPxuJWvgUVcH56R7R6jo__dSJRKO-6GVhv_IFFbwjgFtt0h8yt_suNTdWKTlZUopUdd6YqO_OgU6BO4auNVsT8USEEsnEfBRIphC1JuIDOFQtY0aFIm_PCk71vDVEg19GR7wRCGbvtri",
      "structured_formatting": {
        "main_text": "90210",
        "main_text_matched_substrings": [
          {
            "length": 5,
            "offset": 0
          }
        ],
        "secondary_text": "Svoboda, Zakarpats'ka oblast, Ukraine"
      },
      "terms": [
        {
          "offset": 39,
          "value": "90210"
        },
        {
          "offset": 30,
          "value": "Ukraine"
        },
        {
          "offset": 9,
          "value": "Zakarpats'ka oblast"
        },
        {
          "offset": 0,
          "value": "Svoboda"
        }
      ],
      "types": [
        "postal_code",
        "geocode"
      ]
    }
  ],
  "status": "OK"
};

const expected = [
  {
    neighborhood: null,
    city: 'Beverly Hills',
    county: null,
    state: 'CA',
    postal: '90210',
    country: 'United States'
  },
  {
    neighborhood: null,
    city: 'Oulu',
    county: null,
    state: null,
    postal: '90210',
    country: 'Finland'
  },
  {
    neighborhood: null,
    city: null,
    county: null,
    state: null,
    postal: '90210',
    country: 'Thailand'
  },
  {
    neighborhood: null,
    city: 'Svoboda', // presumably? google says this is Ukraine's far-right party
    county: null,
    state: "Zakarpats'ka oblast",
    postal: '90210',
    country: 'Ukraine'
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
