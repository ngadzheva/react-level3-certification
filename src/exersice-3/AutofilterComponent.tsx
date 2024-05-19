import React, { useEffect, useState } from 'react';
import AutoFilterDropdown from './AutofilterDropdown';
import { userService } from './services/user-service';
import Menu from '../components/Menu';
import './styles/auto-filter.css';

interface City {
  id: string;
  name: string;
}

interface Company {
  id: string;
  name: string;
}

export default function AutofilterComponent() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await userService.getUsersData();

      const userCities = userData.data.map(uData => ({
        id: uData.address.zipcode,
        name: uData.address.city
      }));

      setCities(userCities);

      const userCompanies = userData.data.map(uData => ({
        id: uData.website,
        name: uData.company.name
      }));

      setCompanies(userCompanies);
    }

    fetchData();
  }, [cities]);

  const handleCityChange = (city: City | null) => {
    setSelectedCity(city);
  };

  const handleCompanyChange = (company: Company | null) => {
    setSelectedCompany(company);
  };

  return (
    <div id='container'>
      <Menu />

      <h1>Autofilter</h1>

      <h3>Select City</h3>
      <AutoFilterDropdown
        data={cities}
        optionKey='name'
        valueChange={handleCityChange}
      />
      {selectedCity && <p>Selected city: {selectedCity.name}</p>}

      <h3>Select Company</h3>
      <AutoFilterDropdown
        data={companies}
        optionKey='name'
        valueChange={handleCompanyChange}
      />
      {selectedCompany && <p>Selected company: {selectedCompany.name}</p>}
    </div>
  );
};
