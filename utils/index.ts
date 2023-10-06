export async function fetchCars() {
  const header = {
    "X-RapidAPI-Key": "584684cdd5msh1f1f1f55e4f23fdp158be4jsnfcbf6d93565f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: header }
  );
  const result = await response.json();
  return result;
}
