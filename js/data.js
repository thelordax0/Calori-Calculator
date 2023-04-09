class Data{
    static async getData(){
        let json;
     let data =await fetch("calories.json")
      json=data.json()
      return json
    }
}