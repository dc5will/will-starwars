import config from '../config'

const SearchApiService = {
  getPeople(character) {
    return fetch(`${config.API_ENDPOINT}/people/?search=${character}`, {
      headers: {
        'content-type': 'application/json'
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
}

export default SearchApiService;