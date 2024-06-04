export default class Localization {
  constructor (endpoint = '../data/location.json') {
    this.endpoint = endpoint
    this.data = []
  }

  fillOptions (select, data) {
    if (select === null || !Array.isArray(data)) {
      return
    }
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      const option = document.createElement('option')
      option.value = item.name
      option.setAttribute('data-latitude', item.latitude)
      option.dataset.longitude = item.longitude
      const nameFr = ('translations' in item) ? item.translations.fr : item.name
      option.textContent = nameFr
      select.append(option)
    }
  }

  async findCitiesFrom (countryName) {
    try {
      const data = await fetch(this.endpoint)
      const res = await data.json()
      const country = res.find(country => country.name === countryName)
      return country.cities
    } catch (error) {
      console.error('error', error)
      return []
    }
  }

  async getData () {
    try {
      const data = await fetch(this.endpoint)
      return data.json()
    } catch (error) {
      console.error('error from getData', error)
      return []
    }
  }

}
