import React, { useState } from 'react';
import TableCard from '../../components/TableCard/TableCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug, faDotCircle, faEdit, faEye, faList12, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import Table from '../../components/TableCard/Table/Table';
import Thead from '../../components/TableCard/Table/TbaleHead/Thead';
import Th from '../../components/TableCard/Table/TbaleHead/Th';
import Tbody from '../../components/TableCard/Table/TableBody/Tbody';
import Tb from '../../components/TableCard/Table/TableBody/Tb';
import TbList from '../../components/TableCard/Table/TableBody/TbList';
import TbCRUD from '../../components/TableCard/Table/TableBody/TbCRUD';
import TableButton from '../../components/Buttons/TableButton';
import { Link, useNavigate } from 'react-router-dom';
import CardHeader from '../../components/TableCard/CardHeader';
import CardFooter from '../../components/TableCard/CardFooter';
import CardSearchInput from '../../components/CardSearchInput/CardSearchInput';
import Button from '../../components/Buttons/Button';
import CardMain from '../../components/TableCard/CardMain';

const DepartmentsPage = () => {
  const navigate = useNavigate()
  const departements = [
    {id: '123', name: 'IT', stuff_count: '56', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "2", name: 'Anew'},
      {id: "3", name: 'Turkmenabat'},
    ]},
    {id: '433', name: 'Accounting', stuff_count: '123', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "3", name: 'Turkmenabat'},
      {id: "4", name: 'Dashoguz'},
      {id: "5", name: 'Mary'},
    ]},
    {id: '233', name: 'Something', stuff_count: '32', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "2", name: 'Anew'},
      {id: "3", name: 'Turkmenabat'},
      {id: "4", name: 'Dashoguz'},
      {id: "5", name: 'Mary'},
      {id: "6", name: 'Gokdepe'},
      {id: "7", name: 'Turkmenbashy'},
    ]},
    {id: '113', name: 'Anything', stuff_count: '67', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "2", name: 'Anew'},
      {id: "7", name: 'Turkmenbashy'},
    ]},
    {id: '243', name: 'Idontknow', stuff_count: '98', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "2", name: 'Anew'},
    ]},
    {id: '473', name: 'Something', stuff_count: '32', branches: [
      {id: "1", name: 'Ashgabat'},
      {id: "3", name: 'Turkmenabat'},
      {id: "4", name: 'Dashoguz'},
      {id: "5", name: 'Mary'},
      {id: "6", name: 'Gokdepe'},
      {id: "7", name: 'Turkmenbashy'},
    ]},
  ];
  
  return (
    <main className='p-5 text-zinc-900'>
      <TableCard name='Departments'>
        <CardHeader name={`Departments`}>
          <CardSearchInput />
          <Link to='create/'>
            <Button name='Create' />
          </Link>
        </CardHeader>
        <CardMain>
          <Table>
            <Thead>
              <Th width='lg:w-1/5' name="ID" />
              <Th width='lg:w-1/5' name="Name" />
              <Th width='lg:w-1/5' name="Stuff count" />
              <Th isSort={false} width='lg:w-1/3' name="Branches" />
              <Th isSort={false} width='lg:w-1/5' />
            </Thead>
            <Tbody>
              {departements.map(d => 
                <tr key={d.id} className='hover:bg-stone-50'>
                  <Tb name={"#" + d.id} />
                  <Tb name={d.name} />
                  <Tb name={d.stuff_count} />
                  <TbList id={d.id} list={d.branches} />
                  <TbCRUD>
                    <TableButton name='edit' onClick={() => navigate(`${d.id}/edit/`)} />
                    <TableButton name='delete' />
                  </TbCRUD>
                </tr>
              )}
            </Tbody>
          </Table>
        </CardMain>
        <CardFooter />
      </TableCard>
    </main>
  );
}

export default DepartmentsPage;