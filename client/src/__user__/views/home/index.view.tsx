import { Helmet } from 'react-helmet';

import { MenuResponse } from 'MenuTypes';
import { useGetMenuPresenter } from 'models';
import { PageWrapper } from '__user__/layouts';
import { AsyncRenderer, SkeletonUI } from 'components';

import Form from './form.component';
import { Menu } from './menu.component';

export function Home() {
  const { isLoading, data, error, search, sortBy, onSearch, onSort } = useGetMenuPresenter();

  return (
    <>
      <Helmet>
        <title>HeyCater Menu 🥗</title>
        <meta name="description" content="The best platform that connect caterers and clients" />
        <meta name="keywords" content="food, caterers, eat, order food, order, Costa rica" />
      </Helmet>
      <PageWrapper>
        <Form.Root search={search} sortBy={sortBy} onSearch={onSearch} onSort={onSort}>
          <Form.Body />
        </Form.Root>
        <AsyncRenderer<MenuResponse[]>
          isLoading={isLoading}
          error={error!}
          data={data}
          hasData={!!data?.length}
          loader={<SkeletonUI />}
        >
          {(menus) => (
            <ul data-testid="menus">
              {menus?.map((menu) => (
                <li key={menu.id}>
                  <Menu {...menu} />
                </li>
              ))}
            </ul>
          )}
        </AsyncRenderer>
      </PageWrapper>
    </>
  );
}
