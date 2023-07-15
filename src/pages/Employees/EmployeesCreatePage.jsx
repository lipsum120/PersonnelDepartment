import React, { useState } from 'react';
import FormCard from '../../components/FormCard/FormCard';
import MyForm from '../../components/FormCard/Form/MyForm';
import InputsSection from '../../components/FormCard/Form/InputsSection';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';

const EmployeesCreatePage = () => {

  const onSubmit = (data) => {
    data.full_name = `${data.name} ${data.surname} ${data.patronymic}`
    let {name, surname, patronymic, ...rest} = data;
    console.log(rest);
  };
  
  const { register, formState: { errors } ,handleSubmit } = useForm();

  const inputs = [
    {type: 'text', labelName: 'Name', inputName: 'name', validation: { 
        required: { value: true, message: "Name is required" }, 
        maxLength: { value: 255, message: 'Max Name Length 100' } 
      } 
    },
    {type: 'text', labelName: 'Surname', inputName: 'surname', validation: { 
        required: { value: true, message: "Surname is required" }, 
        maxLength: { value: 100, message: 'Max Surname Length 100' } 
      } 
    },
    {type: 'text', labelName: 'Patronymic', inputName: 'patronymic', validation: { 
        required: { value: true, message: "Patronymic is required" }, 
        maxLength: { value: 100, message: 'Max Patronymic Length 100' } 
      } 
    },
    {type: 'date', labelName: 'Birth Date', inputName: 'birthDate', validation: { 
        required: { value: true, message: "Birth Date is required" },
      } 
    },
    {type: 'text', labelName: 'Employee Number', inputName: 'employeeNumber', validation: { 
        required: { value: true, message: "Employee Number is required" }, 
        maxLength: { value: 30, message: 'Max Employee Number Length 30' } 
      } 
    },
    {type: 'number', labelName: 'Phone Number', inputName: 'phoneNumber', validation: { 
        required: { value: true, message: "Phone Number is required" },
        pattern: {value: "[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}", message: 'pattern erro'},
        maxLength: { value: 8, message: 'Phone Number Length 8' },
        minLength: {value: 8, message: 'Phone Number Length 8'},
      } 
    },
    {type: 'text', labelName: 'E-Mail', inputName: 'email', validation: {}},
    {type: 'text', labelName: 'Address', inputName: 'address', validation: { 
        required: { value: true, message: "Phone Number is required" }, 
        maxLength: { value: 255, message: 'Phone Number Length 255' },
      } 
    },
    {type: 'password', labelName: 'Password', inputName: 'password', validation: { 
        required: { value: true, message: "Phone Number is required" }, 
        maxLength: { value: 255, message: 'Phone Number Length 255' },
      } 
    },
  ];

  return (
    <main className='p-2 md:p-5 text-myGray'>
      <FormCard headerName='Create Department '>
        <MyForm handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <InputsSection>
            {inputs.map(input => 
              <FormInput 
                key={inputs.indexOf(input)}
                register={register} 
                errors={errors} 
                type={input.type}
                labelName={input.labelName} 
                inputName={input.inputName} 
                validation={input.validation} 
              />
            )}
          </InputsSection>
        </MyForm>
      </FormCard>
    </main>
  );
}

export default EmployeesCreatePage;