
import React, { useState} from 'react';
import Navbar from '../../Component/Navbar';
 import axios from "axios";
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
      fname: '',
      lname: '',
      Contact: '',
      Alternate_Contact: '',
      Email: '',
      Dob: '',
      Weight: '',
      Gender: '',
      Address: '',
      BloodGrp: '',
      DonationDate: '',
      Six: { tattooing: false, piercing: false, other: false },
      Consume: false,
    });
  
    const { fname, lname, Contact, Alternate_Contact, Email, Weight, Dob, Gender, Address, BloodGrp,
    DonationDate, Six, Consume } = formData;

    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};
  
      Object.entries(formData).forEach(([key, value]) => {
        // Check if the value is a string before calling trim
        if (typeof value === 'string' && !value.trim()) {
          newErrors[key] = `${key} is required`;
          isValid = false;
        }
      });
    
      // Add more validation checks for other fields
  
      setErrors(newErrors);
      return isValid;
    };
  
    const onInputChange = (e) => {
      if (e.target.type === 'checkbox') {
        setFormData({ ...formData, Six: { ...Six, [e.target.name]: e.target.checked } });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        try {
          toast.success('Data submitted successfully!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
          });
          // Send the form data to the API
          const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
          console.log('Form submitted successfully!', response.data);
  
          // Clear form data
          setFormData({
            fname: '',
            lname: '',
            Contact: '',
            Alternate_Contact: '',
            Email: '',
            Dob: '',
            Weight: '',
            Gender: '',
            Address: '',
            BloodGrp: '',
            DonationDate: '',
            Six: { tattooing: false, piercing: false, other: false },
          Consume: false,
          });
  
          // Display success notification
         
  
          // Navigate to the desired page
          navigate('/');
        } catch (error) {
          console.error('Error submitting form:', error);
  
          // Display error notification
          toast.error('An error occurred. Please try again later.', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      } else {
        // Display validation error notification
        toast.error('Please fill in all required fields with valid data.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    };
   
    return (

        <>
            <Navbar />

            <body className='overflow-hidden profile-bg mt-5'>
                <div className='body-color'>
                    <div className="container overflow-x-hidden">
                        <h1 className=" my-5 h1 fs-2 fw-bold ">My Profile</h1>
                        <form className='overflow-hidden mb-5' id="myForm"  onSubmit={handleSubmit} >
                            {/* <div className="row g-3 col-12 col-sm-10 col-md-4 col-lg-6 col-xl-10 col-xxl-12"> */}
                            <div className="row ">
                                <div className="col-md-2">
                                    <label for="validationDefault01" className="form-label"> Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="First" name="fname"
                                        value={fname}
                                        onChange={onInputChange}  />
                                </div>
                                <div className="col-md-2">
                                    <label for="validationDefault02" className="form-label">  </label>
                                    <input type="text" class="form-control mt-2" id="validationDefault02" placeholder="Last" name="lname"
                                        value={lname}
                                        onChange={onInputChange}  />
                                </div>


                                <div className="col-md-2">
                                    <label for="validationDefault03" class="form-label">Contact</label>
                                    <input type="phone" className="form-control" placeholder="+91" id="validationDefault03" name="Contact"
                                        value={Contact}
                                        onChange={onInputChange}  />
                                </div>
                                <div className="col-md-2">
                                    <label for="validationDefault03" class="form-label"> Alternate Conatct</label>
                                    <input type="phone" className="form-control" placeholder="+91" id="validationDefault03"  name="Alternate_Contact"
                                        value={Alternate_Contact}
                                        onChange={onInputChange} />
                                </div>

                            </div>

                            <div className="row g-3 pt-3">
                                <div className="col-md-2">
                                    <label for="validationDefault05" className="form-label">Email ID</label>
                                    <input type="Email" className="form-control" id="validationDefault05"  name="Email"
                                        value={Email}
                                        onChange={onInputChange} />
                                </div>

                                <div className="col-md-2">
                                    <label for="validationDefault01" className="form-label">Birth Date</label>
                                    <input type="date" className="form-control" id="validationDefault01"  name="Dob"
                                        value={Dob}
                                        onChange={onInputChange} />
                                </div>

                                <div className="col-md-2">
                                    <label for="validationDefault04" className="form-label">Gender</label>
                                    <select className="form-select" id="validationDefault04" name="Gender"
                                        value={Gender}
                                        onChange={onInputChange} required>
                                        <option selected >Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="col-md-2">
                                    <label for="validationDefault04" className="form-label">Blood Group</label>
                                    <select className="form-select" id="validationDefault04" name="BloodGrp"
                                        value={BloodGrp}
                                        onChange={onInputChange} required>
                                        <option selected >choose</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                </div>

                                <div className="col-md-2">
                                    <label for="validationDefault05" className="form-label">Weight</label>
                                    <input type="text" className="form-control" id="validationDefault05"  name="Weight"
                                        value={Weight}
                                        onChange={onInputChange} />
                                </div>

                            </div>


                            <div className="row g-3 pt-3">
                                <div className="col-md-2">
                                    <label for="validationDefaultUsername" className="form-label">Last Donation Date</label>
                                    <input type="date" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name="DonationDate"
                                        value={DonationDate}
                                        onChange={onInputChange}  />
                                </div>
                                <div className="col-md-6 mb-3 pt-2">
                                    <label for="validationCustom03"> Address</label>
                                    <input type="text" class="form-control" id="validationCustom03" name="Address"
                                        value={Address}
                                        onChange={onInputChange}  />
                                </div>

                            </div>
                             <div className="row pt-2">
                             <div className="col-md-5 mt-2">
    <p>In the last six months, have you had any of the following?</p>
    <div className="form-check form-check-inline">
        <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            name="tattooing"
            checked={Six.tattooing}
            onChange={onInputChange}
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">
            Tattooing
        </label>
    </div>
    <div className="form-check form-check-inline">
        <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            name="piercing"
            checked={Six.piercing}
            onChange={onInputChange}
        />
        <label className="form-check-label" htmlFor="inlineCheckbox2">
            Piercing
        </label>
    </div>
    <div className="form-check form-check-inline">
        <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            name="other"
            checked={Six.other}
            onChange={onInputChange}
        />
        <label className="form-check-label" htmlFor="inlineCheckbox3">
            Other
        </label>
    </div>
</div>

<div className="col-md-4">
                  <p>Do you consume Alcohol/Drugs?</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      name="Consume"
                      checked={Consume}
                      onChange={() => onInputChange({ target: { type: 'checkbox', name: 'Consume', checked: !Consume } })}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      name="Consume"
                      checked={!Consume}
                      onChange={() => onInputChange({ target: { type: 'checkbox', name: 'Consume', checked: !Consume } })}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      No
                    </label>
                  </div>
                </div>
                            </div> 


                            {Object.keys(errors).map((key) => (
                <div key={key} className='text-danger'>
                  {errors[key]}
                </div>
              ))}

                            <button type="submit" class="btn btn-secondary mt-4">Submit Form</button>

                            {/* <img className="1" style={{width: '18rem', height: 'auto'}}  src={form} alt="form_img" /> */}

                        </form>








                    </div>
                    <div className="text-center p-4 footer">
                    </div>
                    <ToastContainer />
                </div>
            </body>
        </>
    );
};
export default Profile;
