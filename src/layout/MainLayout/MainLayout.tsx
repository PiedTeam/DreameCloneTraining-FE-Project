import PageHeader from '../../components/PageHeader/PageHeader';
import PageContent from '../../components/PageContent/PageContent';
import PageFooter from '../../components/PageFooter/PageFooter';
import * as Antd from 'antd';

const MainLayout = (): JSX.Element => {
  return (
    <Antd.Layout
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        height: '100vh',
      }}
    >
      <PageHeader />
      <PageContent />
      <PageFooter />
    </Antd.Layout>
  );
};

export default MainLayout;
