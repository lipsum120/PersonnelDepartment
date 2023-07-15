import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import TableCard from '../../components/TableCard/TableCard';
import Table from '../../components/TableCard/Table/Table';
import Thead from '../../components/TableCard/Table/TbaleHead/Thead';
import Th from '../../components/TableCard/Table/TbaleHead/Th';
import Tbody from '../../components/TableCard/Table/TableBody/Tbody';
import Tb from '../../components/TableCard/Table/TableBody/Tb';
import TbCRUD from '../../components/TableCard/Table/TableBody/TbCRUD';
import TableButton from '../../components/Buttons/TableButton';
import CardHeader from '../../components/TableCard/CardHeader';
import CardSearchInput from '../../components/CardSearchInput/CardSearchInput';
import Button from '../../components/Buttons/Button';
import CardFooter from '../../components/TableCard/CardFooter';
import CardMain from '../../components/TableCard/CardMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGenderless, faMars, faMenorah, faVenus } from '@fortawesome/free-solid-svg-icons';

const BranchPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const departements = [
    {id: '123', name: 'IT', stuff_count: '10', boys: '9', girls: '1'},
    {id: '12', name: 'Accounting', stuff_count: '20', boys: '6', girls: '14'},
    {id: '23', name: 'Security', stuff_count: '12', boys: '12', girls: '0'},
    {id: '143', name: 'Teachers', stuff_count: '40', boys: '8', girls: '32'},
    {id: '173', name: 'Some', stuff_count: '1324', boys: '324', girls: '1000'},
    {id: '11323', name: 'AB', stuff_count: '2', boys: '1', girls: '2'},
  ];

  return (
    <main className='p-2 md:p-5 text-myGray space-y-3'>
      <h1 className='text-3xl font-bold p-1'>Ashgabat Branch</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='bg-white flex items-center justify-between h-20 px-8 rounded-lg font-bold text-2xl '>
          <article className='flex items-center space-x-5'>
            <FontAwesomeIcon icon={faMars} className='text-xl text-blue-500' />
            <h3 className=''>Males</h3>
          </article>
          <p className=''>123</p>
        </div>
        <div className='bg-white flex items-center justify-between h-20 px-8 rounded-lg font-bold text-2xl '>
          <article className='flex items-center space-x-5'>
            <FontAwesomeIcon icon={faVenus}className='text-xl text-pink-500' />
            <h3 className=''>Females</h3>
          </article>
          <p className=''>123</p>
        </div>
      </section>
      <TableCard>
        <CardHeader name={`${params.id}'s Departments`}>
          <CardSearchInput />
        </CardHeader>
        <CardMain>
          <Table>
            <Thead>
              <Th width='w-1/3' name="ID" />
              <Th width='w-1/3' name="Name" />
              <Th width='w-1/3' name="Stuff count" />
              <Th isSort={false} width='' />
            </Thead>
            <Tbody>
              {departements.map(d => 
                <tr key={d.id} className='hover:bg-stone-50'>
                  <Tb name={"#" + d.id} />
                  <Tb name={d.name} />
                  <Tb name={d.stuff_count}>
                    <p className='ml-2 font-light text-sm space-x-2'>
                      <span className='text-blue-500'>( men: {d.boys}</span>
                      <span className='text-pink-500'>women: {d.girls})</span>
                    </p>
                  </Tb> 
                  <TbCRUD>
                    <TableButton color="bg-[#FFC234] text-myGray" name='edit' onClick={() => navigate(`/departments/${d.id}/edit/`)} />
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

export default BranchPage;