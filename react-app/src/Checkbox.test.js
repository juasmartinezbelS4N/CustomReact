import { Checkbox } from "./Checkbox"
import { fireEvent, render } from "@testing-library/react"

test("Selecting the checkbox should change", () => {
  const { getByLabelText } = render(<Checkbox />)
  const checkbox = getByLabelText(/not checked/i); //i es non-case
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
})
