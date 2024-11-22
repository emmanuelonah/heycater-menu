import React from 'react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render, screen } from 'utils';

import { ProtectedRoute } from './protected-route.route';

const MockLogin = () => <div>Login Page</div>;
const MockDashboard = () => <div>Dashboard Page</div>;

describe('<ProtectedRoute/>', () => {
  const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
  };

  it('renders child route when user is permitted', () => {
    const checkIsPermitted = jest.fn().mockReturnValue(true);

    renderWithRouter(
      <Routes>
        <Route element={<ProtectedRoute checkIsPermitted={checkIsPermitted} />}>
          <Route path="/" element={<MockDashboard />} />
        </Route>
        <Route path="/login" element={<MockLogin />} />
      </Routes>
    );

    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
    expect(screen.queryByText('Login Page')).not.toBeInTheDocument();
    expect(checkIsPermitted).toHaveBeenCalled();
  });

  it('navigates to login when user is not permitted', () => {
    const checkIsPermitted = jest.fn().mockReturnValue(false);

    renderWithRouter(
      <Routes>
        <Route element={<ProtectedRoute checkIsPermitted={checkIsPermitted} />}>
          <Route path="/" element={<MockDashboard />} />
        </Route>
        <Route path="/login" element={<MockLogin />} />
      </Routes>
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
    expect(screen.queryByText('Dashboard Page')).not.toBeInTheDocument();
    expect(checkIsPermitted).toHaveBeenCalled();
  });

  it('navigates to custom fallback route when provided', () => {
    const checkIsPermitted = jest.fn().mockReturnValue(false);
    const CustomFallback = () => <div>Custom Fallback Page</div>;

    renderWithRouter(
      <Routes>
        <Route
          element={
            <ProtectedRoute checkIsPermitted={checkIsPermitted} fallbackRoute="/custom-fallback" />
          }
        >
          <Route path="/" element={<MockDashboard />} />
        </Route>
        <Route path="/login" element={<MockLogin />} />
        <Route path="/custom-fallback" element={<CustomFallback />} />
      </Routes>
    );

    expect(screen.getByText('Custom Fallback Page')).toBeInTheDocument();
    expect(screen.queryByText('Dashboard Page')).not.toBeInTheDocument();
    expect(screen.queryByText('Login Page')).not.toBeInTheDocument();
    expect(checkIsPermitted).toHaveBeenCalled();
  });
});
