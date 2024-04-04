
let cars: {id: number; carType: string; color: string; year: number}[] = [
  { id: 1, carType: "Sedan", color: "Blue", year: 2022 },
  { id: 2, carType: "Van", color: "Gray", year: 2020 },
  { id: 3, carType: "Convertible", color: "Purple", year: 1974 },

];

const resolvers = {

  Query: {
      getCars: () => cars,
  },
 
  Mutation: {
      addCar: (_: any, args: any) => {
          const newCar = {
              id: cars.length + 1,
              carType: args.carType,
              color: args.color,
              year: args.year
          }
          cars.push(newCar)
          return newCar
      
      }
  }

  
}

export default resolvers;