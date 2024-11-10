import { MenuModel } from 'models';
import { MenuResponse } from 'MenuTypes';
import { PrimaryButton } from 'components';

import icnFood from 'design-system/assets/icn-get-it-done-bowl.png';

import { Card, Image, Name, Price, DetailsWrapper } from './menu.styles';

type MenuPropTypes = MenuResponse;

export function Menu({ name, description, price, currency, image_url }: MenuPropTypes) {
  return (
    <Card>
      <Image src={image_url || icnFood} alt="food" />
      <DetailsWrapper>
        <Name>{name}</Name>
        <p>{description}</p>
        <Price>{MenuModel.formatCurrency(Number(price), currency)}</Price>
        <PrimaryButton disabled>Order</PrimaryButton>
      </DetailsWrapper>
    </Card>
  );
}
