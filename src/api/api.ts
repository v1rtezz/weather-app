export class Api {
  private API_URL: string
  constructor(API_URL: string) {
    this.API_URL = API_URL
  }
  async getData() {
    const response = await fetch(this.API_URL)
    console.log(this.API_URL);
    
    return await response.json()
  }
}