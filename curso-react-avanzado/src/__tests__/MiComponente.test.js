import React from "react"
import MiComponente from "../components/MiComponente"
import { render, screen } from "@testing-library/react"

it('should display a form', () => {
  const {queryByTestId, queryByPlaceholderText} = render(<MiComponente/>);
  expect(queryByTestId('formulario')).toBeTruthy()
  expect(screen.queryByTestId('formulario')).toBeTruthy()
  expect(screen.getByPlaceholderText('Nombre')).toBeTruthy()
  expect(screen.getByPlaceholderText('Apellido')).toBeTruthy()
  expect(screen.getByPlaceholderText('Hobby')).toBeTruthy()
})
