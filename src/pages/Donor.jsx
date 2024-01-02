import React, { useState } from 'react';
import Page1 from './Donor_Pages/Page1';
import Page2 from './Donor_Pages/Page2';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Donor = () => {
  let navigate = useNavigate();

  const initialFormData = {
    page1Data: {
      fname: '',
      lname: '',
      Contact: '',
      Alternate_Contact: '',
      Email: '',
      Dob: '',
      Weight: '',
      Gender: '',
    },
    page2Data: {
      CurrentAddress: '',
      CurrentState: '',
      CurrentCity: '',
      CurrentPincode: '',
      PermenantAddress: '',
      PermenantState: '',
      PermenantCity: '',
      PermenantPincode: '',
      BloodGrp: '',
      DonationDate: '',
      msg: '',
    },
  };

  const initialErrors = {
    page1Errors: {},
    page2Errors: {},
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage === 1 && validatePage1()) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 2 && validatePage2()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleChange = (page, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [page]: {
        ...prevData[page],
        [field]: value,
      },
    }));
  };

  const validatePage1 = () => {
    const { fname, lname, Contact, Alternate_Contact, Email, Dob, Weight, Gender } = formData.page1Data;
    const errors = {};
    
    if (!fname) errors.fname = 'First name is required';
    if (!lname) errors.lname = 'Last name is required';
    if (!Contact) errors.Contact = 'Contact is required';
    if (!Alternate_Contact) errors.Alternate_Contact = 'Alternate Contact is required';
    if (!Email) errors.Email = 'Email is required';
    if (!Dob) errors.Dob = 'Date of Birth is required';
    if (!Weight) errors.Weight = 'Weight is required';
    if (!Gender) errors.Gender = 'Gender is required';
    
    setErrors({ ...initialErrors, page1Errors: errors });
    return Object.keys(errors).length === 0;
  };

  const validatePage2 = () => {
    const { CurrentAddress, CurrentState, CurrentCity, CurrentPincode, PermenantAddress, PermenantState, PermenantCity, PermenantPincode, BloodGrp, DonationDate, msg } = formData.page2Data;
    const errors = {};
   
    if (!CurrentAddress) errors.CurrentAddress = 'Current address is required';
    if (!CurrentState) errors.CurrentState = 'Current state is required';
    if (!CurrentCity) errors.CurrentCity = 'Current City is required';
    if (!CurrentPincode) errors.CurrentPincode = 'Current Pincode is required';
    if (!PermenantAddress) errors.PermenantAddress = 'Permanent Address is required';
    if (!PermenantState) errors.PermenantState = 'Permanent State is required';
    if (!PermenantCity) errors.PermenantCity = 'Permanent City is required';
    if (!PermenantPincode) errors.PermenantPincode = 'Permanent Pincode is required';
    if (!BloodGrp) errors.BloodGrp = 'Blood Group is required';
    if (!DonationDate) errors.DonationDate = 'Last Donation Date is required';
    if (!msg) errors.msg = 'history is required';
    setErrors({ ...initialErrors, page2Errors: errors });
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      toast.success('Data submitted successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
     
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      console.log('Form Data Submitted:', response.data);


      setFormData(initialFormData);


      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);

   
      toast.error('An error occurred. Please try again later.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      {currentPage === 1 && (
        <Page1
          data={formData.page1Data}
          onChange={(field, value) => handleChange('page1Data', field, value)}
          onNext={handleNextPage}
          errors={errors.page1Errors}
        />
      )}

      {currentPage === 2 && (
        <Page2
          data={formData.page2Data}
          onChange={(field, value) => handleChange('page2Data', field, value)}
          onNext={handleSubmit}
          onPrev={handlePrevPage}
          errors={errors.page2Errors}
        />
      )}

      <ToastContainer />
    </>
  );
};

export default Donor;
