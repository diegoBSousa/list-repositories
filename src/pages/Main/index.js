import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

class Main extends Component {
  state = {
    //
  };

  render() {
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Adicionar repositório" />

          <SubmitButton disabled>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
