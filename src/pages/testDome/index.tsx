import React from 'react';
import styles from './index.module.css';
import { Row, Col, Input, Button, Form } from 'antd';
import { useNavigate } from 'react-router-dom';

const TestDome: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <div className={styles.registerContainer}>
      <div className={styles.box__content}>
        <div className={styles['form-box__header']}>
          <div className={styles.titleBox}>
            <span className={styles.title__text}>账号注册</span>
            <span className={styles.title__mark}></span>
          </div>
          <div className={styles.loginSelector}>
            <span className={styles.paratext} onClick={() => {}}>
              已有账号？前往登录
            </span>
          </div>
        </div>
        <Form
          className={styles['form-box__content']}
          form={form}
          name="basic"
          layout="vertical"
          // onFinish={handleRegister}
          autoComplete="off"
        >
          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label={<span className={styles.formItemRequiredLabel}>昵称</span>}
                className={styles.selfFormItem}
                name="name"
                rules={[{ required: true, message: '请输入您的昵称' }]}
              >
                <Input className={styles.selfInput} placeholder="请输入您的昵称" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label={<span className={styles.formItemRequiredLabel}>电子邮箱</span>}
                className={styles.selfFormItem}
                name="email"
                rules={[
                  { required: true, message: '请输入您的电子邮箱' },
                  { type: 'email', message: '请输入正确的电子邮箱' },
                ]}
              >
                <Input className={styles.selfInput} placeholder="请输入您的电子邮箱" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label={<span className={styles.formItemRequiredLabel}>密码</span>}
                className={styles.selfFormItem}
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password className={styles.selfInput} placeholder="请输入密码" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label={<span className={styles.formItemRequiredLabel}>确认密码</span>}
                className={styles.selfFormItem}
                name="password2"
                rules={[
                  { required: true, message: '请输入确认密码' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次密码输入不一致'));
                    },
                  }),
                ]}
              >
                <Input.Password className={styles.selfInput} placeholder="请输入确认密码" />
              </Form.Item>
            </Col>
          </Row>
          <div className={styles.box__operation}>
            <Button
              className={styles.selfRegButton}
              type="primary"
              htmlType="submit"
              onClick={() => {}}
            >
              立即注册
            </Button>
          </div>
          <Form.Item name="uuid" hidden></Form.Item>
        </Form>
        <div className={styles['form-box__footer']}>
          <div className={styles.agreement}>
            注册或登录即代表您同意
            <span className={styles.agreementLink}>《用户协议》</span>和
            <span className={styles.agreementLink}>《隐私协议》</span>
          </div>
        </div>
        <div style={{ marginTop: '30px' }}>
          <Button
            onClick={() => {
              navigate('/list');
            }}
          >
            用户列表
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestDome;
