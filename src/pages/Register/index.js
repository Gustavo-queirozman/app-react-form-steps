import React, { lazy, Suspense } from "react";
import {Card, Container, Button} from 'react-bootstrap';

const loadForm = (formName) => lazy(() => import(`./${formName}`));

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_step: props?.current_step || 0,
      show_main: props?.show_main ?? true,
      show_step: props?.show_step ?? false,
      DynamicStep: null,
    };
  }

  setStep = (value) => {
    if (value) {
      const DynamicStep = loadForm(`Step${value}`);
      this.setState({
        show_main: false,
        show_step: true,
        current_step: value,
        DynamicStep,
      });
    }
  };

  goBack = () => {
    this.setState({
      show_main: true,
      show_step: false,
      current_step: 0,
      DynamicStep: null,
    });
  };

  render() {
    let { show_step, show_main, DynamicStep } = this.state;
    const steps = [
      { title: "Informações pessoais", body: "nome, celular",stepOrder: 1 },
      { title: "Dados de acesso", body: "email, senha",stepOrder: 2 },
      { title: "Endereço", body: "cep, rua, bairro",stepOrder: 3 },
    ];

    return (
      <div>
        {show_main && (
          <>
            {steps.map((step) => (
                <Container>
                    <Card key={step} onClick={() => this.setStep(step.stepOrder)} style={{backgroundColor:'rgba(56, 134, 41, 0.89)'}}>
                    
                        <Card.Title>{step.title}</Card.Title>
                        
                       
                    </Card>
                    <br />
              </Container>
            ))}
          </>
        )}
        {show_step && DynamicStep && (
          <Suspense fallback={<div>Carregando...</div>}>
            <DynamicStep onBack={this.goBack} />
          </Suspense>
        )}
      </div>
    );
  }
}

export default Register;
