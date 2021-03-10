import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { motion } from 'framer-motion';
import InputMask from 'react-input-mask';

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
  dateofbirth: Yup.string()
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

function Chat() {
  const [firstDialog, setFirstDialog] = useState(true);
  const [secondDialog, setSecondDialog] = useState(false);
  const [thirdDialog, setThirdDialog] = useState(false);
  const [fourthDialog, setFourthDialog] = useState(false);
  const [finalDialog, setFinalDialog] = useState(false);
  const [submitDialog, setSubmitDialog] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    console.log(JSON.stringify(values))
    axios.post('https://6042d0197f50e000173ac94b.mockapi.io/api/v1/users', values)
      .then(() => {
        resetForm();
        setFirstDialog(false);
        setSecondDialog(false);
        setThirdDialog(false);
        setFourthDialog(false);
        setFinalDialog(false);
        setSubmitDialog(false);
        setTimeout(() => {
          setFirstDialog(true);
        }, 500);
      })
      .catch(error => {
        console.log(error)
      });
  }

  const handleDialog = () => {
    setSecondDialog(true);

    if(secondDialog === true) {
      setThirdDialog(true);
    } 
    if (thirdDialog === true) {
      setFourthDialog(true);
    }
    if (fourthDialog === true) {
      setFinalDialog(true);
    }
    if (finalDialog === true) {
      setSubmitDialog(true);
    }
  }

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit} 
    >
      {({ errors, touched, values }) => (
        <Form>
          {firstDialog ? 
            <>
            <Balloon 
              from="bot"
              animationTransition={{
                delay: 0,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' }
              }}
            >
              <p>Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.</p>
            </Balloon>

            <Balloon 
              from="user"
              animationTransition={{
                delay: 0.8,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' }
              }}
            >
              <Field name="name" placeholder="Digite seu nome completo" type="text" />
              {errors.name && touched.name ? (
                <span className="error">
                  <img src={IcoWarning} alt=""/>
                  {errors.name}
                </span>
              ) : null}
              {values.name.length >= 2 ? 
                <button type="button" onClick={handleDialog}>confirmar</button>
              : <button type="button" onClick={handleDialog} disabled>confirmar</button>}
            </Balloon>
            </>
          : null }


          {secondDialog ? 
            <>
            <Balloon 
              from="bot"
              animationTransition={{
                delay: 0.5,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' }
              }}
            >
              <p>Que satisfação, {values.name !== '' ? values.name : '[Nome Completo]'}. Agora que sei seu nome, qual a cidade e estado que você mora?</p>
            </Balloon>

            <Balloon 
              from="user"
              animationTransition={{
                delay: 1.3,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' }
              }}
            >
              <div className="group-fields">
                <label htmlFor="city">Cidade:</label>
                <Field id="city" name="city" placeholder="Digite a cidade" type="text" />

                <label htmlFor="state">Estado:</label>
                <Field id="state" name="state" placeholder="Digite o Estado" type="text" /> 
              </div>
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
              {values.city && values.state ? 
                <button type="button" onClick={handleDialog}>confirmar</button>
              : <button type="button" onClick={handleDialog} disabled>confirmar</button>}
            </Balloon>
            </>
          : null }

          {thirdDialog ? 
            <>
            <Balloon 
              from="bot"
              animationTransition={{
                delay: 0.5,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' }
              }}
            >
              <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</p>
            </Balloon>

            <Balloon 
              from="user"
              animationTransition={{
                delay: 1.3,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' }
              }}
            >
              <Field name="dateofbirth">
                {({field}) => (
                    <InputMask 
                    {...field} 
                    mask="99/99/9999"
                    placeholder="Digite sua data de nascimento"
                    type="text"
                  />
                )}
              </Field>
              {errors.dateofbirth && touched.dateofbirth ? (
                <span className="error">
                  <img src={IcoWarning} alt=""/>
                  {errors.dateofbirth}
                </span>
              ) : null}
              {values.dateofbirth ? 
                <button type="button" onClick={handleDialog}>confirmar</button>
              : <button type="button" onClick={handleDialog} disabled>confirmar</button>}
            </Balloon>
            </>
          : null }

          {fourthDialog ? 
            <>
            <Balloon 
              from="bot"
              animationTransition={{
                delay: 0.5,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' }
              }}
            >
              <p>Agora me fala teu e-mail, por gentileza.</p>
            </Balloon>

            <Balloon 
              from="user"
              animationTransition={{
                delay: 1.3,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' }
              }}
            >
              <Field name="email" placeholder="Digite seu e-mail" type="email" />
              {errors.email && touched.email ? (
                <span className="error">
                  <img src={IcoWarning} alt=""/>
                  {errors.email}
                </span>
              ) : null}
              {values.email ? 
                <button type="button" onClick={handleDialog}>confirmar</button>
              : <button type="button" onClick={handleDialog} disabled>confirmar</button>}
            </Balloon>
            </>
          : null }

          {finalDialog ?
            <>
            <Balloon 
              from="bot"
              animationTransition={{
                delay: 0.5,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '-50%' }
              }}
            >
              <p>Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!</p>
            </Balloon>

            <Balloon 
              from="user"
              animationTransition={{
                delay: 1.3,
                duration: 0.5
              }}
              animationVariants={{
                show: { opacity: 1, x: '0' },
                hidden: { opacity: 0, x: '50%' }
              }}
            >
              <fieldset className="stars">
                
                <Field type="radio" id="star5" name="stars" value="5" />
                <label htmlFor="star5">Star 5</label>

                <Field type="radio" id="star4" name="stars" value="4" />
                <label htmlFor="star4">Star 4</label>

                <Field type="radio" id="star3" name="stars" value="3" />
                <label htmlFor="star3">Star 3</label>

                <Field type="radio" id="star2" name="stars" value="2" />
                <label htmlFor="star2">Star 2</label>

                <Field type="radio" id="star1" name="stars" value="1" />
                <label htmlFor="star1">Star 1</label>

              </fieldset>

              {errors.stars && touched.stars ? (
                <span className="error">
                  <img src={IcoWarning} alt=""/>
                  {errors.stars}
                </span>
              ) : null}
              {values.stars ? 
                <button type="button" onClick={handleDialog}>confirmar</button>
              : <button type="button" onClick={handleDialog} disabled>confirmar</button>}
            </Balloon>
            </>
          : null }

          {submitDialog ?
            <motion.div
              transition={{
                delay: 0.5,
                duration: 0.5
              }}
              variants={{
                show: { opacity: 1, scale: '1' },
                hidden: { opacity: 0, scale: '0' }
              }}
              initial="hidden"
              animate="show"
            >
              <Button type="submit">Salvar</Button>
            </motion.div>
          : null }

        </Form>
      )}
    </Formik>
  );
}

export default Chat;