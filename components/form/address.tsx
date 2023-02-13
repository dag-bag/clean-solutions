import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atom, selector } from 'recoil';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface AddressValues {
    street: string;
    city: string;
    state: string;
    zip: string;
}

const addressAtom = atom({
    key: 'addressAtom',
    default: {
        street: '',
        city: '',
        state: '',
        zip: '',
    },
});


const AddressForm: React.FC = () => {
    const InitialValues = useRecoilValue(addressAtom);
    const [values, setValues] = useRecoilState(addressAtom);

    return (
        <Formik
            initialValues={InitialValues}
            validate={(values: AddressValues) => {
                const errors: Partial<AddressValues> = {};
                if (!values.street) {
                    errors.street = 'Street is required';
                }
                if (!values.city) {
                    errors.city = 'City is required';
                }
                if (!values.state) {
                    errors.state = 'State is required';
                }
                if (!values.zip) {
                    errors.zip = 'Zip is required';
                }
                return errors;
            }}
            onSubmit={(values: AddressValues, { setSubmitting }) => {
                setValues(values as any);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='max-w-[600px] mx-auto'>
                    <div>
                        <Field className="rounded-full w-full mb-2" type="text" name="street" placeholder="Street" />
                        <ErrorMessage className='text-red-500 py-2' name="street" component="div" />
                    </div>
                    <div>
                        <Field className="rounded-full w-full mb-2" type="text" name="city" placeholder="City" />
                        <ErrorMessage className='text-red-500 py-2' name="city" component="div" />
                    </div>
                    <div>
                        <Field className="rounded-full w-full mb-2" type="text" name="state" placeholder="State" />
                        <ErrorMessage className='text-red-500 py-2' name="state" component="div" />
                    </div>
                    <div>
                        <Field className="rounded-full w-full mb-2" type="text" name="zip" placeholder="Zip" />
                        <ErrorMessage className='text-red-500 py-2' name="zip" component="div" />
                    </div>
                    <button className='btn btn-outline rounded-full px-10 capitalize ' type="submit" disabled={isSubmitting}>
                        Deliver
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddressForm;