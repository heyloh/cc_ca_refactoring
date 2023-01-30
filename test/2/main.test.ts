import { calculateRide } from "../../src/2/main";

test("Deve calcular uma corrida no primeiro dia do mês", () => {
  const segments = [{ distance: 10, date: new Date("2021-03-01T10:00:00") }];
  expect(calculateRide(segments)).toBe(15);
});

test("Deve calcular uma corrida diurna não domingo", () => {
  const segments = [{ distance: 10, date: new Date("2021-03-02T10:00:00") }];
  expect(calculateRide(segments)).toBe(21);
});

test("Deve calcular uma corrida noturna", () => {
  const segments = [{ distance: 10, date: new Date("2021-03-02T23:00:00") }];
  expect(calculateRide(segments)).toBe(39);
});

test("Deve calcular uma corrida diurna no domingo", () => {
  const segments = [{ distance: 10, date: new Date("2021-03-07T10:00:00") }];
  expect(calculateRide(segments)).toBe(29);
});

test("Deve calcular uma corrida noturna no domingo", () => {
  const segments = [{ distance: 10, date: new Date("2021-03-07T23:00:00") }];
  expect(calculateRide(segments)).toBe(50);
});

test("Não deve calcular uma corrida com distância inferior a zero", () => {
  const segments = [{ distance: -10, date: new Date("2021-03-01T10:00:00") }];
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular uma corrida com data inválida", () => {
  const segments = [{ distance: 10, date: new Date("abcdef") }];
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid date"));
});

test("Deve calcular uma corrida com valor mínimo", () => {
  const segments = [{ distance: 3, date: new Date("2021-03-01T10:00:00") }];
  expect(calculateRide(segments)).toBe(10);
});
