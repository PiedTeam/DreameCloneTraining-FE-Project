import { useState } from 'react';
import type { UploadProps } from 'antd';
import { Button, message, Space, Upload, Form } from 'antd';
import { uploadFile } from '../../service/api';

interface NormFileType {
  fileList: File[];
}

interface FieldType {
  myFile: {
    originFileObj: File;
  };
}

const { Dragger } = Upload;
const { Item } = Form;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const beforeUpload = (): boolean => false;

const getFile = (e: NormFileType): File => {
  console.log('Upload event:', e);
  return e.fileList[0];
};

const uploadProps: UploadProps = {
  name: 'file',
  multiple: true,
  maxCount: 1,
  beforeUpload,
};

const FormUploadFile: React.FC = () => {
  const [isAllowSubmit, setIsAllowSubmit] = useState<boolean>(false);

  const onFinish = (values: FieldType): void => {
    console.log(values);
    setIsAllowSubmit((prevIsAllowSubmit) => !prevIsAllowSubmit);
    (async (): Promise<void> => {
      try {
        const data = await uploadFile(values.myFile.originFileObj);
        console.log(data);
        message.success('Upload file success');
      } catch (error) {
        message.error('Faild to upload file');
        console.log('error');
      } finally {
        setIsAllowSubmit(false);
      }
    })();
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Item<FieldType>
        label="Dragger"
        name="myFile"
        valuePropName="myFile"
        getValueFromEvent={getFile}
        rules={[{ required: true, message: 'Please select file to upload' }]}
      >
        <Dragger {...uploadProps}>
          {/* <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p> */}
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Dragger>
      </Item>

      <Item wrapperCol={{ span: 12, offset: 6 }}>
        <Space>
          <Button type="primary" htmlType="submit" disabled={isAllowSubmit}>
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Item>
    </Form>
  );
};

export default FormUploadFile;
