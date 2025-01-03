import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import SearchInput from '../components/SearchInput';
import AddCompanyButton from '../components/AddCompanyButton';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRow';
import { Status } from '../components/StatusLabel';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
}
