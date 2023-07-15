import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import BranchPage from './pages/Branches/BranchPage';
import DepartmentsPage from './pages/Departments/DepartmentsPage';
import DepartmentCreatePage from './pages/Departments/DepartmentCreatePage';
import DepartmentEditPage from './pages/Departments/DepartmentEditPage';
import EmployeesPage from './pages/Employees/EmployeesPage';
import EmployeesCreatePage from './pages/Employees/EmployeesCreatePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path='branches/:id/' element={<BranchPage />} />

        <Route path='departments/' element={<DepartmentsPage />} />
        <Route path='departments/create/' element={<DepartmentCreatePage />} />
        <Route path='departments/:id/edit/' element={<DepartmentEditPage />} />

        <Route path='employees/' element={<EmployeesPage />} />
        <Route path='employees/create/' element={<EmployeesCreatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
