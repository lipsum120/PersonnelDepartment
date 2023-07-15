import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import FormCard from '../../components/FormCard/FormCard';
import MyForm from '../../components/FormCard/Form/MyForm';
import InputsSection from '../../components/FormCard/Form/InputsSection';
import FormInput from '../../components/FormInput/FormInput';
import FormSelector from '../../components/FormSelector/FormSelector';

const DepartmentEditPage = () => {
  const params = useParams();

  const branches = [
    {id: "1", name: 'Ashgabat'},
    {id: "2", name: 'Anew'},
    {id: "3", name: 'Turkmenabat'},
    {id: "4", name: 'Dashoguz'},
    {id: "5", name: 'Mary'},
    {id: "6", name: 'Gokdepe'},
    {id: "7", name: 'Turkmenbashy'},
  ];
  const [selectedBranches, setSelectedBranches] = useState(['1']);
  
  const onSubmit = (data) => {
    data.branches = selectedBranches
    console.log(data);
  };
  
  const { register, formState: { errors } ,handleSubmit } = useForm();

  return (
    <main className='p-2 md:p-5 text-myGray'>
      <FormCard headerName={`Edit ${params.id} Department`}>
        <MyForm handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <InputsSection>
            <FormInput 
              register={register} 
              errors={errors} 
              labelName={'Name'} 
              inputName={'departmentName'} 
              validation={{ required: {value: true, message: "Name is required"} }} 
            />
          </InputsSection>
          <FormSelector name={'Branches'} items={branches} selected={selectedBranches} setSelected={setSelectedBranches} />
        </MyForm>
      </FormCard>
    </main>
  );
}

export default DepartmentEditPage;