import { Modal } from 'components';
import { useCreatePresenter } from 'models';

import { Wrapper, TextField, TextArea, Select, Option, Submit } from './form.style';

export function Form() {
  const { onSubmit, isPending, isSuccess, isError } = useCreatePresenter();

  return (
    <>
      <Wrapper onSubmit={onSubmit}>
        <TextField name="name" placeholder="Enter menu name" required />
        <TextArea name="description" placeholder="Describe the menu" rows={4} cols={50} />
        <TextField type="number" name="price" placeholder="Enter price" required />
        <TextField placeholder="Enter image URL" name="imageUrl" />
        <Select name="currency" required>
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="CRC">CRC</Option>
        </Select>
        <Submit type="submit" disabled={isPending}>
          Submit
        </Submit>
      </Wrapper>
      {isSuccess && (
        <Modal open type="success">
          Menu created successfully
        </Modal>
      )}
      {isError && (
        <Modal open type="error">
          An error occurred. Try again later
        </Modal>
      )}
    </>
  );
}
