async function getPhoneNumbers(country, phoneNumber) {
  try {
    const res = await axios.get(
      `https://jsonmock.hackerrank.com/api/countries?name=${country}`
    );
    if (res.data.data.length) {
      let callCodes = res.data.data[0].callingCodes;
      return `+${Math.max(...callCodes)} ${phoneNumber}`;
    } else {
      return -1;
    }
  } catch (e) {
    return -1;
  }
}

console.log(getPhoneNumbers("Afghanistan", 656445445));
