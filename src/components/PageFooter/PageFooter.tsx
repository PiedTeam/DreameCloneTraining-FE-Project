import { Footer } from 'antd/lib/layout/layout.js';

const PageFooter = (): JSX.Element => {
  return <Footer style={{ textAlign: 'center' }}>Dreame ©{new Date().getFullYear()} Created by Ant UED</Footer>;
};
export default PageFooter;
