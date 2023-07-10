import React from 'react';
import TableCard from '../../components/TableCard/TableCard';
import CardHeader from '../../components/TableCard/CardHeader';
import CardSearchInput from '../../components/CardSearchInput/CardSearchInput';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import Table from '../../components/TableCard/Table/Table';
import Thead from '../../components/TableCard/Table/TbaleHead/Thead';
import Th from '../../components/TableCard/Table/TbaleHead/Th';
import Tbody from '../../components/TableCard/Table/TableBody/Tbody';
import Tb from '../../components/TableCard/Table/TableBody/Tb';
import TbList from '../../components/TableCard/Table/TableBody/TbList';
import TbCRUD from '../../components/TableCard/Table/TableBody/TbCRUD';
import CardMain from '../../components/TableCard/CardMain';
import TableButton from '../../components/Buttons/TableButton';
import CardFooter from '../../components/TableCard/CardFooter';

const EmployeesPage = () => {
    const navigate = useNavigate()
    const employees = [
        {
            id: '123', 
            full_name: 'Andrey Sergeryow Mergenowich', 
            birth_date: '12.09.1993', 
            phone_number: '62547687', 
            emp_number: 'AW44ED',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.andrey.666@gamil.com',
            gender: 'Male',
            status: 'active',
        }
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
                <Th width='' name="ID" />
                <Th width='' name="Name" />
                <Th width='' name="Gender" />
                <Th width='' name="Employee Number" />
                {/* <Th width='' name="Phone Number" /> */}
                {/* <Th width='' name="Status" /> */}
                <Th isSort={false} width='' />
              </Thead>
              <Tbody>
                {employees.map(e => 
                  <tr key={e.id} className='hover:bg-stone-50'>
                    <Tb name={"#" + e.id} />
                    <Tb name={e.full_name} />
                    <Tb name={e.gender} />
                    <Tb name={e.emp_number} />
                    {/* <Tb name={"+993 " + e.phone_number} /> */}
                    {/* <Tb name={e.status} /> */}
                    <TbCRUD>
                      <TableButton name='edit' onClick={() => navigate(`${e.id}/edit/`)} />
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

export default EmployeesPage;