import React from 'react';
import { Input, FormItem, FormButtonGroup, Submit, Select, Reset, Radio, Switch, Password, Upload, FormLayout } from '@formily/antd';
import { createForm, onFieldValueChange } from '@formily/core';
import { FormProvider, Field, FormConsumer } from '@formily/react';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const form = createForm({
  values: {
    input: '初始化数据'
  },
//   editable: true, 
  effects() {
    onFieldValueChange('select', (field) => {
      form.setFieldState('mvmv', (state) => {
        //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
        state.display = field.value; // 'none'时 ui 数据隐藏  'hidden时: ui隐藏  数据不隐藏
        // state.visible = field.value;  //ui 数据都隐藏
        // state.hidden = field.value;  //ui隐藏  数据不隐藏
      });
      form1.setFormState((state) => {
        //对于初始联动，如果字段找不到，setFieldState会将更新推入更新队列，直到字段出现再执行操作
        state.display = field.value;
      });
    });
  },
});
const form1 = createForm();

function formily() {
  const submit = (v) => {
    console.log('v', v);
  };
  const DraggerUpload = (props) => {
    return (
      <Upload.Dragger {...props} action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Upload.Dragger>
    );
  };
  return (
    <div>
      <FormProvider form={form}>
        <FormLayout>
          <Field name="mvmv" title="输入框" required initialValue="Hello world" decorator={[FormItem]} component={[Input]} />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px dashed #666',
              }}
            >
              实时响应：{form.values.mvmv}
            </div>
          )}
        </FormConsumer>
        <Field
          name="input"
          title="输入框"
          required
          decorator={[
            FormItem,
            {
              colon: false,
              tooltip: '输入框',
            },
          ]}
          component={[
            Input,
            {
              style: {
                width: 240,
              },
            },
          ]}
        />
        <Field
          name="pwd"
          title="密码框"
          required
          decorator={[FormItem]}
          component={[
            Password,
            {
              checkStrength: true,
            },
          ]}
        />
        <Field
          name="select"
          required
          title="选择框"
          decorator={[FormItem]}
          component={[Select]}
          dataSource={[
            { label: '显示', value: 'visible' },
            { label: '隐藏', value: 'hidden' },
          ]}
        />
        <Field
          name="radio"
          title="单选"
          dataSource={[
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ]}
          decorator={FormItem}
          component={Radio.Group}
        />
        <Field name="switch" title="开关" decorator={[FormItem]} component={[Switch]} />
        <Field name="upload3" title="拖拽上传" decorator={[FormItem]} component={[DraggerUpload]} />
        <FormButtonGroup>
          <Submit onSubmit={submit}>提交</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </FormProvider>

      <FormProvider form={form1}>
        <FormLayout>
          <Field name="mvmv" title="输入框" required initialValue="Hello world" decorator={[FormItem]} component={[Input]} />
          <Field
            name="input"
            title="输入框"
            required
            decorator={[
              FormItem,
              {
                colon: false,
                tooltip: '输入框',
              },
            ]}
            component={[
              Input,
              {
                style: {
                  width: 240,
                },
              },
            ]}
          />
        </FormLayout>
        <FormButtonGroup>
          <Submit onSubmit={submit}>提交</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </FormProvider>
    </div>
  );
}
export default formily;
