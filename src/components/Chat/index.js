import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import Balloon from '../Balloon';
import Button from '../Button';
import IcoWarning from '../../images/ico-warning.svg';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Digite um nome válido')
    .required('Campo obrigatório'),
  city: Yup.string()
    .min(2, 'Digite uma cidade válida')
    .required('Cidade é um campo obrigatório'),
  state: Yup.string()
    .min(2, 'Digite uma estado válido')
    .required('Estado é um campo obrigatório'),
  dateofbirth: Yup.date()
    .max(new Date(), 'Digite uma data válida')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),
  stars: Yup.string()
    .required('Por favor avalie o teste!')
});

const initialValues = {
  name: '',
  city: '',
  state: '',
  dateofbirth: '',
  email: '',
  stars: ''
}

const handleSubmit = (values, { resetForm }) => {
  console.log(JSON.stringify(values))
  axios.post('https://6042d0197f50e000173ac94b.mockapi.io/api/v1/users', values)
    .then(response => {
      console.log(response);
      resetForm();
    })
    .catch(error => {
      console.log(error)
    });
}

function Chat() {
  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit} 
    >
      {({ errors, touched, values }) => (
        <Form>
          <Balloon from="bot">
            <p>Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.</p>
          </Balloon>

          <Balloon from="user">
            <Field name="name" placeholder="Digite seu nome completo" type="text" />
            {errors.name && touched.name ? (
              <span className="error">
                <img src={IcoWarning} alt=""/>
                {errors.name}
              </span>
            ) : null}
          </Balloon>

          <Balloon from="bot">
            <p>Que satisfação, {values.name !== '' ? values.name : '[Nome Completo]'}. Agora que sei seu nome, qual a cidade e estado que você mora?</p>
          </Balloon>

          <Balloon from="user">
            <Field name="city" placeholder="Cidade" type="text" />
            <Field name="state" placeholder="Estado" type="text" />
            {errors.city && touched.city ? (
              <div className="errors">
                <span>
                  <img src={IcoWarning} alt=""/>
                  {errors.city}
                </span>
              </div>
            ) : null}
            {errors.state && touched.state ? (
              <span>
                <img src={IcoWarning} alt=""/>
                {errors.state}
              </span>
            ) : null}
          </Balloon>

          <Balloon from="bot">
            <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</p>
          </Balloon>

          <Balloon from="user">
            <Field name="dateofbirth" placeholder="Digite sua data de nascimento" type="date" />
            {errors.dateofbirth && touched.dateofbirth ? (
              <span className="error">
                <img src={IcoWarning} alt=""/>
                {errors.dateofbirth}
              </span>
            ) : null}
          </Balloon>

          <Balloon from="bot">
            <p>Agora me fala teu e-mail, por gentileza.</p>
          </Balloon>

          <Balloon from="user">
            <Field name="email" placeholder="Digite seu e-mail" type="email" />
            {errors.email && touched.email ? (
              <span className="error">
                <img src={IcoWarning} alt=""/>
                {errors.email}
              </span>
            ) : null}
          </Balloon>

          <Balloon from="bot">
            <p>Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!</p>
          </Balloon>

          <Balloon from="bot">
            <div className="stars">
              <label>
                <Field type="radio" name="stars" value="1" /> 1
              </label>

              <label>
                <Field type="radio" name="stars" value="2" /> 2
              </label>

              <label>
                <Field type="radio" name="stars" value="3" /> 3
              </label>

              <label>
                <Field type="radio" name="stars" value="4" /> 4
              </label>

              <label>
                <Field type="radio" name="stars" value="5" /> 5
              </label>
            </div>

            {errors.stars && touched.stars ? (
              <span className="error">
                <img src={IcoWarning} alt=""/>
                {errors.stars}
              </span>
            ) : null}
          </Balloon>

          <Button type="submit">Salvar</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Chat;