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
import { faCircle, faFileDownload, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
const EmployeesPage = () => {
    const navigate = useNavigate()
    const employees = [
        {
            id: '123', 
            full_name: 'Halalgyz Bayramowa Haramogalanowich', 
            birth_date: '10.10.2010', 
            phone_number: '61010101', 
            emp_number: 'AH666ET',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.byramowa.666@gamil.com',
            gender: 'Female',
            status: 'active',
        },
        {
            id: '134', 
            full_name: 'Wampir Meredowa Darkulowich', 
            birth_date: '12.09.1993', 
            phone_number: '62547687', 
            emp_number: 'AW44ED',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.andrey.666@gamil.com',
            gender: 'Male',
            status: 'active',
        },
        {
            id: '144', 
            full_name: 'Edik Adreyew Myrat ogly', 
            birth_date: '12.09.1993', 
            phone_number: '62547687', 
            emp_number: 'AW44ED',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.andrey.666@gamil.com',
            gender: 'Male',
            status: 'active',
        },
        {
            id: '14', 
            full_name: 'Deniz Kolewa Dreyayowic', 
            birth_date: '12.09.1993', 
            phone_number: '62547687', 
            emp_number: 'AW44ED',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.andrey.666@gamil.com',
            gender: 'Female',
            status: 'deleted',
        },
        {
            id: '174', 
            full_name: 'Safari Chromowa Firefoxsowic', 
            birth_date: '12.09.1993', 
            phone_number: '62547687', 
            emp_number: 'AW44ED',
            working_scince: '09.01.2020',
            address: 'Sowetskiy',
            mail: 'cool.andrey.666@gamil.com',
            gender: 'Female',
            status: 'active',
        },
    ];
    
    return (
      <main className='p-2 md:p-5 text-myGray'>
        {/* <div className='flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-50 w-screen h-screen z-50'>
          <div className='bg-white p-5 rounded-xl z-[60]'>
            <header>
              <h1 className='text-2xl font-bold'>Download files</h1>
            </header>
            <main>
              <button></button>
            </main>
          </div>
        </div> */}
        <TableCard name='Departments'>
          <CardHeader name={`Employees`}>
            <CardSearchInput />
            <Link to='create/'>
              <Button name='Create' />
            </Link>
          </CardHeader>
          <CardMain>
            <Table>
              <Thead>
                <Th name="ID" />
                <Th name="Name" />
                <Th name="Emp Number" />
                <Th name="Phone Number" />
                <Th name="Status" />
                <Th name="Files" isSort={false} />
                <Th isSort={false} />
              </Thead>
              <Tbody>
                {employees.map(e => 
                  <tr key={e.id} className='hover:bg-stone-50'>
                    <Tb name={"#" + e.id} />
                    <Tb>
                      <div className={`w-14 h-14 bg-gray-200 rounded-lg mr-5 bg-cover bg-center bg-girl-1`}></div>
                      <article>
                        <p>{e.full_name}</p>
                        <p className={`${e.gender == 'Male' ? 'text-blue-500' : e.gender == 'Female' ? 'text-pink-500' : ''} text-sm`}>{e.gender}</p>
                      </article>
                    </Tb>
                    <Tb name={e.emp_number} />
                    <Tb name={"+993 " + e.phone_number} />
                    <Tb>
                      <div className={`${e.status == 'active' ? 'bg-green-300' : e.status == 'deleted' ? 'bg-gray-300' : ''} flex items-center px-2 rounded-md space-x-1`}>
                        <p>{e.status}</p>
                      </div>
                    </Tb>
                    <Tb>
                      <button className='w-8 h-8 bg-sky-500 text-white rounded-lg' title={`Download information about ${e.full_name}`}>
                        <FontAwesomeIcon icon={faFileDownload} />
                      </button>
                    </Tb>
                    <TbCRUD>
                      <TableButton color="bg-blue-500 text-white" name='show' onClick={() => navigate(`${e.id}/show/`)} />
                      <TableButton color="bg-[#FFC234] text-myGray" name='edit' onClick={() => navigate(`${e.id}/edit/`)} />
                      <TableButton color="bg-red-500 text-white" name='delete' />
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