import { fareCalculatorChain } from "../../src/3/chain-of-responsibility";
import Ride from "../../src/3/Ride";
import Segment from "../../src/3/Segment";

let ride: Ride;

beforeEach(function () {
  ride = new Ride(fareCalculatorChain);
});

test("Deve calcular uma corrida no primeiro dia do mês", () => {
  ride.addSegment(new Segment(10, new Date("2021-03-01T10:00:00")));
  expect(ride.calculateFare()).toBe(15);
});

test("Deve calcular uma corrida diurna não domingo", () => {
  ride.addSegment(new Segment(10, new Date("2021-03-02T10:00:00")));
  expect(ride.calculateFare()).toBe(21);
});

test("Deve calcular uma corrida noturna", () => {
  ride.addSegment(new Segment(10, new Date("2021-03-02T23:00:00")));
  expect(ride.calculateFare()).toBe(39);
});

test("Deve calcular uma corrida diurna no domingo", () => {
  ride.addSegment(new Segment(10, new Date("2021-03-07T10:00:00")));
  expect(ride.calculateFare()).toBe(29);
});

test("Deve calcular uma corrida noturna no domingo", () => {
  ride.addSegment(new Segment(10, new Date("2021-03-07T23:00:00")));
  expect(ride.calculateFare()).toBe(50);
});

test("Não deve calcular uma corrida com distância inferior a zero", () => {
  expect(() =>
    ride.addSegment(new Segment(-10, new Date("2021-03-01T10:00:00")))
  ).toThrow(new Error("Invalid distance"));
});

test("Não deve calcular uma corrida com data inválida", () => {
  expect(() => ride.addSegment(new Segment(10, new Date("abcdef")))).toThrow(
    new Error("Invalid date")
  );
});

test("Deve calcular uma corrida com valor mínimo", () => {
  ride.addSegment(new Segment(3, new Date("2021-03-01T10:00:00")));
  expect(ride.calculateFare()).toBe(10);
});
