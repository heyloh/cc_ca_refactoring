import NormalFareCalculatorHandler from "./NormalFareCalculatorHandler";
import OvernightFareCalculatorHandler from "./OvernightFareCalculatorHandler";
import OvernightSundayFareCalculatorHandler from "./OvernightSundayFareCalculatorHandler";
import SpecialDayFareCalculatorHandler from "./SpecialDayFareCalculatorHandler";
import SundayFareCalculatorHandler from "./SundayFareCalculatorHandler";

const normalFareCalculator = new NormalFareCalculatorHandler();
const overnightFareCalculator = new OvernightFareCalculatorHandler(
  normalFareCalculator
);
const overnightSundayFareCalculator = new OvernightSundayFareCalculatorHandler(
  overnightFareCalculator
);
const sundayFareCalculator = new SundayFareCalculatorHandler(
  overnightSundayFareCalculator
);
const specialDayFareCalculator = new SpecialDayFareCalculatorHandler(
  sundayFareCalculator
);

export { specialDayFareCalculator as fareCalculatorChain };
