import { Modal, ListError, PrimaryButton } from 'components';
import { useCreatePresenter } from 'models';

import { Wrapper, TextField, TextArea, Select, Option } from './form.style';

export function Form() {
  const { onSubmit, isPending, isSuccess, isError, error } = useCreatePresenter();

  return (
    <>
      <Wrapper onSubmit={onSubmit}>
        <TextField name="name" placeholder="Enter menu name" required />
        <TextArea name="description" placeholder="Describe the menu" rows={4} cols={50} />
        <TextField type="number" name="price" placeholder="Enter price" required />
        <TextField placeholder="Enter image URL" name="imageUrl" />
        <Select name="currency">
          <Option value="">Select currency</Option>
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="CRC">CRC</Option>
        </Select>
        <PrimaryButton type="submit" disabled={isPending}>
          Submit
        </PrimaryButton>
      </Wrapper>
      {isSuccess && (
        <Modal open type="success">
          Menu created successfully
        </Modal>
      )}
      {isError && error && (
        <Modal open type="error">
          <ListError errors={error} />
        </Modal>
      )}
    </>
  );
}
