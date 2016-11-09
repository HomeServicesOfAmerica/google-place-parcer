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
  let neighborhood = null;
  let city = null;
  let state = null;
  let postal = null;
  let country = null;

  const { types } = result;
  const addressAllParts = result.terms
                                .map(term => term.value)
                                .reverse();
  let addressNoZip;
  const searchingByPostal = types.includes('postal_code');
  if (searchingByPostal) {
    postal = result.structured_formatting.main_text;
    addressNoZip = addressAllParts.filter(term => term !== postal);
  } else {
    addressNoZip = addressAllParts;
  }

  country = addressNoZip[0];
  const addressNoCountry = addressNoZip.slice(1);
  if (!Boolean(addressNoCountry.length)) {
    return {
      neighborhood,
      city,
      state,
      postal,
      country,
    };
  }

  const hasCity = types.includes('sublocality') || types.includes('locality');
  let addressNoCity;
  if (hasCity) {
    if (types.includes('sublocality')) {
      neighborhood = addressNoCity[0];
      if (addressNoCountry.length > 1) {
        city = addressNoCountry[1];
        addressNoCity = addressNoCountry.slice(2);
      } else {
        addressNoCity = addressNoCountry.slice(1);
      }
    } else {
      city = addressNoCountry[0];
      addressNoCity = addressNoCountry.slice(1);
    }
  } else {
    addressNoCity = addressNoCountry;
  }
  if (!Boolean(addressNoCity.length)) {
    return {
      neighborhood,
      city,
      state,
      postal,
      country,
    };
  }

  state = addressNoCity[0];
  return {
    neighborhood,
    city,
    state,
    postal,
    country,
  };
}
export default parseResult;
