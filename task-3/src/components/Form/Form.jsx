import { Input, BtnList, Button, MainForm } from "./Form.styled";

export const Form = ({ sendForm, resetForm }) => {
  return (
    <div>
      <MainForm onSubmit={sendForm}>
        <Input name="query" type="text" />
        <BtnList>
          <li>
            <Button type="submit">Send</Button>
          </li>
          <li>
            <Button onClick={resetForm} type="reset">
              Reset
            </Button>
          </li>
        </BtnList>
      </MainForm>
    </div>
  );
};
