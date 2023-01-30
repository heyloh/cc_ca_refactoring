import FareCalculatorHandler from "./chain-of-responsibility/FareCalculatorHandler";
import Segment from "./Segment";

export default class Ride {
  MIN_FARE = 10;

  segments: Segment[];

  constructor(readonly fareCalculatorHandler: FareCalculatorHandler) {
    this.segments = [];
  }

  addSegment(segment: Segment) {
    this.segments.push(segment);
  }

  calculateFare() {
    let fare = 0;
    for (const segment of this.segments) {
      fare += this.fareCalculatorHandler.calculate(segment);
    }
    return fare < this.MIN_FARE ? this.MIN_FARE : fare;
  }
}
