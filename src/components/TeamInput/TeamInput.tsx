import {
  Formik,
  Form,
  Field,
} from 'formik';
import * as Yup from 'yup';

import {useDispatch} from 'react-redux';

import CustomSelect from './customSelect';
import  './TeamInput.css'
import { addTeam } from '../../redux/actions';

const addSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required')
    .matches(/[a-zA-Z]/g, 'Only letters'),
  abbreviation: Yup.string()
    .required('Required')
    .matches(/[A-Z]/g, 'Only uppercase'),
  conference: Yup.string().required('Required')
});

interface formValues {
  name: string,
  city: string,
  abbreviation: string,
  conference: string
};

const options = [
  { value: 'East', label: 'East' },
  { value: 'West', label: 'West' },
]

const TeamInput: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const initialValues: formValues = {
    name: '',
    city: '',
    abbreviation:'',
    conference: ''
  } 
  return (
    <div className='mt-4'>
      <h4 className='fw-bolder'>Teams</h4>
      <div className='border rounded-3 p-3 shadow-sm'>
        <Formik
          initialValues={initialValues}
          validationSchema={addSchema}
          onSubmit={(values) => {
            console.log(values)
            dispatch(addTeam(values))
          }}
        >
          {({errors, touched, setFieldValue}) => (
            <Form className='row'>
              <div className='col'>
                <label htmlFor='name' className='text-secondary'>Name</label>
                <br />
                <Field name='name' placeholder='name' className={`${errors.name && touched.name? 'error': ''}`}/>
                {errors.name && touched.name ? (
                  <p className="text-danger">{errors.name}</p>
                ) : null}
              </div>
              <div className='col'>
                <label htmlFor='city' className='text-secondary'>City</label>
                <br />
                <Field name='city' placeholder='city' className={`${errors.city && touched.city? 'error': ''}`}/>
                {errors.city && touched.city ? (
                  <p className="text-danger">{errors.city}</p>
                ) : null}
              </div>
              <div className='col'>
                <label htmlFor='abbreviation' className='text-secondary'>Abbreviation</label>
                <br />
                <Field name='abbreviation' placeholder='Only uppercase' className={`${errors.abbreviation && touched.abbreviation? 'error': ''}`}/>
                {errors.abbreviation && touched.abbreviation ? (
                  <p className="text-danger">{errors.abbreviation}</p>
                ) : null}
              </div>
              <div className='col my-auto'>
                <label htmlFor='conference' className='text-secondary'>Conference</label>
                <CustomSelect 
                  className={`${errors.conference && touched.conference? 'error': ''}`}
                  options={options}
                  value={initialValues.conference}
                  onChange={(value: any) => setFieldValue('conference', value.value)}
                />
                {errors.conference && touched.conference ? (
                  <p className="text-danger">{errors.conference}</p>
                ) : null}
              </div>
              <div className='col text-center my-auto'>
                <button type='submit' className='btn btn-large btn-primary button'>Add</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TeamInput;
