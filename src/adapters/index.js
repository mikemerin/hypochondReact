const URL = 'http://localhost:3000/api/v1/treatments'

export default class SymptomsAdapter {

  static all(){
    return fetch(URL).then(r => r.json())
  }

}
