import { expect, test } from "vitest"
import { parseFloatNumber } from "../Common"

test("parseFloatNumber", () => {
  expect(parseFloatNumber(null)).toBe(0)
  expect(parseFloatNumber(1)).toBe("1.00")
})
