"use strict"
/**
 * locality: city/town
 * sublocality: first-order civil entity below a locality
 * postal_code
 * country
 * administrative_area_level_1: states
 * administrative_area_level_2: counties
 */
// take out country
// assume it will be in form: sublocality,
//                            locality,
//                            administrative_area_level_1,
//                            postal_code
//                            administrative_area_level_2

// if sublocality, assume there is a city as well

const parseResult = (result) => {
  const parsed = {
    neighborhood: null,
    city: null,
    county: null,
    state: null,
    postal: null,
    country: null
  };

  const { types } = result;

  let addressNoZip;
  const searchingByPostal = types.includes('postal_code');
  if (searchingByPostal) {
    parsed.postal = result.structured_formatting.main_text;
    addressNoZip = result.structured_formatting
                         .secondary_text
                         .split(',')
                         .map(term => term.trim());
  } else {
    addressNoZip = result.terms
                         .map(term => term.value);
  }
  // console.log('got addressNoZip', addressNoZip, 'parsed', parsed);

  parsed.country = addressNoZip[addressNoZip.length - 1];
  const addressNoCountry = addressNoZip.slice(0, addressNoZip.length - 1);
  // console.log('parsed', parsed, 'addressNoCountry', addressNoCountry);
  if (!Boolean(addressNoCountry.length)) {
    return parsed;
  }

  const hasCity = types.includes('sublocality') || types.includes('locality') || searchingByPostal;
  let addressNoCity;
  if (hasCity) {
    if (types.includes('sublocality')) {
      parsed.neighborhood = addressNoCountry[0];
      if (addressNoCountry.length > 1) {
        parsed.city = addressNoCountry[1];
        addressNoCity = addressNoCountry.slice(2);
      } else {
        addressNoCity = addressNoCountry.slice(1);
      }
    } else {
      parsed.city = addressNoCountry[0];
      addressNoCity = addressNoCountry.slice(1);
    }
  } else {
    addressNoCity = addressNoCountry;
  }
  // console.log('parsed', parsed, 'addressNoCity', addressNoCity);
  if (!Boolean(addressNoCity.length)) {
    return parsed;
  }

  if (addressNoCity.length > 1) {
    parsed.county = addressNoCity[0];
    parsed.state = addressNoCity[1];
    return parsed;
  }
  parsed.state = addressNoCity[0];
  return parsed;
}
export default parseResult;
