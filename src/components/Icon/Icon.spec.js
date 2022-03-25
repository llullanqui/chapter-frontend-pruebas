import React from 'react';
import { render, screen } from "@testing-library/react";
import Icon from ".";

describe('Icon', () => {
  it('should render', () => {
    render(<Icon />);
    expect(screen.getByTestId("IconId")).toBeInTheDocument()
  })

  it('must display an icon', () => {
    render(<Icon icon={"cloud"} />)
    expect(screen.getByTestId("iTagId")).toBeInTheDocument();
    expect(screen.getByText("cloud")).toBeInTheDocument();
  })

})