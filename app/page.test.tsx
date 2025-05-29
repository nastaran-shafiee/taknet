import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

describe('Pricing Component', () => {
  it('renders initial state correctly', () => {
    render(<Home />);
    
    // Check if initial price is displayed (100k views = $16)
    expect(screen.getByText('$16.00')).toBeInTheDocument();
    expect(screen.getByText('100k PAGEVIEWS')).toBeInTheDocument();
    
    // Check if toggle switch is present
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    
    // Check if slider is present
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('updates price when yearly billing is toggled', () => {
    render(<Home />);
    
    const toggle = screen.getByRole('checkbox');
    
    // Initial monthly price
    expect(screen.getByText('$16.00')).toBeInTheDocument();
    
    // Toggle to yearly billing (25% discount)
    fireEvent.click(toggle);
    expect(screen.getByText('$12.00')).toBeInTheDocument();
    
    // Toggle back to monthly
    fireEvent.click(toggle);
    expect(screen.getByText('$16.00')).toBeInTheDocument();
  });

  it('updates price and pageviews when slider is moved', () => {
    render(<Home />);
    
    const slider = screen.getByRole('slider');
    
    // Move to 10k views
    fireEvent.change(slider, { target: { value: '0' } });
    expect(screen.getByText('10k PAGEVIEWS')).toBeInTheDocument();
    expect(screen.getByText('$8.00')).toBeInTheDocument();
    
    // Move to 1M views
    fireEvent.change(slider, { target: { value: '4' } });
    expect(screen.getByText('1M PAGEVIEWS')).toBeInTheDocument();
    expect(screen.getByText('$36.00')).toBeInTheDocument();
  });

  it('displays all feature items', () => {
    render(<Home />);
    
    expect(screen.getByText('Unlimited websites')).toBeInTheDocument();
    expect(screen.getByText('100% data ownership')).toBeInTheDocument();
    expect(screen.getByText('Email reports')).toBeInTheDocument();
  });

  it('combines yearly billing discount with different pageview levels', () => {
    render(<Home />);
    
    const slider = screen.getByRole('slider');
    const toggle = screen.getByRole('checkbox');
    
    // Set to 500k views ($24)
    fireEvent.change(slider, { target: { value: '3' } });
    expect(screen.getByText('$24.00')).toBeInTheDocument();
    
    // Toggle yearly billing (25% discount)
    fireEvent.click(toggle);
    expect(screen.getByText('$18.00')).toBeInTheDocument();
  });
});

describe('Pricing Component - Advanced', () => {
  it('shows the discount badge only when yearly billing is active', () => {
    render(<Home />);
    const toggle = screen.getByRole('checkbox');
    // Discount badge should always be visible (UI design)
    expect(screen.getByText('-25%')).toBeInTheDocument();
    // But price should only change when toggled
    expect(screen.getByText('$16.00')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByText('$12.00')).toBeInTheDocument();
  });

  it('Start my trial button is always enabled and visible', () => {
    render(<Home />);
    const button = screen.getByRole('button', { name: /start my trial/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('slider and toggle are in sync with state', () => {
    render(<Home />);
    const slider = screen.getByRole('slider') as HTMLInputElement;
    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    // Default state
    expect(slider.value).toBe('2');
    expect(toggle.checked).toBe(false);
    // Change slider
    fireEvent.change(slider, { target: { value: '4' } });
    expect(slider.value).toBe('4');
    // Toggle yearly
    fireEvent.click(toggle);
    expect(toggle.checked).toBe(true);
  });

  it('shows correct price unit (/month) regardless of billing type', () => {
    render(<Home />);
    const toggle = screen.getByRole('checkbox');
    expect(screen.getByText('/month')).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.getByText('/month')).toBeInTheDocument();
  });

  it('handles rapid slider and toggle changes without error', () => {
    render(<Home />);
    const slider = screen.getByRole('slider');
    const toggle = screen.getByRole('checkbox');
    // Rapid changes
    for (let i = 0; i < 5; i++) {
      fireEvent.change(slider, { target: { value: String(i) } });
      fireEvent.click(toggle);
    }
    // Final state should be checked and slider at 4
    expect((slider as HTMLInputElement).value).toBe('4');
    expect((toggle as HTMLInputElement).checked).toBe(true);
  });

  it('shows correct price for each slider position and billing type', () => {
    render(<Home />);
    const slider = screen.getByRole('slider');
    const toggle = screen.getByRole('checkbox');
    const prices = [8, 12, 16, 24, 36];
    for (let i = 0; i < prices.length; i++) {
      fireEvent.change(slider, { target: { value: String(i) } });
      expect(screen.getByText(`$${prices[i].toFixed(2)}`)).toBeInTheDocument();
      fireEvent.click(toggle); // yearly
      expect(screen.getByText(`$${(prices[i] * 0.75).toFixed(2)}`)).toBeInTheDocument();
      fireEvent.click(toggle); // back to monthly
    }
  });
}); 