import { FormContainer, Input, TextArea } from './styles';

export function HandleSubmit() {
  return (
    <FormContainer
      action="https://formsubmit.co/cirinhozcosta1@gmail.com"
      method="POST"
    >
      <Input type="text" name="name" placeholder="name" required />
      <Input type="email" name="email" placeholder="email" required />
      <TextArea name="Message" placeholder="Mensagem" required />
      <button type="submit">Send</button>
      <input type="hidden" name="_next" value="http://localhost:3000" />
    </FormContainer>
  );
}
